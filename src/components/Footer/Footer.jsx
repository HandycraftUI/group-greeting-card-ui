import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { RiFacebookBoxFill, RiLinkedinBoxFill } from 'react-icons/ri'
import { GrInstagram, GrGoogle } from 'react-icons/gr'

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

const IconContainer = styled.div`
    display: flex;
    width: 30%;
`

const IconDiv = styled(MDBContainer)`
    transition: transform 400ms;

    :hover{
        transform: translateY(-7px);
    }
`

const Facebook = styled(RiFacebookBoxFill)`
    font-size: 30px;
`

const Instagram = styled(GrInstagram)`
    font-size: 27px;
`

const LinkedIn = styled(RiLinkedinBoxFill)`
    font-size: 30px;
`

const Google = styled(GrGoogle)`
    font-size: 25px;
`

const Footer = () => {
    const theme = useTheme()
    return (
        <FooterWrapper theme={theme}>
            <FooterItems>
                <MDBContainer>
                    <h2>GroupGreeting</h2>
                    <p>Sending appreciation cards at any time.</p>
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

            <MDBContainer className='d-flex mt-3'>
                <MDBContainer>
                    <p>&copy; 2022 Blagoevgrad, Bulgaria</p>
                </MDBContainer>
                <IconContainer>
                    <IconDiv>
                        <Links to='/' theme={theme}>
                            <Facebook />
                        </Links>
                    </IconDiv>
                    <IconDiv>
                        <Links to='/' theme={theme}>
                            <Instagram />
                        </Links>
                    </IconDiv>
                    <IconDiv>
                        <Links to='/' theme={theme}>
                            <LinkedIn />
                        </Links>
                    </IconDiv>
                    <IconDiv>
                        <Links to='/' theme={theme}>
                            <Google />
                        </Links>
                    </IconDiv>
                </IconContainer>
            </MDBContainer>
        </FooterWrapper>
    )
}

export default Footer
