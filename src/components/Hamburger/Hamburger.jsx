import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import useTheme from '../../hooks/use-theme'
import {
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBCollapse,
    MDBContainer,
} from 'mdb-react-ui-kit'
import { FaBars, FaSignInAlt, FaUserAlt } from 'react-icons/fa'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { BsFillPeopleFill } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'


const HamburgerComponent = styled(MDBContainer)`
    font-family: 'Raleway', sans-serif;
   
    .container{
         justify-content: flex-end;
    }

    .nav-icon{
        margin-right: 0.5rem;
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
                    <IoIosAddCircleOutline className='nav-icon'/>
                    Create Card
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <Link to='/me' className='nav-links'>
                    <FaUserAlt className='nav-icon'/>
                    Hello, $$$
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <Link to='/auth/logout' className='nav-links'>
                    <FiLogOut className='nav-icon'/>
                    Logout
                </Link>
            </MDBNavbarItem>
        </>
    )

    const GuestUserLinks = (
        <>
            <MDBNavbarItem theme={theme}>
                <Link to='/auth/login' className='nav-links'>
                    <FaSignInAlt className='nav-icon'/>
                    Login
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <Link to='/auth/register' className='nav-links'>
                    <BsFillPeopleFill className='nav-icon'/>
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
                    <FaBars />
                </IconComponent>
            </MDBContainer>
            <ToggledDivComponent show={toggleMenu} theme={theme}>
                {isAuthenticated ? LoggedUserLinks : GuestUserLinks}
            </ToggledDivComponent>
        </HamburgerComponent>
    )
}

export default Hamburger
