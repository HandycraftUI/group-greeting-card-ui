import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import styled from 'styled-components'

const NavbarC = styled(Container)`
   background-color: red;
   padding: 10px;
   display:flex;
`

export default function Navbar() {

    return (
        <NavbarC>
            <Menu.Item name='Greeting Card' />
            <Menu.Item position='right' name='Login' />
            <Menu.Item name='Register' />
        </NavbarC>
    )
}
