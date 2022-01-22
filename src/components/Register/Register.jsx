import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, connect } from 'react-redux'
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBContainer,
} from 'mdb-react-ui-kit'

import CustomButton from '../CustomButtom/CustomButton'
import { respondTo } from '../../style-config/respond-to'
import { register } from '../../services/authService'
import { registerUser } from '../../store/actions/registerUser'

const RegisterContainer = styled(MDBContainer)`
    padding: 2rem;

    .form-control{
        margin-bottom: -0.5rem;
    }

    ${respondTo.xsmall`
        width: 90vw;
    `}

    ${respondTo.small`
        width: 80vw;
    `}

    ${respondTo.medium`
        width: 70vw;
    `}

    ${respondTo.large`
        width: 60vw;
    `}
`

const Paragraph = styled.p`
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1.5rem;
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

    .register-inputs{
        display: flex;
    }

    .div-input{
        width: 100%;
    }

    ${respondTo.xsmall`
        .register-inputs{
           display: block;
        }
        #email-input{
           width: 89%;
        }
    `}

    ${respondTo.medium`
        .register-inputs{
            display: flex;
        }
        #email-input{
           width: 90%;
        }
    `}

    ${respondTo.large`
        #email-input{
           width: 93%;
        }
    `}
`

const DivButton = styled.div`
    text-align: center;
    margin-top: 0.5rem;

    ${respondTo.xsmall`
        margin-top: 1.5rem;
    `}

    ${respondTo.medium`
        margin-top: 0.5rem;
    `}
`

const Register = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch()

    const authData = {
        email,
        firstName,
        lastName,
        password,
        confirmPassword
    }

    const registrateUser = async (e) => {
        e.preventDefault()

        const userData = await register(authData)

        dispatch(registerUser(userData))
    }

    return (
        <RegisterContainer>
            <MDBRow>
                <FormContainer>
                    <form id='register-form' onSubmit={() => dispatch(registrateUser(event))}>
                        <Paragraph>Sign up</Paragraph>

                        <MDBContainer id='email-input'>
                            <MDBInput
                                label='Email'
                                id='typeEmail'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </MDBContainer>
                        <br />

                        <MDBContainer className='register-inputs'>
                            <MDBContainer className='div-input'>
                                <MDBInput
                                    label='Firstname'
                                    id='typeFirstname'
                                    type='text'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <br />
                                <MDBInput
                                    label='Lastname'
                                    id='typeLastname'
                                    type='text'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <br />
                            </MDBContainer>

                            <MDBContainer className='div-input'>
                                <MDBInput
                                    label='Password'
                                    id='typePassword'
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <br />
                                <MDBInput
                                    label='Repeat Password'
                                    id='typeRepeatPassword'
                                    type='password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </MDBContainer>
                        </MDBContainer>

                        <DivButton>
                            <CustomButton variant="primary" type='submit'>
                                Register
                            </CustomButton>
                        </DivButton>
                    </form>
                </FormContainer>
            </MDBRow>
        </RegisterContainer>
    )
}

const mapStateToProps = state => ({
    userData: state.userData
})

export default connect(mapStateToProps)(Register)
