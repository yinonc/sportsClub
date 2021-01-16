import constants from './constants'
import { UserData, RegisterHeaders, RegisterBody } from '../schemas'

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

const API = {
    async registerUser(
        headers: RegisterHeaders,
        body: RegisterBody
    ): Promise<UserData> {
        return fetchAPI(
            'http://3.15.221.85:8082/api/users',
            'POST',
            headers,
            body
        )
    },

    async getUserByMail(email: string): Promise<UserData | null> {
        return fetchAPI(
            `http://3.15.221.85:8082/api/users/email/${email}`,
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

export default API
