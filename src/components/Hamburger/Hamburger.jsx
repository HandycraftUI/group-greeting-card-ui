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
import { respondTo } from '../../style-config/respond-to'

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
    ${respondTo.xsmall`
        position: absolute;
        top: 1.4rem;
        right: 1rem;
    `}

    ${respondTo.small`
        display: none;
    `}
`

const ToggledDivComponent = styled(MDBCollapse)`
    list-style: none;
    text-align: center;
    color: ${({ theme }) => theme.palette.navbar.primary};
    width: 100%;

    ${respondTo.small`
        display: none;
    `}
`

const Hamburger = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const isAuthenticated = true
    const theme = useTheme()

    const LoggedUserLinks = (
        <>
            <MDBNavbarItem theme={theme}>
                <Link to='/editor' className='nav-links'>
                    <IoIosAddCircleOutline className='nav-icon me-2' />
                    Create Card
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem className='pt-1'>
                <Link to='/me' className='nav-links'>
                    <FaUserAlt className='nav-icon me-2' />
                    Hello, $$$
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem className='pt-1'> 
                <Link to='/auth/logout' className='nav-links'>
                    <FiLogOut className='nav-icon me-2' />
                    Logout
                </Link>
            </MDBNavbarItem>
        </>
    )

    const GuestUserLinks = (
        <>
            <MDBNavbarItem theme={theme}>
                <Link to='/auth/login' className='nav-links mb-2'>
                    <FaSignInAlt className='nav-icon me-2' />
                    Login
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem  className='pt-1'>
                <Link to='/auth/register' className='nav-links'>
                    <BsFillPeopleFill className='nav-icon me-2' />
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
