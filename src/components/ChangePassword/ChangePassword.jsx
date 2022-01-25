import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBContainer,
} from 'mdb-react-ui-kit'

import CustomButton from '../CustomButtom/CustomButton'
import { respondTo } from '../../style-config/respond-to'
import useTheme from '../../hooks/use-theme'

const ChangePasswordContainer = styled(MDBContainer)`
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

const ChangePasswordForm = styled(MDBContainer)`
     ${respondTo.xsmall`
        width: 100%; 
    `}

    ${respondTo.medium`
        width: 80%;
    `}
`

const Login = () => {
    const [authData, setAuthData] = useState({
        email: '',
        password: '',
        confirmNewPassword: ''
    })
    const theme = useTheme()
    const navigate = useNavigate()

    const saveUserData = async (e) => {
        e.preventDefault()

        console.log(authData)

    }

    return (
        <ChangePasswordContainer>
            <MDBRow>
                <FormContainer>
                    <form>
                        <Paragraph>Change Password</Paragraph>

                        <ChangePasswordForm>
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
                            <Label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                New Password
                            </Label>
                            <MDBInput
                                label='Password'
                                id='typePassword'
                                type='password'
                                onChange={(e) => setAuthData({ ...authData, newPassword: e.target.value })}
                            />
                            <br />
                            <Label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                Confirm New Password
                            </Label>
                            <MDBInput
                                label='Password'
                                id='typePassword'
                                type='password'
                                onChange={(e) => setAuthData({ ...authData, confirmNewPassword: e.target.value })}
                            />
                            <DivButton>
                                <CustomButton variant="primary" type='button' onClick={() => saveUserData(event)} theme={theme}>
                                    Change Password
                                </CustomButton>
                            </DivButton>
                        </ChangePasswordForm>
                    </form>
                </FormContainer>
            </MDBRow>
        </ChangePasswordContainer>
    )
}

export default Login

