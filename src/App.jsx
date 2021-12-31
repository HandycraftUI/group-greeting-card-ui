import React from 'react'
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBtn,
    MDBNavbarNav,
    MDBIcon,
} from 'mdb-react-ui-kit'

function App() {
    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarTogglerDemo03'
                    aria-controls='navbarTogglerDemo03'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
                <MDBCollapse navbar >
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='#'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                                Disabled
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                        <MDBBtn color='primary'>Search</MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default App
