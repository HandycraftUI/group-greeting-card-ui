import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import styled from 'styled-components'

import CustomButton from '../components/CustomButtom/CustomButton'

const IntroDiv = styled(MDBContainer)`
    margin-top: 10rem;
`

const ButtonDiv = styled.div`
    width: 55%;
`

const Image = styled.img`
    width: 750px;
    height: 550px;
`

const Home = () => {
    return (
        <div className='d-flex p-4'>
            <IntroDiv>
                <MDBContainer>
                    <h2>The easiest way to send a group card.</h2>
                    <p>
                        Group cards made easy. Create an online group card
                        in 1 minute with unlimited signers.
                    </p>
                </MDBContainer>

                <ButtonDiv className='d-flex'>
                    <MDBContainer>
                        <CustomButton variant='primary'>
                            Start a Card
                        </CustomButton>
                    </MDBContainer>
                    <MDBContainer>
                        <CustomButton variant='outline-primary'>
                            Try the demo
                        </CustomButton>
                    </MDBContainer>
                </ButtonDiv>
            </IntroDiv>

            <MDBContainer>
                <Image src="https://www.groupgreeting.com/assets/spotlight/group-greeting-card-samples-4bd14f3ae81bd0088f98f5f9411e9bb0999b3a5adc7c2b57108d15bf32ce8925.png" alt="" />
            </MDBContainer>
        </div>
    )
}

export default Home
