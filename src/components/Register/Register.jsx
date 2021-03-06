import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
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
import useTheme from '../../hooks/use-theme'

const RegisterContainer = styled(MDBContainer)`
    padding: 2rem;

    ${respondTo.xsmall`
        width: 90vw;
    `}

    ${respondTo.small`
        width: 85vw;
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
    margin-bottom: 1rem;
`

const FormContainer = styled(MDBCol)`
    margin: 0 auto;
    padding: 1rem;
    border: 2px solid ${({ theme }) => theme.palette.navbar.primary};
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`

const InputsWrapper = styled(MDBContainer)`
    ${respondTo.xsmall`
        display: block;
    `}

    ${respondTo.small`
        display: flex;
    `}
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

    ${respondTo.small`
        margin-top: 0.5rem;
    `}
`

const Register = () => {
    const theme = useTheme()
    const [authData, setAuthData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: ''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const saveUserData = async (e) => {
        e.preventDefault()

        if (authData.email === '' ||
            authData.firstName === '' ||
            authData.lastName === '' ||
            authData.password === '' ||
            authData.confirmPassword === ''
        ) {
            // notification with text like : 
            // Please enter all input before register!
            return navigate('/auth/login')
        }

        const userData = await register(authData)
        userData.email = authData.email
        userData.firstName = authData.firstName
        userData.lastName = authData.lastName

        dispatch(authenticateAction())
        dispatch(registerUser(userData))

        localStorage.setItem(`${process.env.REACT_APP_LOCAL_STORAGE_USER}`, JSON.stringify(userData))

        navigate('/')
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            saveUserData(event)
        }
    }

    return (
        <RegisterContainer>
            <MDBRow>
                <FormContainer theme={theme}>
                    <form>
                        <Paragraph>Sign up</Paragraph>

                        <InputsWrapper>
                            <MDBContainer>
                                <Input
                                    label='Email'
                                    type='email'
                                    value={authData.email}
                                    onKeyPress={(e) => handleKeyDown(e)}
                                    onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
                                />
                            </MDBContainer>

                        </InputsWrapper>
                        <br />

                        <InputsWrapper>
                            <MDBContainer>
                                <Input
                                    label='Firstname'
                                    type='text'
                                    value={authData.firstName}
                                    onKeyPress={(e) => handleKeyDown(e)}
                                    onChange={(e) => setAuthData({ ...authData, firstName: e.target.value })}
                                />
                                <br />
                                <Input
                                    label='Lastname'
                                    type='text'
                                    value={authData.lastName}
                                    onKeyPress={(e) => handleKeyDown(e)}
                                    onChange={(e) => setAuthData({ ...authData, lastName: e.target.value })}
                                />
                                <br />
                            </MDBContainer>

                            <MDBContainer className='div-input'>
                                <Input
                                    label='Password'
                                    type='password'
                                    value={authData.password}
                                    onKeyPress={(e) => handleKeyDown(e)}
                                    onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
                                />
                                <br />
                                <Input
                                    label='Repeat Password'
                                    type='password'
                                    onKeyPress={(e) => handleKeyDown(e)}
                                    value={authData.confirmPassword}
                                    onChange={(e) => setAuthData({ ...authData, confirmPassword: e.target.value })}
                                />
                            </MDBContainer>
                        </InputsWrapper>

                        <DivButton>
                            <CustomButton
                                variant="primary"
                                type="button"
                                onClick={() => saveUserData(event)}
                            >
                                Register
                            </CustomButton>
                        </DivButton>
                    </form>
                </FormContainer>
            </MDBRow>
        </RegisterContainer>
    )
}

export default Register
