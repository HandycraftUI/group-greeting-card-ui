import React from 'react'
import styled from 'styled-components'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
} from 'mdb-react-ui-kit'

const NavbarComponent = styled(MDBNavbar)`
    background-color: #116;
    color: white;
    font-size: 1.2rem;
    padding: 0.5rem 1rem; 
`
const LogoComponent = styled(MDBNavbarBrand)`
    font-family: 'Twinkle Star', cursive;
    font-size: 1.5rem;
    list-style-type: none;
`

function LoggedUserNavigation() {

    return (
        <NavbarComponent expand='lg' dark>
            <MDBContainer fluid>
                <LogoComponent href='/'>Greeting Card</LogoComponent>
                <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0' >
                    <MDBNavbarItem>
                        <MDBNavbarLink href='/editor' active>Create Card</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='/me' active>Hello, $$$</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='/auth/logout' active>Logout</MDBNavbarLink>
                    </MDBNavbarItem>
                </MDBNavbarNav>
            </MDBContainer>
        </NavbarComponent>
    )
}

export default LoggedUserNavigation
