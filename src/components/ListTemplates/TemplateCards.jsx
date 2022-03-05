import React from 'react'
import styled from 'styled-components'
import {
    MDBContainer,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBDropdownLink,
} from 'mdb-react-ui-kit'

import TemplateCard from './TemplateCard'
import useTheme from '../../hooks/use-theme'
import { respondTo } from '../../style-config/respond-to'

const TitleDiv = styled(MDBContainer)`
    ${respondTo.xsmall`
        text-align: center;
    `}

    ${respondTo.medium`
        padding: 1rem 0;
    `}
`

const Title = styled.h1`
    ${respondTo.xsmall`
        font-size: 1.5rem;    
    `}

    ${respondTo.small`
        font-size: 1.8rem;
    `}

    ${respondTo.medium`
        font-size: 2rem;
        text-align: start;
    `}

    ${respondTo.large`
        font-size: 2.2rem;
    `}
`

const DropdownDiv = styled(MDBContainer)`
    text-align: end;

    ${respondTo.xsmall`
        text-align: center;
        margin-top: 1rem;
    `}

    ${respondTo.medium`
        text-align: end;
        margin-top: 0;
    `}
`

const DropdownToggle = styled(MDBDropdownToggle)`
    background-color: ${({ theme }) => theme.palette.navbar.primary};

    :focus{
        background-color: ${({ theme }) => theme.palette.navbar.primary};
    }
    :hover{
        background-color: ${({ theme }) => theme.palette.navbar.primary};
    }
`

const list = new Array(20).fill(0).map((item, index) => <TemplateCard item={item} key={index} />)

const TemplateCards = () => {
    const theme = useTheme()

    return (
        <MDBContainer>
            <TitleDiv className='d-inline d-md-flex'>
                <MDBContainer>
                    <Title>Our Greeting Cards</Title>
                </MDBContainer>
                <MDBContainer>
                    <DropdownDiv>
                        <MDBDropdown group>
                            <DropdownToggle size='lg' theme={theme}>Sort by data of creation:</DropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem>
                                    <MDBDropdownLink href="#">Acsending</MDBDropdownLink>
                                </MDBDropdownItem>
                                <MDBDropdownItem>
                                    <MDBDropdownLink href="#">Descending</MDBDropdownLink>
                                </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </DropdownDiv>
                </MDBContainer>
            </TitleDiv>

            <MDBContainer className='d-flex flex-wrap justify-content-center mt-4'>
                {
                    list.map(x => (
                        <TemplateCard key={x} />
                    ))
                }
            </MDBContainer>
        </MDBContainer>
    )
}

export default TemplateCards
