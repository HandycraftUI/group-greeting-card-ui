import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import styled from 'styled-components'

import CustomButton from '../components/CustomButtom/CustomButton'
import { respondTo } from '../style-config/respond-to'
import useTheme from '../hooks/use-theme'

const FirstSectionWrapper = styled.div`
    ${respondTo.xsmall`
        display: block;
        margin-top: 2rem;
    `}

    ${respondTo.medium`
        display: flex;
        margin-top: 1rem;
    `}
`

const IntroDiv = styled(MDBContainer)`
    ${respondTo.xsmall`
        margin-top: 2rem;
        text-align: center;
    `}

    ${respondTo.small`
        text-align: left;     
    `}

    ${respondTo.medium`
        margin-top: 6rem;
    `}

    ${respondTo.large`
        margin-top: 10rem;  
    `}
`

const TextContainer = styled(MDBContainer)`
    ${respondTo.xsmall`
        width:80%;
    `}

    ${respondTo.small`
        width: 100%;
    `}
`

const ButtonDiv = styled.div`
    width: 55%;

    ${respondTo.xsmall`
        width: 100%;
        display: block;
        text-align: center;
    `}

    ${respondTo.small`
        width: 70%;
        display: flex;
        text-align: left;
    `}

    ${respondTo.medium`
        width: 100%;
    `}

    ${respondTo.large`
        width: 70%;
    `}
`

const FirstButton = styled(MDBContainer)`
    ${respondTo.xsmall`
        margin-bottom: 1rem;
    `}
`

const ImageDiv = styled(MDBContainer)`
    text-align: center;

    ${respondTo.xsmall`
        margin-top: 1.5rem;
    `}

    ${respondTo.medium`
        margin-top: 2rem;
    `}
`

const Image = styled.img`
   
    ${respondTo.xsmall`
        width: 320px;
        height: 220px;
    `}

    ${respondTo.small`
        width: 420px;
        height: 320px;
    `}

    ${respondTo.large`
        width: 550px;
        height: 430px;
    `}

    ${respondTo.xlarge`
        width: 710px;
        height: 500px;
    `}
`

const Card = styled(MDBContainer)`
    text-align: center;
    border: 3px solid ${({ theme }) => theme.palette.tertiary};
`

const ParagraphContainer = styled(MDBContainer)`
    padding: 0 3rem;
`

const Home = () => {
    const theme = useTheme()

    return (
        <>
            <FirstSectionWrapper>
                <IntroDiv>
                    <TextContainer>
                        <h2>The easiest way to send a group card.</h2>
                        <p>
                            Group cards made easy. Create an online group card
                            in 1 minute with unlimited signers.
                        </p>
                    </TextContainer>

                    <ButtonDiv>
                        <FirstButton>
                            <CustomButton variant='primary'>
                                Start a Card
                            </CustomButton>
                        </FirstButton>
                        <MDBContainer>
                            <CustomButton variant='outline-primary'>
                                Try the demo
                            </CustomButton>
                        </MDBContainer>
                    </ButtonDiv>
                </IntroDiv>

                <ImageDiv>
                    <Image src="https://www.groupgreeting.com/assets/spotlight/group-greeting-card-samples-4bd14f3ae81bd0088f98f5f9411e9bb0999b3a5adc7c2b57108d15bf32ce8925.png" />
                </ImageDiv>
            </FirstSectionWrapper>

            <MDBContainer className='mt-5 d-block d-sm-flex py-3' theme={theme}>
                <Card className='py-3 me-3' theme={theme}>
                    <h5>1</h5>
                    <img src="https://storage.googleapis.com/groupgreeting/assets/images/graphics/dusk/svg/thumbnails.svg" />
                    <h2>Choose a Card</h2>
                    <ParagraphContainer>
                        <p>Select a card model for any occation including Birthdays, Farewell and many more.</p>
                    </ParagraphContainer>
                </Card>
                <Card className='py-3 me-3' theme={theme}>
                    <h5>2</h5>
                    <img src="https://storage.googleapis.com/groupgreeting/assets/images/graphics/dusk/svg/email.svg" />
                    <h2>Ask People to Sign</h2>
                    <ParagraphContainer>
                        <p>Send the card link to friends so they cant also sign the card.</p>
                    </ParagraphContainer>
                </Card>
                <Card className='py-3 me-3' theme={theme}>
                    <h5>3</h5>
                    <img src="https://storage.googleapis.com/groupgreeting/assets/images/graphics/dusk/svg/approval.svg " />
                    <h2>Card is Sent</h2>
                    <ParagraphContainer>
                        <p>The card is sent to the recipient via email at the time and date selected.</p>
                    </ParagraphContainer>
                </Card>
            </MDBContainer>
        </>
    )
}

export default Home
