import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { RiFacebookBoxFill, RiLinkedinBoxFill } from 'react-icons/ri'
import { GrInstagram, GrGoogle } from 'react-icons/gr'
import { useSelector } from 'react-redux'

import useTheme from '../../hooks/use-theme'
import { respondTo } from '../../style-config/respond-to'
import routes from '../../routes'

const FooterWrapper = styled.div`
    background-color: ${({ theme }) => theme.palette.navbar.primary};
    color: ${({ theme }) => theme.palette.white};
    width: 100%;
    top: 0;
    left: 0;
    margin-top: 2.7rem;
    position: relative;
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
    padding-left: 0;
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
    const { isAuth } = useSelector(store => store.user)

    const list = routes(isAuth)
        .filter(route => route.isVisibleInFooter)
        .map((routes) => (
            <li key={routes.text}>
                <Links theme={theme} to={routes.path}>{routes.text}</Links>
            </li>
        ))

    return (
        <FooterWrapper className='py-3 px-4' theme={theme}>
            <MDBContainer className='d-block d-sm-flex'>
                <MDBContainer>
                    <Title>GroupGreeting</Title>
                    <Paragraph>Sending appreciation cards at any time.</Paragraph>
                </MDBContainer>
                <LinksContainer>
                    <Title>Company</Title>
                    <LinksList>
                        {list}
                    </LinksList>
                </LinksContainer>
            </MDBContainer>

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
