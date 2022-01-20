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

const Register = () => {
    return (
        <RegisterContainer>
            <MDBRow>
                <FormContainer>
                    <form>
                        <Paragraph>Sign up</Paragraph>
                        <Label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                            Username
                        </Label>
                        <MDBInput label='Username' id='typeUsername' type='username' />
                        <br />
                        <Label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                            Email
                        </Label>
                        <MDBInput label='Email' id='typeEmail' type='email' />
                        <br />
                        <Label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                            Password
                        </Label>
                        <MDBInput label='Password' id='typePassword' type='password' />
                        <br />
                        <Label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                            Repeat Password
                        </Label>
                        <MDBInput label='Repeat Password' id='typeRepeatPassword' type='password' />
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

export default Register
