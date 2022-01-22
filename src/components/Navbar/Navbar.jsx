import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarNav,
} from 'mdb-react-ui-kit'

import GuestUserNavigation from './GuestUserNavigation'
import LoggedUserNavigation from './LoggedUserNavigation'
import Hamburger from '../Hamburger/Hamburger'
import useTheme from '../../hooks/use-theme'
import { respondTo } from '../../style-config/respond-to'
import ToggleButton from '../ToggleButton/ToggleButton'

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
    const isAuth = useSelector(state => state.user.isAuth)
    const firstname = useSelector(state => state.user.userData.firstName)

    return (
        <>
            <NavbarComponent expand='lg' dark theme={theme}>
                <MDBContainer fluid>
                    <Link to='/' className='navbar-brand'>Greeting Card</Link>
                    <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0' >
                        {isAuth ? <LoggedUserNavigation firstname={firstname} /> : <GuestUserNavigation />}
                    </MDBNavbarNav>
                    <Hamburger />
                </MDBContainer>
            </NavbarComponent>

            <ToggleButton />
        </>
    )
}

export default Navbar
