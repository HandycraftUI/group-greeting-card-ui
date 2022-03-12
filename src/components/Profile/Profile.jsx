import React from 'react'
import styled from 'styled-components'
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit'
import { MdOutlineSettings, MdModeEditOutline } from 'react-icons/md'
import { useSelector } from 'react-redux'

import CustomButton from '../CustomButtom/CustomButton'
import useTheme from '../../hooks/use-theme'

const Delimeter = styled(MDBContainer)`
   height: 3px;
   border-radius: 50%;
   background-color: ${({ theme }) => theme.palette.navbar.primary};
`

const Image = styled.img`
   width: 400px;
   height: 360px;
   border-radius: 50%;
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
            <MDBContainer className='d-flex py-5'>
                <MDBContainer className='text-center'>
                    <div>
                        <MDBContainer>
                            <Image src="https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-2.jpg" />
                        </MDBContainer>
                    </div>
                    <div className='mt-3'>
                        <h3>Vladimir Metodiev</h3>
                    </div>
                </MDBContainer>

                <MDBContainer className='mt-4'>
                    <MDBContainer className='mb-4'>
                        <h4>First Name:</h4>
                        <MDBInput label='Vladimir' id='formControlDisabled' type='text' disabled />
                    </MDBContainer>

                    <MDBContainer className='mb-4'>
                        <h4>Last Name:</h4>
                        <MDBInput label='Metodiev' id='formControlDisabled' type='text' disabled />
                    </MDBContainer>

                    <MDBContainer className='mb-4'>
                        <h4>Email:</h4>
                        <MDBInput label='vladimir2907@gmail.com' id='formControlDisabled' type='text' disabled />
                    </MDBContainer>

                    <MDBContainer className='mb-4'>
                        <CustomButton variant='primary'>
                            Account Settings <MdOutlineSettings style={{ fontSize: '17px' }} />
                        </CustomButton>
                    </MDBContainer>
                </MDBContainer>
            </MDBContainer>

            <Delimeter theme={theme} />

            <MDBContainer className='mt-4'>
                <MDBContainer >
                    <h2 className='ms-5'>Created Cards:</h2>
                </MDBContainer>
                <MDBContainer className='d-flex'>
                    {list}
                </MDBContainer>
            </MDBContainer>
        </MDBContainer>
    )
}

export default Profile
