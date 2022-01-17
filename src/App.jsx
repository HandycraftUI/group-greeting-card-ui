import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import Login from './components/Login/Login.jsx'
import routes from './routes.jsx'
import Navbar from './components/Navbar/Navbar'

const App = () => {
    const routing = useRoutes(routes)
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                {routing}
                <Login />
            </Suspense>
        </>
    )
}

export default App
