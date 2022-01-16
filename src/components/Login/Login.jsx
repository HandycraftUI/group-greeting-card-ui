import React from 'react'
import styled from 'styled-components'
import {
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBInput,
    MDBContainer,
} from 'mdb-react-ui-kit'

import CustomButton from '../CustomButtom/CustomButton'

const LoginContainer = styled(MDBContainer)`

    
    .col-md-6{
        margin: 0 auto;
        padding: 1rem 2rem;
        border:2px solid #050038;
    }
    
    label{
        margin-bottom: 0.4rem;
    }
`

const Login = () => {
    return (
        <LoginContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h3 text-center mb-4">Sign up</p>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                            Username
                        </label>
                        <MDBInput label='Username' id='typeEmail' type='email' />                        <br />
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                            Email
                        </label>
                        <MDBInput label='Email' id='typeEmail' type='email' />                        <br />

                        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                            Password
                        </label>
                        <MDBInput label='Password' id='typePassword' type='password' />                        <br />
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                            Repeat Password
                        </label>
                        <MDBInput label='Repeat Password' id='typePassword' type='password' />
                        <div className="text-center mt-4">
                            <CustomButton type="primary" >
                                Register
                            </CustomButton>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </LoginContainer>
    )
}

export default Login
