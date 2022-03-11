import React from 'react'
import styled from 'styled-components'
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit'
import { BsPersonCircle } from 'react-icons/bs'
import { MdOutlineSettings } from 'react-icons/md'
import { useSelector } from 'react-redux'

import CustomButton from '../CustomButtom/CustomButton'
import useTheme from '../../hooks/use-theme'

const Delimeter = styled(MDBContainer)`
   height: 2px;
   border-radius: 50%;
   background-color: ${({ theme }) => theme.palette.navbar.primary};
`

const Profile = () => {
    const theme = useTheme()
    const { cardImage } = useSelector(state => state.card)

    const list = new Array(3).fill(0).map((item, index) => (
        <MDBContainer key={index} className='text-center'>
            <img src={cardImage} item={item} className='w-75' />
        </MDBContainer>
    ))

    return (
        <MDBContainer>
            <MDBContainer className='d-flex'>
                <MDBContainer>
                    <MDBContainer>
                        <BsPersonCircle style={{ fontSize: '250px' }} />
                    </MDBContainer>
                    <MDBContainer>
                        <h3>Vladimir Metodiev</h3>
                    </MDBContainer>
                </MDBContainer>

                <MDBContainer>
                    <MDBContainer>
                        <h4>First Name:</h4>
                        <MDBInput label='Vladimir' id='formControlDisabled' type='text' disabled />
                    </MDBContainer>

                    <MDBContainer>
                        <h4>Last Name:</h4>
                        <MDBInput label='Metodiev' id='formControlDisabled' type='text' disabled />
                    </MDBContainer>

                    <MDBContainer>
                        <h4>Email:</h4>
                        <MDBInput label='vladimir2907@gmail.com' id='formControlDisabled' type='text' disabled />
                    </MDBContainer>

                    <MDBContainer>
                        <CustomButton variant='primary'>
                            Account Settings <MdOutlineSettings style={{ fontSize: '17px' }} />
                        </CustomButton>
                    </MDBContainer>
                </MDBContainer>
            </MDBContainer>

            <Delimeter theme={theme} />

            <MDBContainer>
                <h2>Created Cards:</h2>
                <MDBContainer className='d-flex'>
                    {list}
                </MDBContainer>
            </MDBContainer>
        </MDBContainer>
    )
}

export default Profile
