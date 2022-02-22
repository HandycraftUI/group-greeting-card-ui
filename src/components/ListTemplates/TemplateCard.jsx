import React from 'react'
import styled from 'styled-components'
import { MDBContainer } from 'mdb-react-ui-kit'
import { useSelector } from 'react-redux'

import CustomButton from '../CustomButtom/CustomButton'

const TemplateContainer = styled(MDBContainer)`
   width: 25%;
   text-align: center;
   margin: 0.5rem 0;
`

const ImageDiv = styled(MDBContainer)`
   margin: 0.5rem 0;
`

const Image = styled.img`
    width: 200px;
    height: 280px;
`

const ButtonDiv = styled(MDBContainer)`
    text-align: center;
    margin-bottom: 0.5rem;
`

const TemplateCard = () => {
    const { cardImage } = useSelector(state => state.card)

    return (
        <TemplateContainer>
            <ImageDiv>
                <Image src={cardImage} />
            </ImageDiv>
            <ButtonDiv>
                <CustomButton variant="primary" type='button'>
                    Use this card
                </CustomButton>
            </ButtonDiv>
        </TemplateContainer>
    )
}

export default TemplateCard
