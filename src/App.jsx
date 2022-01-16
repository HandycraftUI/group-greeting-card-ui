import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import Login from './components/Login/Login.jsx'
import routes from './routes.jsx'
import Navbar from './components/Navbar/Navbar'
import CustomButton from './components/CustomButtom/CustomButton.jsx'

const App = () => {
    const routing = useRoutes(routes)
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <CustomButton type='secondary'>
                   Register
                </CustomButton>
                {routing}
                <Login />
            </Suspense>
        </>
    )
}

export default App
