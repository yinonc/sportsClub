import constants from './constants'
import {
    UserData,
    RegisterHeaders,
    RegisterBody,
    EditUserData
} from '../schemas'

const SERVER_BASE_URL = 'http://3.15.221.85:8082/'

const fetchAPI = async (url, method, headers = {}, body = {}) => {
    return fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify({
            body
        })
    })
        .then((x) => x.json())
        .catch((e) => {
            console.log(e)
            return null
        })
}

export default {
    async registerUser(
        headers: RegisterHeaders,
        body: RegisterBody
    ): Promise<UserData> {
        return fetchAPI(`${SERVER_BASE_URL}api/users`, 'POST', headers, body)
    },

    async editUser(newUserData: EditUserData): Promise<EditUserData> {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
        return fetchAPI(
            `${SERVER_BASE_URL}api/users`,
            'PUT',
            headers,
            newUserData
        )
    },

    async uploadImage(image: ImageBitmap): Promise<string | null> {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
        return fetchAPI(`${SERVER_BASE_URL}api/images`, 'POST', headers, image)
    },

    async getUserByMail(email: string): Promise<UserData | null> {
        return fetchAPI(
            `${SERVER_BASE_URL}api/users/email/${email}`,
            'GET'
        ).then((data) => {
            if (
                data.internalErrorCode ===
                constants.ERROR_CODES.NOT_FOUND_BY_EMAIL
            ) {
                return null
            }
            return data
        })
    }
}