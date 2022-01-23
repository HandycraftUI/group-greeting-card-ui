import { lazy } from 'react'
import React from 'react'
import Login from './components/Login/Login'

const Home = lazy(() => import('./pages/Home'))
const Editor = lazy(() => import('./pages/Editor/Editor'))

const routeConfig = [
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/auth/login',
        element: <Login />
    },
    {
        path: '/editor',
        element: <Editor />
    }
]

export default routeConfig
