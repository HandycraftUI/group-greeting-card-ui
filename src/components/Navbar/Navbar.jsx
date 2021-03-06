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

    ${respondTo.medium`
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
    const user = JSON.parse(localStorage.getItem('userData'))
    let { isAuth } = useSelector(state => state.user)
    let firstName

    if (user) {
        isAuth = user.success
        firstName = user.firstName
    }

    return (
        <>
            <NavbarComponent expand='lg' dark theme={theme}>
                <MDBContainer fluid>
                    <Link to='/' className='navbar-brand'>Greeting Card</Link>
                    <MDBNavbarNav right fullWidth={false} className='mb-lg-0' >
                        {isAuth ? <LoggedUserNavigation firstname={firstName} /> : <GuestUserNavigation />}
                    </MDBNavbarNav>
                    <Hamburger firstname={firstName} />
                </MDBContainer>
            </NavbarComponent>
        </>
    )
}

export default Navbar
