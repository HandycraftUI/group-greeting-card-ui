import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { BsCheckLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'

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
        width: 300px;
        height: 200px;
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

const FeaturesSection = styled.div`
    margin-top: 2rem;

    ${respondTo.xsmall`
        display: block;
    `}

    ${respondTo.medium`
        margin: 2rem 2rem 0 2rem;
        display: flex;
    `}
`

const H1 = styled.h1`
    font-weight: bold;
    text-align: center;

    ${respondTo.small`
        white-space: nowrap;
    `}
`

const InformationContainer = styled(MDBContainer)`
    ${respondTo.xsmall`
        margin-top: 1.5rem;
    `}

    ${respondTo.large`
        width: 60%;
    `}
`

const Paragraph = styled.p`
    ${respondTo.small`
        font-size: 14px;
    `}

    ${respondTo.medium`
        font-size: 16px;
    `}

    ${respondTo.large`
        font-size: 18px;
    `}

    ${respondTo.xlarge`
        font-size: 20px;
    `} 
`

const H3 = styled.h3`
    font-weight: bold;

    ${respondTo.small`
        font-size: 16px;
    `}

    ${respondTo.medium`
        font-size: 18px;
    `}

    ${respondTo.large`
        font-size: 20px;
    `}

    ${respondTo.xlarge`
        font-size: 24px;
    `}
`

const FourthSection = styled.div`
    padding: 2rem 0;
    background-color: #EFF2F7;
`

const OccationCardTextContainer = styled(MDBContainer)`
    text-align: center;
`

const OccationCardContainer = styled.div`
    :hover{
        transform: translateY(-1rem);
        transition: transform 0.25s ease-in;
    }
`

const OccationCardDiv = styled.div`
   margin: 1rem;
   position: relative;
`

const OccationCardImage = styled.img`
    ${respondTo.xsmall`
        width: 160px;
        height: 240px;
    `}
    
    ${respondTo.medium`
        width: 200px;
        height: 320px;
    `}
    
    ${respondTo.large`
        width: 280px;
        height: 400px;
    `}

    ${respondTo.xlarge`
        width: 310px;
        height: 430px;
    `}
`

const OccationImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    border-radius: 3px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    opacity: 0;
    transition: opacity 0.25s;

    > * {
        transform: translateY(40px);
        transition: transform 0.25s;
    }

    :hover {
        opacity: 1;
    }

    :hover > * {
        transform: translateY(0);
    }

    ${respondTo.xsmall`
        width: 160px;
    `}
    
    ${respondTo.medium`
        width: 200px;
    `}
    
    ${respondTo.large`
        width: 280px;
    `}

    ${respondTo.xlarge`
        width: 310px;
    `}
`

const OccationButtonDiv = styled.div`
    text-align: center;
`

const Home = () => {
    const theme = useTheme()
    const { cardImage } = useSelector(state => state.card)

    const list = new Array(6).fill(0).map((item, index) => {
        return (
            <OccationCardContainer key={index} item={item}>
                <OccationCardDiv>
                    <OccationCardImage src={cardImage} />
                    <OccationImageOverlay>
                        <div>
                            <Paragraph>Card Category</Paragraph>
                        </div>
                    </OccationImageOverlay>
                </OccationCardDiv>
            </OccationCardContainer>
        )
    })

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

            <SecondContainer className='py-4 mt-5' theme={theme}>
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

            <div className='py-4'>
                <MDBContainer>
                    <H1>Each card is packed with features:</H1>
                </MDBContainer>

                <FeaturesSection>
                    <ImageDiv>
                        <Image src="https://storage.googleapis.com/groupgreeting/assets/images/graphics/spotlight/group-greeting-card-sample.jpg" />
                    </ImageDiv>
                    <InformationContainer>
                        <MDBContainer>
                            <H3>Multiple people can sign the card</H3>
                            <Paragraph>Unlimited signatures, unlimited pages - you’ll never run out of room.</Paragraph>
                        </MDBContainer>
                        <MDBContainer>
                            <H3>Add photos and stickers</H3>
                            <Paragraph>Signers can add a photo for a personal touch, or add as many emoji stickers to get the message across.</Paragraph>
                        </MDBContainer>
                        <MDBContainer>
                            <H3>Style your signature your way</H3>
                            <Paragraph>Choose from different fonts, change the color, and rotate in any direction.</Paragraph>
                        </MDBContainer>
                    </InformationContainer>
                </FeaturesSection>
            </div>

            <FourthSection>
                <OccationCardTextContainer>
                    <H1>The perfect card for every occasion!</H1>
                    <Paragraph>See a group card example from several categories:</Paragraph>
                </OccationCardTextContainer>
                <MDBContainer className='m-auto'>
                    <div className='d-flex flex-wrap justify-content-center'>
                        {list}
                    </div>
                </MDBContainer>
                <OccationButtonDiv className='mt-3'>
                    <CustomButton variant='primary'>
                        See all cards
                    </CustomButton>
                </OccationButtonDiv>
            </FourthSection>

            <MDBContainer className='d-md-flex py-4'>
                <MDBContainer className='p-4 text-center'>
                    <MDBContainer>
                        <H3>Employee appreciation starts here.</H3>
                        <Paragraph>Create a group card in 60 seconds and be the office hero!</Paragraph>
                    </MDBContainer>
                    <MDBContainer className='mt-4'>
                        <Link to='create-card'>
                            <CustomButton variant='primary'>
                                Start a New Group Card
                            </CustomButton>
                        </Link>
                    </MDBContainer>
                </MDBContainer>

                <MDBContainer className='p-3'>
                    <div className='d-flex'>
                        <div>
                            <BsCheckLg className='me-2' />
                        </div>
                        <p>You&apos;ll save time by not having to go to the store to pick up a card</p>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <BsCheckLg className='me-2' />
                        </div>
                        <p>Remote employees will feel appreciated</p>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <BsCheckLg className='me-2' />
                        </div>
                        <p>People won&apos;t run out of space to sign a card</p>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <BsCheckLg className='me-2' />
                        </div>
                        <p>You&apos;ll know who has signed the card at any time</p>
                    </div>
                </MDBContainer>
            </MDBContainer>
        </>
    )
}

export default Home
