const jwt = require('jsonwebtoken')

export const decodeToken = () => {
    const user = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER))
    let isExpired = false

    if (user) {
        const { exp } = jwt.decode(user.data.token)
        isExpired = Date.now() <= exp * 1000
    }

    return isExpired
}
