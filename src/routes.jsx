import { lazy } from 'react'
import React from 'react'
import Register from './components/Register/Register'

const Home = lazy(() => import('./pages/Home'))

const routeConfig = [
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/auth/register',
        element: <Register />
    }
]

export default routeConfig
