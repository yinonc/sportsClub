import constants from './constants'
import {
    UserData,
    RegisterHeaders,
    RegisterBody,
    ImageDef,
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
        .then((res) => {
            if (res.status && res.status !== 200) {
                console.log(`Error in fetchAPI: ${res.status}`)
                console.log(res.error)
                throw new Error(res.error)
            }
            return res
        })
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

    async editUser(newUserData: EditUserData): Promise<UserData> {
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

    async editUserPassword(
        id: string,
        password: string,
        newPassword: string
    ): Promise<boolean> {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
        const body = {
            id,
            password,
            newPassword
        }
        return fetchAPI(
            `${SERVER_BASE_URL}api/users/password`,
            'PUT',
            headers,
            body
        )
    },

    async uploadImage(image: ImageDef): Promise<string | null> {
        return image.uri

        // TODO: implement when have such API
        // const headers = {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json'
        // }
        // return fetchAPI(`${SERVER_BASE_URL}api/images`, 'POST', headers, image)
    }
}
