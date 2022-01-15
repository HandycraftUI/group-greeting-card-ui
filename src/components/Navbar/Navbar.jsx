import React from 'react'
import GuestUserNavigation from './GuestUserNavigation'
import LoggedUserNavigation from './LoggedUserNavigation'
import Hamburger from '../Hamburger/Hamburger'
import styled from 'styled-components'
import useTheme from '../../hooks/use-theme'
import useAuth from '../../hooks/use-auth'
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarNav,
} from 'mdb-react-ui-kit'
import ToggleButton from '../ToggleButton/ToggleButton'
import AuthenticateButton from '../AuthenticateButton/AuthenticateButton'
import { respondTo } from '../../style-config/respond-to'

const NavbarComponent = styled(MDBNavbar)`
    background-color: ${({ theme }) => theme.palette.navbar.primary};
    color: ${({ theme }) => theme.palette.navbar.primary};
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

    .nav-links{
        color: ${({ theme }) => theme.palette.white};
    }
    
    .navbar .container{
        justify-content: flex-end;
        width: 100%;
    }

    ${respondTo.xsmall`
        flex-wrap: nowrap;

        .navbar-brand{
            width: 100%;
            padding-left: 1rem;
        }

        .container-fluid{
            flex-direction: column;
        }

        .navbar-nav{
          display: none;
        }
    `}

    ${respondTo.small`
        .container-fluid{
            flex-direction: row;
        }

        .container{
            display: none;
        }

        .navbar-nav{
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: end;
        }
    `}
`

const Navbar = () => {
    const theme = useTheme()
    const isAuth = useAuth()

    return (
        <>
            <NavbarComponent expand='lg' dark theme={theme}>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/'>Greeting Card</MDBNavbarBrand>
                    <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0' >
                        {isAuth ? <LoggedUserNavigation /> : <GuestUserNavigation />}
                    </MDBNavbarNav>
                    <Hamburger />
                </MDBContainer>
            </NavbarComponent>

            <ToggleButton />
            <AuthenticateButton />
        </>
    )
}

export default Navbar
