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
        padding: 1.2rem;
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

const SecondContainer = styled.div`
    ${respondTo.medium`
        display: flex;
        padding: 0 5%;
    `}

    ${respondTo.large`
        padding: 0 10%;
    `}

    ${respondTo.xlarge`
        padding: 0 15%;
    `}
`

const CardContainer = styled(MDBContainer)`
`

const Card = styled.div`
    text-align: center;
    border: 3px solid ${({ theme }) => theme.palette.tertiary};

    ${respondTo.xsmall`
        margin: 0 auto;
        width: 80%
    `}

    ${respondTo.small`
        width: 70%;
    `}

    ${respondTo.medium`
        width: 100%;
        height: 100%;
    `}
`

const H2 = styled.h2`
    ${respondTo.xsmall`
        font-size: 20px;
    `}
`

const ImageIcon = styled.img`
    ${respondTo.xsmall`
        width: 100px;
        height: 100px;
    `}

    ${respondTo.xsmall`
        width: 120px;
        height: 120px;
    `}
`

const ParagraphContainer = styled(MDBContainer)`
    padding: 0 2rem;

    ${respondTo.xsmall`
        font-size: 14px;
    `}

    ${respondTo.small`
        font-size: 16px;
    `}
`

const FeaturesSection = styled(MDBContainer)`
    display: flex;
    margin-top: 2rem;
`

const H1 = styled.h1`
    text-align: center;
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

            <SecondContainer className='py-4' theme={theme}>
                <CardContainer className='mb-3 px-2'>
                    <Card theme={theme}>
                        <h5>1</h5>
                        <ImageIcon src="https://storage.googleapis.com/groupgreeting/assets/images/graphics/dusk/svg/thumbnails.svg" />
                        <H2>Choose a Card</H2>
                        <ParagraphContainer>
                            <p>Select a card model for any occation including Birthdays, Farewell and many more.</p>
                        </ParagraphContainer>
                    </Card>
                </CardContainer>
                <CardContainer className='mb-3 px-2'>
                    <Card theme={theme}>
                        <h5>2</h5>
                        <ImageIcon src="https://storage.googleapis.com/groupgreeting/assets/images/graphics/dusk/svg/email.svg" />
                        <H2>Ask People to Sign</H2>
                        <ParagraphContainer>
                            <p>Send the card link to friends so they cant also sign the card.</p>
                        </ParagraphContainer>
                    </Card>
                </CardContainer>
                <CardContainer className='mb-3 px-2'>
                    <Card theme={theme}>
                        <h5>3</h5>
                        <ImageIcon src="https://storage.googleapis.com/groupgreeting/assets/images/graphics/dusk/svg/approval.svg " />
                        <H2>Card is Sent</H2>
                        <ParagraphContainer>
                            <p>The card is sent to the recipient via email at the time and date selected.</p>
                        </ParagraphContainer>
                    </Card>
                </CardContainer>
            </SecondContainer>

            <MDBContainer>
                <MDBContainer>
                    <H1>Each card is packed with features:</H1>
                </MDBContainer>

                <FeaturesSection>
                    <MDBContainer>
                        <Image src="https://storage.googleapis.com/groupgreeting/assets/images/graphics/spotlight/group-greeting-card-sample.jpg" />
                    </MDBContainer>
                    <MDBContainer>
                        <MDBContainer>
                            <h3>Multiple people can sign the card</h3>
                            <p>Unlimited signatures, unlimited pages - you’ll never run out of room.</p>
                        </MDBContainer>
                        <MDBContainer>
                            <h3>Add photos and stickers</h3>
                            <p>Signers can add a photo for a personal touch, or add as many emoji stickers to get the message across.</p>
                        </MDBContainer>
                        <MDBContainer>
                            <h3>Style your signature your way</h3>
                            <p>Choose from different fonts, change the color, and rotate in any direction.</p>
                        </MDBContainer>
                    </MDBContainer>
                </FeaturesSection>
            </MDBContainer>
        </>
    )
}

export default Home
