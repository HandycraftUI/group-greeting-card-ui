import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import useTheme from '../../hooks/use-theme'
import {
    MDBIcon,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBCollapse,
    MDBContainer,
} from 'mdb-react-ui-kit'

const HamburgerComponent = styled(MDBContainer)`
    font-family: 'Raleway', sans-serif;
   
    .container{
         justify-content: flex-end;
    }

    .navbar-toggler{
        color: ${({ theme }) => theme.palette.white};
    }
`

const IconComponent = styled(MDBNavbarToggler)`
    @media (min-width: 320px) {
        position: absolute;
        top: 1.4rem;
        right: 1rem;
    }

    @media (min-width: 480px) {
        display: none;
    }
`

const ToggledDivComponent = styled(MDBCollapse)`
    list-style: none;
    text-align: center;
    color: ${({ theme }) => theme.palette.navbar.primary};
    width: 100%;

    @media (min-width: 480px) {
        display: none;
    }
`

const Hamburger = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const isAuthenticated = true
    const theme = useTheme()

    const LoggedUserLinks = (
        <>
            <MDBNavbarItem theme={theme}>
                <Link to='/editor' className='nav-links'>
                    <MDBIcon fas icon="plus" size='sm' />
                    Create Card
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <Link to='/me' className='nav-links'>
                    <MDBIcon fas icon="user-alt" size='sm' />
                    Hello, $$$
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <Link to='/auth/logout' className='nav-links'>
                    <MDBIcon fas icon="sign-out-alt" size='sm' />
                    Logout
                </Link>
            </MDBNavbarItem>
        </>
    )

    const GuestUserLinks = (
        <>
            <MDBNavbarItem theme={theme}>
                <Link to='/auth/login' className='nav-links'>
                    <MDBIcon fas icon="sign-in-alt" size='sm' />
                    Login
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <Link to='/auth/register' className='nav-links'>
                    <MDBIcon fas icon="users" size='sm' />
                    Register
                </Link>
            </MDBNavbarItem>
        </>
    )

    return (
        <HamburgerComponent theme={theme}>
            <MDBContainer>
                <IconComponent
                    type='button'
                    theme={theme}
                    onClick={() => setToggleMenu(!toggleMenu)}
                >
                    <MDBIcon icon='bars' />
                </IconComponent>
            </MDBContainer>
            <ToggledDivComponent show={toggleMenu} theme={theme}>
                {isAuthenticated ? LoggedUserLinks : GuestUserLinks}
            </ToggledDivComponent>
        </HamburgerComponent>
    )
}

export default Hamburger
