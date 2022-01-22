const BASE_URL = 'http://localhost:3000/auth'

export const register = async (authData) => {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(authData)
    })

    const data = await response.json()

    return data
}
