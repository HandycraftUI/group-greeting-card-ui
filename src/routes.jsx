import {lazy} from 'react'
import React from 'react'

const Home = lazy(() => import('./pages/Home'))

const routeConfig = [
    {
        path: '/home',
        element: <Home/>
    }
]

export default routeConfig
