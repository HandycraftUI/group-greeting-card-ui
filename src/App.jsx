import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './routes.jsx'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer.jsx'
import { decodeToken } from './services/decodeToken.js'

const App = () => {
    const routing = useRoutes(routes(decodeToken()))

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <>
                    {routing}
                </>
            </Suspense>
            <Footer />
        </>
    )
}

export default App
