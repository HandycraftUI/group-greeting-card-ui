export const register = async (authData) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_AUTH_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
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
            'Content-Type': 'application/json'
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
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })

    const data = await response.json()

    return data
}

export const forgottedPassword = async (email) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_AUTH_URL}/auth/forgotten-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })

    const data = await response.json()

    return data
}
