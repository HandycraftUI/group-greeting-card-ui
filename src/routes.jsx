import { lazy } from 'react'
import React from 'react'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

const Home = lazy(() => import('./pages/Home'))

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
    }
]

export default routeConfig
