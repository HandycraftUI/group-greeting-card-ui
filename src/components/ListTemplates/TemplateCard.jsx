import React from 'react'
import styled from 'styled-components'
import { MDBContainer } from 'mdb-react-ui-kit'
import { useSelector } from 'react-redux'

import CustomButton from '../CustomButtom/CustomButton'
import { respondTo } from '../../style-config/respond-to'

const TemplateContainer = styled(MDBContainer)`
   width: 25%;
   text-align: center;
   margin: 0.5rem 0;

   ${respondTo.xsmall`
       width: 100%;
   `}

   ${respondTo.small`
       width: 50%;
   `}

   ${respondTo.medium`
       width: 33%;
   `}

    ${respondTo.large`
       width: 25%;
   `}
`

const ImageDiv = styled(MDBContainer)`
   margin: 0.5rem 0;
`

const Image = styled.img`
    width: 200px;
    height: 280px;

    ${respondTo.xsmall`
       width: 170px;
       heigth: 240px;
   `}
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
