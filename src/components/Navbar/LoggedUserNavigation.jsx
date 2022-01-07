import React from 'react'
import { Link } from 'react-router-dom'
import {
    MDBNavbarItem,
    MDBIcon,
} from 'mdb-react-ui-kit'

const LoggedUserNavigation = () => {

    return (
        <>
            <MDBNavbarItem>
                <Link to='/editor' className='nav-links'>
                    <MDBIcon fas icon="plus" size='sm' />
                    Create Card
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <Link to='/me' className='nav-links'>
                    <MDBIcon fas icon="user-alt" size='sm' />
                    Hello, $$$
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <Link to='/auth/logout' className='nav-links'>
                    <MDBIcon fas icon="sign-out-alt" size='sm' />
                    Logout
                </Link>
            </MDBNavbarItem>
        </>
    )
}

export default LoggedUserNavigation
