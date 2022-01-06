import React, { useState } from 'react'
import styled from 'styled-components'
import lightTheme from '../../themes/light'
import {
    MDBIcon,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBContainer,
} from 'mdb-react-ui-kit'

const HamburgerComponent = styled(MDBContainer)`
    font-family: 'Raleway', sans-serif;
   
    .container{
         justify-content: flex-end;
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
    color: ${lightTheme.palette.white};
    width: 100%;

    .nav-link{
        font-size: 1rem;
        color: ${lightTheme.palette.white};
    }

    @media (min-width: 480px) {
        display: none;
    }
`

const Hamburger = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const isAuthenticated = true

    const LoggedUserLinks = (
        <>
            <MDBNavbarItem>
                <MDBNavbarLink href='/editor' >Create Card<MDBIcon fas icon="plus" size='sm' />
                </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <MDBNavbarLink href='/me' >Hello, $$$<MDBIcon fas icon="user-alt" size='sm' />
                </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <MDBNavbarLink href='/auth/logout' >Logout<MDBIcon fas icon="sign-out-alt" size='sm' />
                </MDBNavbarLink>
            </MDBNavbarItem>
        </>
    )

    const GuestUserLinks = (
        <>
            <MDBNavbarItem>
                <MDBNavbarLink href='/auth/login'>Login<MDBIcon fas icon="sign-in-alt" size='sm' /></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <MDBNavbarLink href='/auth/register'>Register<MDBIcon fas icon="users" size='sm' /></MDBNavbarLink>
            </MDBNavbarItem>
        </>
    )

    return (
        <HamburgerComponent>
            <MDBContainer>
                <IconComponent type='button' onClick={() => setToggleMenu(!toggleMenu)}>
                    <MDBIcon icon='bars' />
                </IconComponent>
            </MDBContainer>
            <ToggledDivComponent show={toggleMenu}>
                {isAuthenticated ? LoggedUserLinks : GuestUserLinks}
            </ToggledDivComponent>
        </HamburgerComponent>
    )
}

export default Hamburger
