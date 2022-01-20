import { lazy } from 'react'
import React from 'react'
import Login from './components/Login/Login'

const Home = lazy(() => import('./pages/Home'))

const routeConfig = [
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/auth/login',
        element: <Login />
    }
]

export default routeConfig
