import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import useTheme from '../../hooks/use-theme'

const Button = styled(MDBBtn)`
    ${({ theme, styletype }) => styletype === 'primary' && {
        backgroundColor: theme.palette.tertiary,
        color: theme.palette.white,
        border: `2px solid ${theme.palette.tertiary}`,
    }};
    ${({ theme, styletype }) => styletype === 'secondary' && {
        backgroundColor: theme.palette.secondary,
        color: theme.palette.white,
        border: `2px solid ${theme.palette.secondary}`,
    }};
    ${({ theme, styletype }) => styletype === 'outline-primary' && {
        backgroundColor: theme.palette.white,
        color: theme.palette.tertiary,
        border: `2px solid ${theme.palette.tertiary}`,
    }};
    ${({ theme, styletype }) => styletype === 'outline-secondary' && {
        backgroundColor: theme.palette.white,
        color: theme.palette.secondary,
        border: `2px solid ${theme.palette.secondary}`,
    }};
    cursor: pointer;
    font-weight: 600;

    :hover{
        ${({ theme, styletype }) => styletype === 'primary' && {
        backgroundColor: theme.palette.white,
        color: theme.palette.tertiary,
        border: `2px solid ${theme.palette.tertiary}`,
    }};
    ${({ theme, styletype }) => styletype === 'secondary' && {
        backgroundColor: theme.palette.white,
        color: theme.palette.secondary,
        border: `2px solid ${theme.palette.secondary}`,
    }};
    ${({ theme, styletype }) => styletype === 'outline-primary' && {
        backgroundColor: theme.palette.secondary,
        color: theme.palette.white,
    }};
    ${({ theme, styletype }) => styletype === 'outline-secondary' && {
        backgroundColor: theme.palette.secondary,
        color: theme.palette.white,
    }};
    }
`

const CustomButton = ({ styletype, children }) => {
    const theme = useTheme()

    return (
        <Button theme={theme} styletype={styletype}>
            {children}
        </Button>
    )
}

CustomButton.propTypes = {
    styletype: PropTypes.string,
    children: PropTypes.string,
}

export default CustomButton
