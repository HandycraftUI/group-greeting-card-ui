import React, { useState } from 'react'
import styled from 'styled-components'
import DateFnsUtils from '@date-io/date-fns'
import {
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers'

import {
    MDBInput,
    MDBContainer,
} from 'mdb-react-ui-kit'

import CustomButton from '../CustomButtom/CustomButton'

const SetupCardForm = styled.form`
    padding: 2rem;
`

const Container = styled(MDBContainer)`
    display: flex;
`

const Heading = styled.h3`
    padding-top: 1.5rem;
`

const ImageContainer = styled(MDBContainer)`
    text-align: center;
`

const Image = styled.img`
    width: 300px;
    height: 400px;
    padding-bottom: 1rem;
`

const Label = styled.label`
    margin-top: 0.5rem;
    margin-bottom: 0.4rem;
`

const DateTime = styled(MuiPickersUtilsProvider)`
    margin-bottom: 5rem;
    background-color: red;
`

const ButtonDiv = styled(MDBContainer)`
    margin-top: 1.5rem;
`

const SetupCard = () => {

    return (
        <MDBContainer>
            <h1>Set up Card</h1>

            <SetupCardForm>
                <Container>
                    <MDBContainer>
                        <MDBContainer>
                            <h3>1. Who is this card for?</h3>
                            <Label>Recipient Name:</Label>
                            <MDBInput label='Not you :-)' />
                            <Label>Recipient Email:</Label>
                            <MDBInput label='Card will be sent to this email' />
                        </MDBContainer>
                        <MDBContainer>
                            <Heading>2. When would you like us to email the card to the Recipient?</Heading>
                            <DateTime utils={DateFnsUtils}>
                                <DateTimePicker />
                            </DateTime>
                        </MDBContainer>
                        <ButtonDiv>
                            <CustomButton variant="primary">
                                Continue
                            </CustomButton>
                        </ButtonDiv>

                    </MDBContainer>

                    <ImageContainer>
                        <MDBContainer>
                            <Image src="https://i.pinimg.com/originals/a7/47/18/a74718565f52769898ac2361c8260cf0.jpg" />
                        </MDBContainer>
                        <MDBContainer>
                            <CustomButton variant="primary">Choose another template</CustomButton>
                        </MDBContainer>
                    </ImageContainer>
                </Container>
            </SetupCardForm>
        </MDBContainer>
    )
}

export default SetupCard



