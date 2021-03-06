import React from 'react'
import { Link } from 'react-router-dom'
import {
    MDBNavbarItem,
    MDBIcon,
} from 'mdb-react-ui-kit'

import ToggleButton from '../ToggleButton/ToggleButton'

const GuestUserNavigation = () => {

    return (
        <>
            <MDBNavbarItem>
                <Link to='/auth/login' className='nav-links pe-2'>
                    <MDBIcon fas icon="sign-in-alt" size='sm' />
                    Login
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <Link to='/auth/register' className='nav-links pe-2'>
                    <MDBIcon fas icon="users" size='sm' />
                    Register
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <ToggleButton />
            </MDBNavbarItem>
        </>
    )
}

export default GuestUserNavigation
