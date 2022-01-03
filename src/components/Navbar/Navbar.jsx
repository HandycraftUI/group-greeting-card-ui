import React from 'react'
import styled from 'styled-components'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarBrand

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
`

function Navbar() {
    return (
        <NavbarComponent expand='lg' dark>
            <MDBContainer fluid>
                <LogoComponent href='/'>Greeting Card</LogoComponent>
                <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0' >
                    <MDBNavbarItem>
                        <MDBNavbarLink href='/auth/login' active>Login</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='/auth/register' active>Register</MDBNavbarLink>
                    </MDBNavbarItem>
                </MDBNavbarNav>
            </MDBContainer>
        </NavbarComponent>
    )
}

export default Navbar
