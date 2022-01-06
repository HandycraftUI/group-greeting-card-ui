import React from 'react'
import GuestUserNavigation from './GuestUserNavigation'
import LoggedUserNavigation from './LoggedUserNavigation'
import Hamburger from '../Hamburger/Hamburger'
import styled from 'styled-components'
import lightTheme from '../../themes/light'
import darkTheme from '../../themes/dark'
import { useTheme } from 'styled-components'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleThemeAction } from '../../store/actions/common'
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBBtn
} from 'mdb-react-ui-kit'
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

    .nav-link{
        font-size: 1.2rem;
    }

    .nav-item{
        padding-left: 1rem;
    }

    .navbar .container{
        justify-content: flex-end;
        width: 100%;
    }

    @media (min-width: 320px) {
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
    }

    @media (min-width: 480px) {
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
    }
`

const Navbar = () => {
    const isAuthenticated = true
    const { themeData } = useSelector(state => state.common)
    
    return (
        <>
            <NavbarComponent expand='lg' dark theme={themeData}>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/'>Greeting Card</MDBNavbarBrand>
                    <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0' >
                        {isAuthenticated ? <LoggedUserNavigation /> : <GuestUserNavigation />}
                    </MDBNavbarNav>
                    <Hamburger />
                </MDBContainer>
            </NavbarComponent>

            <ToggleButton />
        </>
    )
}

export default Navbar
