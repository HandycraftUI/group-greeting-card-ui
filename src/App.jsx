import React, {Suspense} from 'react'
import {useRoutes} from 'react-router-dom'
import routes from './routes.jsx'

function App() {
    const routing = useRoutes(routes)
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                {routing}
            </Suspense>
        </>
    )
}

export default App
