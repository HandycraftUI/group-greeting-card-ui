import React from 'react'
import { useDispatch } from 'react-redux'
import { MDBBtn } from 'mdb-react-ui-kit'

import { toggleThemeAction } from '../../store/actions/common'

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
