import React from 'react'
import { useDispatch } from 'react-redux'
import { authenticateAction } from '../../store/actions/user'
import { MDBBtn } from 'mdb-react-ui-kit'

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
