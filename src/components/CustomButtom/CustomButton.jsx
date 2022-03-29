import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import useTheme from '../../hooks/use-theme'

const Button = styled(MDBBtn)`
    ${({ theme, variant }) => variant === 'primary' && {
        backgroundColor: theme.palette.tertiary,
        color: theme.palette.white,
        border: `2px solid ${theme.palette.tertiary}`,
    }};
    ${({ theme, variant }) => variant === 'secondary' && {
        backgroundColor: theme.palette.secondary,
        color: theme.palette.white,
        border: `2px solid ${theme.palette.secondary}`,
    }};
    ${({ theme, variant }) => variant === 'outline-primary' && {
        backgroundColor: theme.palette.white,
        color: theme.palette.tertiary,
        border: `2px solid ${theme.palette.tertiary}`,
    }};
    ${({ theme, variant }) => variant === 'outline-secondary' && {
        backgroundColor: theme.palette.white,
        color: theme.palette.secondary,
        border: `2px solid ${theme.palette.secondary}`,
    }};
    cursor: pointer;
    font-weight: 600;

    :hover{
        ${({ theme, variant }) => variant === 'primary' && {
        backgroundColor: theme.palette.white,
        color: theme.palette.tertiary,
        border: `2px solid ${theme.palette.tertiary}`,
    }};
    ${({ theme, variant }) => variant === 'secondary' && {
        backgroundColor: theme.palette.white,
        color: theme.palette.secondary,
        border: `2px solid ${theme.palette.secondary}`,
    }};
    ${({ theme, variant }) => variant === 'outline-primary' && {
        backgroundColor: theme.palette.tertiary,
        color: theme.palette.white,
        border: `2px solid ${theme.palette.tertiary}`,
    }};
    ${({ theme, variant }) => variant === 'outline-secondary' && {
        backgroundColor: theme.palette.secondary,
        color: theme.palette.white,
        border: `2px solid ${theme.palette.secondary}`,
    }};
    }
`

const CustomButton = ({ variant, children, onClick, type, icon }) => {
    const theme = useTheme()

    return (
        <Button theme={theme} variant={variant} onClick={onClick} type={type}>
            {children} {icon}
        </Button>
    )
}

CustomButton.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.object
}

export default CustomButton
