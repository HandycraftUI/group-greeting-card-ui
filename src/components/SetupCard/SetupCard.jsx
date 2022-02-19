import React, { useState } from 'react'
import styled from 'styled-components'
import DateFnsUtils from '@date-io/date-fns'
import {
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import { createTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import {
    MDBInput,
    MDBContainer,
} from 'mdb-react-ui-kit'
import { useSelector } from 'react-redux'

import CustomButton from '../CustomButtom/CustomButton'
import { respondTo } from '../../style-config/respond-to'

const materialTheme = createTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: '#116',
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                backgroundColor: 'white',
                color: '#116',
            },
        },
        MuiPickerDTTabs: {
            tabs: {
                backgroundColor: '#116',
            }
        },
        MuiPickersDay: {
            daySelected: {
                backgroundColor: '#116',
            }
        },
        MuiButton: {
            textPrimary: {
                color: '#050038',
            },
        },
        MuiTabs: {
            indicator: {
                backgroundColor: '#fff',
            },
        },
        MuiPickersClockPointer: {
            pointer: {
                backgroundColor: '#050038',
            },
            thumb: {
                border: '14px solid #116',
            }
        },
        MuiPickersClockNumber: {
            clockNumber: {
                color: '#050038',
            },
        },
        MuiPickersClock: {
            pin: {
                backgroundColor: '#116',
            },
        },
    },
})

const SetupCardForm = styled.form`
    width: 100%;
    ${respondTo.xsmall`
        margin: 0.7rem;
    `}

    ${respondTo.medium`
        margin: 2rem;
    `}
`

const Title = styled.h1`
    ${respondTo.xsmall`
        text-align: center;
    `}

    ${respondTo.small`
        text-align: left;
        margin-left: 1.5rem;
    `}
`

const Container = styled(MDBContainer)`
    ${respondTo.xsmall`
        display: block;
    `}

    ${respondTo.medium`
        display: flex;
    `}
`

const Heading = styled.h3`
    padding-top: 1.5rem;
    margin-bottom: 1rem;
`

const TemplateContainer = styled(MDBContainer)`
    text-align: center;
`

const ImageContainer = styled(MDBContainer)`
    ${respondTo.xsmall`
        display: flex;
        justify-content: center;
    `}

    ${respondTo.xsmall`
        display: block;
    `}
`

const Image = styled.img`
    padding: 1rem 0rem;
    align-items: center;

    ${respondTo.xsmall`
        width: 240px;
        height: 370px;
    `}

    ${respondTo.small`
        width: 290px;
        height: 390px;
    `}
`

const Label = styled.label`
    margin-top: 0.5rem;
    margin-bottom: 0.4rem;
    font-size: 1.2rem;
`

const DateTime = styled(DateTimePicker)`
    margin-top: 1rem;
`

const SetupCard = () => {
    const [recipientName, setRecipientName] = useState('')
    const [recipientEmail, setRecipientEmail] = useState('')
    const [dateToBeSent, setDateToBeSent] = useState(new Date())
    const { cardImage } = useSelector(state => state.card)

    const setUpCardHandler = (e) => {
        e.preventDefault()

        const data = {
            recipientName,
            recipientEmail,
            dateToBeSent
        }

        return data
    }

    return (
        <MDBContainer>
            <Title>Set up Card</Title>

            <SetupCardForm>
                <Container>
                    <MDBContainer>
                        <MDBContainer>
                            <Heading>1. Who is this card for?</Heading>
                            <Label>Recipient Name:</Label>
                            <MDBInput
                                label='Not you :-)'
                                onChange={(e) => setRecipientName(e.target.value)}
                            />
                            <Label>Recipient Email:</Label>
                            <MDBInput
                                label='Card will be sent to this email'
                                onChange={(e) => setRecipientEmail(e.target.value)}
                            />
                        </MDBContainer>
                        <MDBContainer>
                            <Heading>2. When would you like us to email the card to the Recipient?</Heading>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <ThemeProvider theme={materialTheme}>
                                    <DateTime
                                        value={dateToBeSent}
                                        onChange={(e) => setDateToBeSent(e.target.value)}
                                    />
                                </ThemeProvider>
                            </MuiPickersUtilsProvider>
                        </MDBContainer>
                        <MDBContainer class='mt-4 ms-2'>
                            <CustomButton
                                variant="primary"
                                type='button'
                                onClick={() => setUpCardHandler(event)}
                            >
                                Continue
                            </CustomButton>
                        </MDBContainer>
                    </MDBContainer>

                    <TemplateContainer>
                        <ImageContainer>
                            <Image src={cardImage} />
                        </ImageContainer>
                        <MDBContainer>
                            <CustomButton variant="primary">Choose another template</CustomButton>
                        </MDBContainer>
                    </TemplateContainer>
                </Container>
            </SetupCardForm>
        </MDBContainer>
    )
}

export default SetupCard
