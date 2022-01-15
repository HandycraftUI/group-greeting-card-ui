import React from 'react'
import { useDispatch } from 'react-redux'
import { MDBBtn } from 'mdb-react-ui-kit'

import { authenticateAction } from '../../store/actions/user'

const AuthenticateButton = () => {
    const dispatch = useDispatch()

    const authenticate = () => {
        dispatch(authenticateAction())
    }
    return (
        <MDBBtn
            color="green"
            onClick={authenticate}
        >Authenticate Me!
        </MDBBtn>
    )
}

export default AuthenticateButton
