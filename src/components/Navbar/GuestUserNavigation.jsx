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
     
    .navbar-brand{
        font-family: 'Twinkle Star', cursive;
        font-size: 1.5rem;
        list-style-type: none;
    }

    .navbar-nav{
        display: flex;
        flex-direction: row;
    }

    .nav-item{
        padding-left: 1rem;
    }

    @media (min-width: 320px) {
        .container-fluid{
            display: inline;
            font-size: 1.5rem
        }

        .navbar-nav{
            flex-direction: column;
        }
    }

    @media (min-width: 480px) {
        .container-fluid{
            display: flex;
        }

        .navbar-nav{
            flex-direction: row;
        }
    }
`

function GuestUserNavigation() {

    return (
        <NavbarComponent expand='lg' dark>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/'>Greeting Card</MDBNavbarBrand>
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

export default GuestUserNavigation
