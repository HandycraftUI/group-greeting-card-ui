import React from 'react'
import GuestUserNavigation from './GuestUserNavigation'
import LoggedUserNavigation from './LoggedUserNavigation'

function Navbar() {

    return (
        <LoggedUserNavigation/> ?? <GuestUserNavigation/>
    )
}

export default Navbar
