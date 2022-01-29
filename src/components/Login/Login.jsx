import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBContainer,
} from 'mdb-react-ui-kit'
const jwt = require('jsonwebtoken')

import CustomButton from '../CustomButtom/CustomButton'
import { respondTo } from '../../style-config/respond-to'
import useTheme from '../../hooks/use-theme'
import { login } from '../../services/authService'
import { loginUser } from '../../store/actions/loginUser'
import { authenticateAction } from '../../store/actions/user'

const LoginContainer = styled(MDBContainer)`
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

const Label = styled.label`
    margin-bottom: 0.4rem;
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

const DivButton = styled.div`
    text-align: center;
    margin-top: 1.5rem;
`

const LoginForm = styled(MDBContainer)`
     ${respondTo.xsmall`
        width: 100%; 
    `}

    ${respondTo.medium`
        width: 80%;
    `}
`

const ForgotPasswordLink = styled(Link)`
    color: ${({ theme }) => theme.palette.tertiary};
    margin-bottom: 0.4rem;
    

    ${respondTo.xsmall`
        font-size: 0.9rem;
    `}

    ${respondTo.medium`
        font-size: 1rem;
    `}
`

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Login = () => {
    const theme = useTheme()
    const [authData, setAuthData] = useState({
        email: '',
        password: '',
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const saveUserData = async (e) => {
        e.preventDefault()

        const userData = await login(authData)
        const token = userData.data.token

        const decoded = jwt.decode(token, { complete: true })
        const [firstName] = decoded.payload.data.name.split(' ')

        Object.assign(decoded.payload.data, { firstName, success: true, token })

        dispatch(authenticateAction())
        dispatch(loginUser(decoded.payload.data))

        localStorage.setItem(`${process.env.REACT_APP_LOCAL_STORAGE_USER}`, JSON.stringify(decoded.payload.data))

        navigate('/')
    }

    return (
        <LoginContainer>
            <MDBRow>
                <FormContainer>
                    <form>
                        <Paragraph>Sign in</Paragraph>

                        <LoginForm>
                            <Label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                Email
                            </Label>
                            <MDBInput
                                label='Email'
                                id='typeEmail'
                                type='email'
                                onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
                            />
                            <br />
                            <Div theme={theme}>
                                <Label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                                    Password
                                </Label>
                                <ForgotPasswordLink
                                    to='/auth/forgotten-password'
                                    className='nav-links'
                                    theme={theme}
                                >
                                    Forgot Password?
                                </ForgotPasswordLink>
                            </Div>
                            <MDBInput
                                label='Password'
                                id='typePassword'
                                type='password'
                                onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
                            />
                            <DivButton>
                                <CustomButton variant="primary" type='button' onClick={() => saveUserData(event)}>
                                    Login
                                </CustomButton>
                            </DivButton>
                        </LoginForm>
                    </form>
                </FormContainer>
            </MDBRow>
        </LoginContainer>
    )
}

export default Login
