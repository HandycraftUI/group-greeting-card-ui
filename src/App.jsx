import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './routes.jsx'
import Navbar from './components/Navbar/Navbar'

const App = () => {
    let isAuth = false
    const userData = JSON.parse(localStorage.getItem('userData'))

    if(userData) {
        isAuth = userData.success
    }
    
    const routing = useRoutes(routes(isAuth))

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <>
                    {routing}
                </>
            </Suspense>
        </>
    )
}

export default App
