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

const TitleDiv = styled(MDBContainer)`
    display: flex;
    padding: 1rem 2rem;
`

const DropdownDiv = styled(MDBContainer)`
    text-align: end;
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

const AllTemplates = styled(MDBContainer)`
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const TemplateCards = () => {
    const theme = useTheme()

    return (
        <MDBContainer>
            <TitleDiv>
                <MDBContainer>
                    <h1>Our Greeting Cards</h1>
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

            <AllTemplates>
                {
                    list.map(x => (
                        <TemplateCard key={x} />
                    ))
                }
            </AllTemplates>
        </MDBContainer>
    )
}

export default TemplateCards
