import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { RiFacebookBoxFill, RiLinkedinBoxFill } from 'react-icons/ri'
import { GrInstagram, GrGoogle } from 'react-icons/gr'

import useTheme from '../../hooks/use-theme'
import { respondTo } from '../../style-config/respond-to'

const FooterWrapper = styled.div`
    background-color: ${({ theme }) => theme.palette.navbar.primary};
    color: ${({ theme }) => theme.palette.white};
    width: 100%;
    left: 0;
    bottom: 0;

    ${respondTo.xsmall`
        position: relative;
    `}

    ${respondTo.small`
        position: absolute;
    `}
`

const FooterItems = styled(MDBContainer)`  
    ${respondTo.xsmall`
        display: block;
    `} 

    ${respondTo.small`
        display: flex;
    `}
`

const LinksContainer = styled(MDBContainer)`
    width: 30%;

    ${respondTo.xsmall`
        width: 100%;
    `}

    ${respondTo.small`
        width: 50%;
    `}

    ${respondTo.medium`
        width: 30%;
    `}
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

    ${respondTo.xsmall`
        font-size: 0.9rem;
    `}

    ${respondTo.small`
        font-size: 1rem;
    `}
`

const MediaContainer = styled(MDBContainer)`
    display: flex;
    margin-top: 1rem;

    ${respondTo.xsmall`
        display: block;
    `}

    ${respondTo.small`
        display: flex;
    `}
`

const IconContainer = styled.div`
    display: flex;

    ${respondTo.small`
        width: 50%;
    `}

    ${respondTo.medium`
       width: 30%;
    `}
`

const IconDiv = styled(MDBContainer)`
    transition: transform 400ms;

    :hover{
        transform: translateY(-7px);
    }
`

const Title = styled.h2`
    ${respondTo.xsmall`
        font-size: 1.1rem;
    `}

    ${respondTo.small`
        font-size: 1.4rem;
    `}
`

const Paragraph = styled.p`
    ${respondTo.xsmall`
        font-size: 0.9rem;
    `}

    ${respondTo.small`
        font-size: 1.1rem;
    `}
`

const Facebook = styled(RiFacebookBoxFill)`
    ${respondTo.xsmall`
        font-size: 20px;
    `}

    ${respondTo.small`
        font-size: 25px;
    `}

    ${respondTo.medium`
        font-size: 30px;
    `}
`

const Instagram = styled(GrInstagram)`
    ${respondTo.xsmall`
        font-size: 20px;
    `}

    ${respondTo.small`
        font-size: 23px;
    `}

    ${respondTo.medium`
        font-size: 27px;
    `}
`

const LinkedIn = styled(RiLinkedinBoxFill)`
    ${respondTo.xsmall`
        font-size: 20px;
    `}

    ${respondTo.small`
        font-size: 25px;
    `}

    ${respondTo.medium`
        font-size: 30px;
    `}
`

const Google = styled(GrGoogle)`
    ${respondTo.xsmall`
        font-size: 20px;
    `}

    ${respondTo.small`
        font-size: 23px;
    `}

    ${respondTo.medium`
        font-size: 27px;
    `}
`

const Footer = () => {
    const theme = useTheme()
    return (
        <FooterWrapper className='py-3 px-4' theme={theme}>
            <FooterItems>
                <MDBContainer>
                    <Title>GroupGreeting</Title>
                    <Paragraph>Sending appreciation cards at any time.</Paragraph>
                </MDBContainer>
                <LinksContainer>
                    <Title>Company</Title>
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

            <MediaContainer>
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
            </MediaContainer>
        </FooterWrapper>
    )
}

export default Footer
