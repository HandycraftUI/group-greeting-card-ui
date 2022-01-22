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
import { authenticateAction } from '../../store/actions/user'

const RegisterContainer = styled(MDBContainer)`
    padding: 2rem;

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
        width: 50vw;
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
`

const InputsWrapper = styled(MDBContainer)`
    display: flex;
`

const Input = styled(MDBInput)`
    margin-bottom: -0.5rem;
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
    const navigate = useNavigate()

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
        userData.email = authData.email
        userData.firstName = authData.firstName
        userData.lastName = authData.lastName

        dispatch(authenticateAction())
        dispatch(registerUser(userData))

        navigate('/')
    }

    return (
        <RegisterContainer>
            <MDBRow>
                <FormContainer>
                    <form>
                        <Paragraph>Sign up</Paragraph>

                        <InputsWrapper>
                            <MDBContainer>
                                <Input
                                    label='Email'
                                    id='typeEmail'
                                    type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </MDBContainer>

                        </InputsWrapper>
                        <br />

                        <InputsWrapper>
                            <MDBContainer>
                                <Input
                                    label='Firstname'
                                    id='typeFirstname'
                                    type='text'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <br />
                                <Input
                                    label='Lastname'
                                    id='typeLastname'
                                    type='text'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <br />
                            </MDBContainer>

                            <MDBContainer className='div-input'>
                                <Input
                                    label='Password'
                                    id='typePassword'
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <br />
                                <Input
                                    label='Repeat Password'
                                    id='typeRepeatPassword'
                                    type='password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </MDBContainer>
                        </InputsWrapper>

                        <DivButton>
                            <CustomButton variant="primary" type="button" onClick={() => registrateUser(event)}>
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
