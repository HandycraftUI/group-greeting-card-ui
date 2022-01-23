import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    MDBNavbarItem,
    MDBIcon,
} from 'mdb-react-ui-kit'

const LoggedUserNavigation = ({ firstname }) => {
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
                <Link to='/auth/logout' className='nav-links pe-2'>
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
