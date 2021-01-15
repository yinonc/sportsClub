import { UserData, userId } from '../schemas'
import { getAllMockUsers } from '../mocks/userData'
import { RegisterScreenState } from './components/screens/registerScreen'
import constants from './constants'

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

export const DEFAULT_USER_REGION = 'en'

const nickNameRegex = new RegExp(/[a-zA-Z0-9]{6,12}/)
const emailRegex = new RegExp(/^[\w.\-]+@[\w.\-]+\.[A-Za-z]{2,3}$/)

export type UserInputFields = 'nickname' | 'password' | 'rePassword' | 'email'

export interface UserInputField {
    key: UserInputFields
    placeholder: string
}

export const userFieldsValidations: {
    [key in UserInputFields]: (state: RegisterScreenState) => string
} = {
    nickname: ({ nickname }): string => {
        if (!nickname) {
            return 'Must fill a username'
        }
        if (nickname.length < 2 || nickname.length > 20) {
            return 'Username must be between 2 and 20 length'
        }
        if (!nickNameRegex.test(nickname)) {
            return 'Nickname must be letters and numbers only'
        }
        return ''
    },
    password: ({ password }): string => {
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

export const registerUser = ({
    dateOfBirth,
    email,
    password,
    region,
    profilePicture = '',
    firstName = '',
    lastName = '',
    nickName = ''
}): Promise<UserData> => {
    return fetch('http://3.15.221.85:8082/api/users', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            dateOfBirth,
            email,
            firstName,
            lastName,
            nickName,
            password,
            profilePicture,
            region
        })
    })
        .then((x) => x.json())
        .catch((e) => {
            console.log(e)
        })
}

export const getUserByMail = async (
    email: string
): Promise<UserData | null> => {
    return fetch(`http://3.15.221.85:8082/api/users/email/${email}`)
        .then((x) => x.json())
        .then((data) => {
            if (
                data.internalErrorCode ===
                constants.ERROR_CODES.NOT_FOUND_BY_EMAIL
            ) {
                return null
            }
            return data
        })
}
