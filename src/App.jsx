import React, {Suspense} from 'react'
import {useRoutes} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleThemeAction } from './store/actions/common'
import { MDBBtn } from 'mdb-react-ui-kit'
import routes from './routes.jsx'
import EditorNavbar from './components/EditorNavbar/EditorNavbar'

const ToggleButton = () => {
    const dispatch = useDispatch()

    const toggleTheme = () => {
        dispatch(toggleThemeAction())
    }
    return (
        <MDBBtn
            color="red"
            onClick={toggleTheme}
        >Toggle theme
        </MDBBtn>
    )
}

const App = () => {
    const routing = useRoutes(routes)
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                {routing}
                <EditorNavbar/>
                <ToggleButton/>
            </Suspense>
        </>
    )
}

export default App
