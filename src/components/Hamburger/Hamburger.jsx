import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
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
import PropTypes from 'prop-types'

import useTheme from '../../hooks/use-theme'
import { respondTo } from '../../style-config/respond-to'
import ToggleButton from '../ToggleButton/ToggleButton'

const HamburgerComponent = styled(MDBContainer)`
    font-family: 'Raleway', sans-serif;
   
    .container{
         justify-content: flex-end;
    }
    
    .navbar-toggler{
        color: ${({ theme }) => theme.palette.white};
    }
`

const NavItemsWrapper = styled(MDBContainer)`
    width: fit-content;
    margin: 0 auto;

    .nav-item{
        text-align: left;
    }
`

const IconComponent = styled(MDBNavbarToggler)`
    ${respondTo.xsmall`
        position: absolute;
        top: 1.4rem;
        right: 1rem;
    `}

    ${respondTo.medium`
        display: none;
    `}
`

const ToggledDivComponent = styled(MDBCollapse)`
    list-style: none;
    text-align: center;
    color: ${({ theme }) => theme.palette.navbar.primary};
    width: 100%;

    ${respondTo.medium`
        display: none;
    `}
`

const Hamburger = ({ firstName }) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const theme = useTheme()
    const user = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER))
    let isAuth = useSelector(state => state.user.isAuth)

    if (user) {
        isAuth = user.success
        firstName = user.firstName
    }

    const LoggedUserLinks = (
        <NavItemsWrapper>
            <MDBNavbarItem theme={theme}>
                <Link to='/editor' className='nav-links'>
                    <IoIosAddCircleOutline className='nav-icon me-2' />
                    Create Card
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem className='pt-1'>
                <Link to='/me' className='nav-links'>
                    <FaUserAlt className='nav-icon me-2' />
                    Hello, {firstName}
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem className='pt-1'>
                <Link to='/auth/logout' className='nav-links'>
                    <FiLogOut className='nav-icon me-2' />
                    Logout
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <ToggleButton />
            </MDBNavbarItem>
        </NavItemsWrapper>
    )

    const GuestUserLinks = (
        <NavItemsWrapper>
            <MDBNavbarItem theme={theme}>
                <Link to='/auth/login' className='nav-links mb-2'>
                    <FaSignInAlt className='nav-icon me-2' />
                    Login
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem className='pt-1'>
                <Link to='/auth/register' className='nav-links'>
                    <BsFillPeopleFill className='nav-icon me-2' />
                    Register
                </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <ToggleButton />
            </MDBNavbarItem>
        </NavItemsWrapper>
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
                {isAuth ? LoggedUserLinks : GuestUserLinks}
            </ToggledDivComponent>
        </HamburgerComponent>
    )
}

Hamburger.propTypes = {
    firstName: PropTypes.string
}

export default Hamburger
