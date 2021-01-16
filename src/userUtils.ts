import { UserData, userId, RegisterBody } from '../schemas'
import { getAllMockUsers } from '../mocks/userData'
import { RegisterScreenState } from './components/screens/registerScreen'
import API from './api'
import { ImageSourcePropType } from 'react-native'

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
            return 'Must fill a nickname'
        }
        if (nickname.length < 2 || nickname.length > 20) {
            return 'Nickname must be between 2 and 20 length'
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

export const getUserProfilePictureSource = (
    userData: UserData
): ImageSourcePropType => {
    return userData.profilePicture
        ? { uri: userData.profilePicture }
        : require('../assets/defaultProfileImage.jpg')
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
}: RegisterBody): Promise<UserData> => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
    const body = {
        dateOfBirth,
        email,
        password,
        region,
        profilePicture,
        firstName,
        lastName,
        nickName
    }
    return API.registerUser(headers, body)
}
