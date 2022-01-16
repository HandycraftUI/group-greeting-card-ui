import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import useTheme from '../../hooks/use-theme'

const Button = styled(MDBBtn)`
    ${({ theme, type }) => type === 'primary' && {
        backgroundColor: theme.palette.tertiary,
        color: theme.palette.white
    }};
    ${({ theme, type }) => type === 'secondary' && {
        backgroundColor: theme.palette.secondary,
        color: theme.palette.white
    }};
    ${({ theme, type }) => type === 'outline-primary' && {
        backgroundColor: theme.palette.white,
        color: theme.palette.tertiary,
        border: `2px solid ${theme.palette.tertiary}`,
    }};
    ${({ theme, type }) => type === 'outline-secondary' && {
        backgroundColor: theme.palette.white,
        color: theme.palette.secondary,
        border: `2px solid ${theme.palette.secondary}`,
    }};
    cursor: pointer;
    font-weight: 600;

    :hover{
        ${({ theme, type }) => type === 'primary' && {
        backgroundColor: theme.palette.white,
        color: theme.palette.tertiary,
        border: `2px solid ${theme.palette.tertiary}`,
    }};
    ${({ theme, type }) => type === 'secondary' && {
        backgroundColor: theme.palette.white,
        color: theme.palette.secondary,
        border: `2px solid ${theme.palette.secondary}`,
    }};
    ${({ theme, type }) => type === 'outline-primary' && {
        backgroundColor: theme.palette.secondary,
        color: theme.palette.white,
    }};
    ${({ theme, type }) => type === 'outline-secondary' && {
        backgroundColor: theme.palette.secondary,
        color: theme.palette.white,
    }};
    }
`

const CustomButton = ({ type, children }) => {
    const theme = useTheme()

    return (
        <Button theme={theme} type={type}>
            {children}
        </Button>
    )
}

CustomButton.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
}

export default CustomButton
