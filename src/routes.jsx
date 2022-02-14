import { lazy } from 'react'
import React from 'react'
import { Navigate } from 'react-router-dom'

const Login = lazy(() => import('./components/Login/Login'))
const Register = lazy(() => import('./components/Register/Register'))
const ChangePassword = lazy(() => import('./components/ChangePassword/ChangePassword'))
const ForgottenPassword = lazy(() => import('./components/ForgottenPassword/ForgottenPassword'))
const Home = lazy(() => import('./pages/Home'))
const Editor = lazy(() => import('./pages/Editor/Editor'))

const routeConfig = (isLoggedIn) => [
    {
        path: '/',
        element: isLoggedIn ? <Home /> : <Navigate to='/auth/login' />
    },
    {
        path: '/auth/login',
        element: !isLoggedIn ? <Login /> : <Navigate to='/' />
    },
    {
        path: '/auth/register',
        element: !isLoggedIn ? <Register /> : <Navigate to='/' />
    },
    {
        path: '/editor',
        element: isLoggedIn ? <Editor /> : <Navigate to='/auth/login' />
    },
    {
        path: '/auth/change-password',
        element: isLoggedIn ? <ChangePassword /> : <Navigate to='/auth/login' />
    },
    {
        path: '/auth/forgotten-password',
        element: isLoggedIn ? <ForgottenPassword /> : <Navigate to='/auth/login' />
    }
]

export default routeConfig
