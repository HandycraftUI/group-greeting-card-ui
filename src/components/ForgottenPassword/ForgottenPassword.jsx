import React, { useState } from 'react'
import styled from 'styled-components'
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBContainer,
} from 'mdb-react-ui-kit'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { BiErrorCircle } from 'react-icons/bi'

import CustomButton from '../CustomButtom/CustomButton'
import { respondTo } from '../../style-config/respond-to'
import useTheme from '../../hooks/use-theme'
import { forgottedPassword } from '../../services/authService'

const ForgottenPasswordContainer = styled(MDBContainer)`
    padding: 2rem;

    ${respondTo.xsmall`
        width: 100vw;  
    `}

    ${respondTo.small`
        width: 80vw;
    `}

    ${respondTo.medium`
        width: 70vw;
    `}

    ${respondTo.large`
        width: 50vw;
    `}
`

const Paragraph = styled.p`
    font-size: 1.5rem;
    text-align: center;
`

const FormContainer = styled(MDBCol)`
    margin: 0 auto;
    padding: 1rem 2rem;
    border:2px solid #050038;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`

const SuccessIcon = styled(BsFillCheckCircleFill)`
    color: green;
    margin-right: 0.4rem;
    margin-bottom: 0.2rem;
`

const ErrorIcon = styled(BiErrorCircle)`
    color: red;
    margin-right: 0.4rem;
    margin-bottom: 0.2rem;
`

const DivButton = styled.div`
    text-align: center;
    margin-top: 1.5rem;
`

const ChangePasswordForm = styled(MDBContainer)`
    text-align: center;

     ${respondTo.xsmall`
        width: 100%; 
    `}

    ${respondTo.medium`
        width: 80%;
    `}
`

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [sentEmail, setSentEmail] = useState(false)
    const [isSuccessed, setIsSuccessed] = useState(false)
    const [text, setText] = useState('')
    const theme = useTheme()

    const ForgottenPasswordHandler = async (e) => {
        e.preventDefault()

        const data = await forgottedPassword(email)

        setSentEmail(true)
        setText(data.message)

        if (data.success) {
            setIsSuccessed(true)
        }
        console.log(data)
    }

    return (
        <ForgottenPasswordContainer>
            <MDBRow>
                <FormContainer>
                    <form>
                        <Paragraph>Forgotten Password</Paragraph>

                        <ChangePasswordForm>
                            {
                                sentEmail
                                    ? < MDBContainer >
                                        {isSuccessed ? <SuccessIcon /> : <ErrorIcon />}

                                        {text}
                                    </MDBContainer >
                                    : <MDBInput
                                        label='Email'
                                        id='typeEmail'
                                        type='email'
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                            }
                            <DivButton>
                                <CustomButton variant="primary" type='button' onClick={() => ForgottenPasswordHandler(event)} theme={theme}>
                                    Send Email
                                </CustomButton>
                            </DivButton>
                        </ChangePasswordForm>
                    </form>
                </FormContainer>
            </MDBRow>
        </ForgottenPasswordContainer>
    )
}

export default ForgotPassword

