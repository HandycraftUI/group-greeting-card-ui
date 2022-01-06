import React from 'react'
import {
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
} from 'mdb-react-ui-kit'

const GuestUserNavigation = () => {

    return (
        <>
            <MDBNavbarItem>
                <MDBNavbarLink href='/auth/login'>Login<MDBIcon fas icon="sign-in-alt" size='sm'/></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <MDBNavbarLink href='/auth/register'>Register<MDBIcon fas icon="users" size='sm'/></MDBNavbarLink>
            </MDBNavbarItem>
        </>
    )
}

export default GuestUserNavigation
