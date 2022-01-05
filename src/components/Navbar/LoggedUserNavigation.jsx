import React from 'react'
import {
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
} from 'mdb-react-ui-kit'

function LoggedUserNavigation() {

    return (
        <>
            <MDBNavbarItem>
                <MDBNavbarLink href='/editor' >Create Card<MDBIcon fas icon="plus" size='sm'  /></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <MDBNavbarLink href='/me' >Hello, $$$<MDBIcon fas icon="user-alt" size='sm' /></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <MDBNavbarLink href='/auth/logout' >Logout<MDBIcon fas icon="sign-out-alt" size='sm' /></MDBNavbarLink>
            </MDBNavbarItem>
        </>
    )
}

export default LoggedUserNavigation
