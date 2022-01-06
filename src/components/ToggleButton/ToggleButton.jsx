import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleThemeAction } from '../../store/actions/common'
import { MDBBtn } from 'mdb-react-ui-kit'

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

export default ToggleButton
