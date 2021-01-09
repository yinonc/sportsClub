import { UserData, userId } from '../schemas'
import { getAllMockUsers } from '../mocks/userData'
import { RegisterScreenState } from './components/screens/registerScreen'

/**
 * This function will be refactored when have server implementation
 * @param userId - userId
 */
export const getUserDataById = (userId: userId): UserData | undefined => {
    return getAllMockUsers().find((userData) => userData.id === userId)
}

export const getParticipantsData = (userIds: UserData['id'][]): UserData[] => {
    return userIds.map((id) => getUserDataById(id))
}

const userNameRegex = new RegExp(/[a-zA-Z0-9]{6,12}/)
const emailRegex = new RegExp(/^[\w.\-]+@[\w.\-]+\.[A-Za-z]{2,3}$/)

export type UserInputFields = 'userName' | 'password' | 'rePassword' | 'email'

export interface UserInputField {
    key: UserInputFields
    placeholder: string
}

export const securedInputs = new Set<UserInputFields>([
    'password',
    'rePassword'
])

export const userInputsData: UserInputField[] = [
    { key: 'userName', placeholder: 'Username' },
    { key: 'password', placeholder: 'Password' },
    { key: 'rePassword', placeholder: 'RePassword' },
    { key: 'email', placeholder: 'Email' }
]

export const userFieldsValidations: {
    [key in UserInputFields]: (state: RegisterScreenState) => string
} = {
    userName: ({ userName }): string | null => {
        if (!userName) {
            return 'Must fill a username'
        }
        if (userName.length < 4 || userName.length > 12) {
            return 'Username must be between 4 and 12 length'
        }
        if (!userNameRegex.test(userName)) {
            return 'Username must be letters and numbers only'
        }
        return ''
    },
    password: ({ password }): string | null => {
        if (!password) {
            return 'Must fill a password'
        }
        if (password.length < 6 || password.length > 12) {
            return 'Password must be between 6 and 12 length'
        }
        return ''
    },
    rePassword: ({ rePassword, password }): string | null => {
        if (!rePassword) {
            return 'Must re-enter password'
        }
        if (rePassword !== password) {
            return 'Re - Password must match'
        }
        return ''
    },
    email: ({ email }): string | null => {
        if (!emailRegex.test(email)) {
            return 'Email is not valid'
        }
        return ''
    }
}
