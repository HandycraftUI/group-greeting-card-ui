import React from 'react'
import styled from 'styled-components'
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBContainer,
} from 'mdb-react-ui-kit'

import CustomButton from '../CustomButtom/CustomButton'
import { respondTo } from '../../style-config/respond-to'

const LoginContainer = styled(MDBContainer)`
    form p{
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 1.5rem;
    }

    .col{
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
    }

    label{
        margin-bottom: 0.4rem;
    }

    .btn-div{
        text-align: center;
        margin-top: 1.5rem;
    }

    ${respondTo.xsmall`
        padding: 2rem;
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

const Register = () => {
    return (
        <LoginContainer>
            <MDBRow>
                <MDBCol>
                    <form>
                        <p>Sign up</p>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                            Username
                        </label>
                        <MDBInput label='Username' id='typeUsername' type='email' />
                        <br />
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                            Email
                        </label>
                        <MDBInput label='Email' id='typeEmail' type='email' />
                        <br />
                        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                            Password
                        </label>
                        <MDBInput label='Password' id='typePassword' type='password' />
                        <br />
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                            Repeat Password
                        </label>
                        <MDBInput label='Repeat Password' id='typeRepeatPassword' type='password' />
                        <div className="btn-div">
                            <CustomButton styleType="primary" type='submit'>
                                Register
                            </CustomButton>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </LoginContainer>
    )
}

export default Register
