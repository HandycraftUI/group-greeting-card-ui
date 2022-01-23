import { lazy } from 'react'
import React from 'react'

const Login = lazy(() => import('./components/Login/Login'))
const Register = lazy(() => import('./components/Register/Register'))
const Home = lazy(() => import('./pages/Home'))
const Editor = lazy(() => import('./pages/Editor/Editor'))

const routeConfig = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/auth/login',
        element: <Login />
    },
    {
        path: '/auth/register',
        element: <Register />
    },
    {
        path: '/editor',
        element: <Editor />
    }
]

export default routeConfig
