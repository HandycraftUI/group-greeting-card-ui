import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBContainer,
} from 'mdb-react-ui-kit'

import CustomButton from '../CustomButtom/CustomButton'
import { respondTo } from '../../style-config/respond-to'

const LoginContainer = styled(MDBContainer)`
    padding: 2rem;
`

const Paragraph = styled.p`
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1.5rem;
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

    ${respondTo.xsmall`
        padding: 2rem 2rem;
        .col{
           width: 90vw;
        }    
    `}

    ${respondTo.small`
        .col{
           width: 80vw;
        }
    `}

    ${respondTo.medium`
        .col{
            width: 70vw;
        }
    `}

    ${respondTo.large`
        .col{
            width: 60vw;
        }
    `}
`

const DivButton = styled.div`
    text-align: center;
    margin-top: 1.5rem;
`

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Login = () => {

    return (
        <LoginContainer>
            <MDBRow>
                <FormContainer>
                    <form>
                        <Paragraph>Sign in</Paragraph>
                        <br />
                        <Label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                            Email
                        </Label>
                        <MDBInput label='Email' id='typeEmail' type='email' />
                        <br />
                        <Div>
                            <Label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                                Password
                            </Label>
                            <Link to='/auth/forgot-password' className='nav-links' >
                                Forgot Password?
                            </Link>
                        </Div>
                        <MDBInput label='Password' id='typePassword' type='password' />
                        <DivButton>
                            <CustomButton variant="primary" type='submit'>
                                Login
                            </CustomButton>
                        </DivButton>
                    </form>
                </FormContainer>
            </MDBRow>
        </LoginContainer>
    )
}

export default Login
