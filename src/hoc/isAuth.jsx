import React from 'react'
import { Navigate } from 'react-router-dom'

export const isAuth = (Component) => {
    const user = JSON.parse(localStorage.getItem('userData'))

    const WrappedComponent = (props) => {
        return user
            ? <Navigate to='/' />
            : <Component {...props} />
    }

    return WrappedComponent
}
