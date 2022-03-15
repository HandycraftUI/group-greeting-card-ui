import React from 'react'
import styled from 'styled-components'
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit'
import { MdOutlineSettings } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import CustomButton from '../CustomButtom/CustomButton'
import useTheme from '../../hooks/use-theme'
import { respondTo } from '../../style-config/respond-to'

const Delimeter = styled(MDBContainer)`
   height: 3px;
   border-radius: 50%;
   background-color: ${({ theme }) => theme.palette.navbar.primary};
`

const Image = styled.img`
   width: 400px;
   height: 360px;
   border-radius: 50%;

   ${respondTo.xsmall`
       width: 200px;
       height: 180px;
   `}

    ${respondTo.small`
       width: 240px;
       height: 220px;
   `}

    ${respondTo.medium`
       width: 280px;
       height: 260px;
   `}

    ${respondTo.large`
       width: 380px;
       height: 360px;
   `}
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
            <MDBContainer className='d-sm-block d-md-flex py-5 mb-md-5'>
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

                    <MDBContainer className='mb-2 mb-md-2'>
                        <Link to='/user/settings'>
                            <CustomButton variant='primary' icon={<MdOutlineSettings style={{ fontSize: '17px' }} />}>
                                Account Settings
                            </CustomButton>
                        </Link>
                    </MDBContainer>
                </MDBContainer>
            </MDBContainer>

            <Delimeter theme={theme} />

            <MDBContainer className='mt-4'>
                <MDBContainer >
                    <h2 className='text-center text-md-left'>Created Cards:</h2>
                </MDBContainer>
                <MDBContainer className='d-sm-block d-md-flex'>
                    {list}
                </MDBContainer>
            </MDBContainer>
        </MDBContainer>
    )
}

export default Profile
