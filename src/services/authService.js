import { constants } from '../common/global-constants'

export const register = async (authData) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_AUTH_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': constants.ContentType
        },
        body: JSON.stringify(authData)
    })

    const data = await response.json()

    return data
}

export const login = async (authData) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_AUTH_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': constants.ContentType
        },
        body: JSON.stringify(authData)
    })

    const data = await response.json()

    return data
}

export const changePassword = async (userData) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_AUTH_URL}/auth/change-password`, {
        method: 'POST',
        headers: {
            'Content-Type': constants.ContentType
        },
        body: JSON.stringify(userData)
    })

    return await response.json()
}

export const forgottedPassword = async (email) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_AUTH_URL}/auth/forgotten-password`, {
        method: 'POST',
        headers: {
            'Content-Type': constants.ContentType
        },
        body: JSON.stringify({ email })
    })

    return await response.json()
}
