import React from 'react'
import styled from 'styled-components'
import {
    FaHandPointer,
    FaImages,
    FaIcons,
} from 'react-icons/fa'
import {MDBCol, MDBContainer} from 'mdb-react-ui-kit'
import {RiPaintBrushFill} from 'react-icons/ri'
import {IoIosBrush} from 'react-icons/io'
import {ImTextColor} from 'react-icons/im'
import {BsFillTrashFill} from 'react-icons/bs'

import useTheme from '../../hooks/use-theme'
import Tooltip from '../Tooltip/Tooltip'

const Menu = styled(MDBContainer)`
  background-color: ${({theme}) => theme.palette.primary};
  border: 3px solid ${({theme}) => theme.palette.secondary};
  color: ${({theme}) => theme.palette.text.primary};
  border-radius: 10px;
  position: fixed;
  padding: 0;
  left: 20px;
  top: 20%;
  width: 70px;
`

const MenuItem = styled(MDBCol)`
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 10px;
  text-align: center;

  &:hover {
    background-color: ${({theme}) => theme.palette.secondary};
    color: ${({theme}) => theme.palette.text.secondary};
  }
`

const EditorNavbar = () => {
    const theme = useTheme()
    return (
        <Menu theme={theme}>
            <MenuItem theme={theme}>
                <Tooltip content="Pointer" direction="right">
                    <FaHandPointer size={25}/>
                </Tooltip>
            </MenuItem>
            <MenuItem theme={theme}>
                <Tooltip content="Background color" direction="right">
                    <RiPaintBrushFill size={25}/>
                </Tooltip>
            </MenuItem>
            <MenuItem theme={theme}>
                <Tooltip content="Add text" direction="right">
                    <ImTextColor size={25}/>
                </Tooltip>
            </MenuItem>
            <MenuItem theme={theme}>
                <Tooltip content="Draw" direction="right">
                    <IoIosBrush size={25}/>
                </Tooltip>
            </MenuItem>
            <MenuItem theme={theme}>
                <Tooltip content="Add image" direction="right">
                    <FaImages size={25}/>
                </Tooltip>
            </MenuItem>
            <MenuItem theme={theme}>
                <Tooltip content="Add gif" direction="right">
                    <FaIcons size={25}/>
                </Tooltip>
            </MenuItem>
            <MenuItem theme={theme}>
                <Tooltip content="Delete" direction="right">
                    <BsFillTrashFill size={25}/>
                </Tooltip>
            </MenuItem>
        </Menu>
    )
}

export default EditorNavbar
