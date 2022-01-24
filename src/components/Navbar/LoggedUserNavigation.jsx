import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
    MDBNavbarItem,
    MDBIcon,
} from 'mdb-react-ui-kit'

import { logoutUser } from '../../store/actions/logoutUser'
import { authenticateAction } from '../../store/actions/user'

const LoggedUserNavigation = ({ firstname }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(authenticateAction())
        dispatch(logoutUser())

        localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE_USER)

        navigate('/auth/login')
    }

    return (
        <>
            <MDBNavbarItem>
                <Link to='/editor' className='nav-links pe-2'>
                    <MDBIcon fas icon="plus" size='sm' />
                    Create Card
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <Link to='/me' className='nav-links pe-2'>
                    <MDBIcon fas icon="user-alt" size='sm' />
                    Hello, {firstname}
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <Link to='/' className='nav-links pe-2' onClick={logout}>
                    <MDBIcon fas icon="sign-out-alt" size='sm' />
                    Logout
                </Link>
            </MDBNavbarItem>
        </>
    )
}

LoggedUserNavigation.propTypes = {
    firstname: PropTypes.string
}

export default LoggedUserNavigation
