import React from 'react'
import { Navigate } from 'react-router-dom'
const jwt = require('jsonwebtoken')

export const ProtectedRoute = (Component) => {
    const user = JSON.parse(localStorage.getItem('userData'))
    let isExpired = false
    
    if (user) {
        const { exp } = jwt.decode(user.data.token)
        isExpired = Date.now() <= exp
    }

    const WrappedComponent = (props) => {
        return isExpired
            ? <Component {...props} />
            : <Navigate to='/' />
    }

    return WrappedComponent
}
