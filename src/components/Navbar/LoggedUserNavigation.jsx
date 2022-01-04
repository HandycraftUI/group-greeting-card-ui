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
    font-size: 1rem;
    padding: 0.5rem 1rem;
     
    .navbar-brand{
        font-family: 'Twinkle Star', cursive;
        font-size: 1.8rem;
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

    @media (min-width: 768px) {
        .container-fluid{
            display: flex;
        }

        .navbar-nav{
            flex-direction: row;
        }
    }
`

function LoggedUserNavigation() {

    return (
        <NavbarComponent expand='lg' dark>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/'>Greeting Card</MDBNavbarBrand>
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
