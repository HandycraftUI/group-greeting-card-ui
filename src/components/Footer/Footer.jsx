import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import useTheme from '../../hooks/use-theme'

const FooterWrapper = styled.div`
    background-color: ${({ theme }) => theme.palette.navbar.primary};
    color: ${({ theme }) => theme.palette.white};
    padding: 1rem 2rem;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
`

const FooterItems = styled(MDBContainer)`
    display: flex;
`

const LinksContainer = styled(MDBContainer)`
    width: 30%;
`

const LinksList = styled.ul`
list-style-type: none;
`

const Links = styled(Link)`
    color: ${({ theme }) => theme.palette.white};
    text-decoration: none;

    :hover {
        color: ${({ theme }) => theme.palette.white};
    }
`

const Footer = () => {
    const theme = useTheme()
    return (
        <FooterWrapper theme={theme}>
            <FooterItems>
                <MDBContainer>
                    <h2>GroupGreeting</h2>
                    <p>Sending appreciation cards at any time</p>
                </MDBContainer>
                <LinksContainer>
                    <h2>Company</h2>
                    <LinksList>
                        <li>
                            <Links theme={theme} to='/'>Home</Links>
                        </li>
                        <li>
                            <Links theme={theme} to='/about'>About us</Links>
                        </li>
                        <li>
                            <Links theme={theme} to='/profile'>Profile</Links>
                        </li>
                        <li>
                            <Links theme={theme} to='/create-card'>Greeting Cards</Links>
                        </li>
                    </LinksList>
                </LinksContainer>
            </FooterItems>
            <MDBContainer>
                <p>&copy; 2022 Blagoevgrad, Bulgaria</p>
            </MDBContainer>
        </FooterWrapper>
    )
}

export default Footer
