export const register = async (authData) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_AUTH_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(authData)
    })

    const data = await response.json()

    return data
}
