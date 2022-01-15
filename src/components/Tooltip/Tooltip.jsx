import React, {useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import useTheme from '../../hooks/use-theme'

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`

const Tip = styled.div`
  position: absolute;
  border-radius: 4px;
  left: 100%;
  transform: translateX(-50%);
  padding: .5rem 1.25rem;
  background-color: ${({theme}) => theme.palette.secondary};
  color: ${({theme}) => theme.palette.text.secondary};
  font-size: 14px;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;
  
  &::before {
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &.top {
    content: '';
    left: -100%;
    top: -200%;
    transform: translateX(0) translateY(-50%);
  }

  &.top::before {
    content: " ";
    position: absolute;
    top: 100%;
    left: 45%;
    margin-left: -5px;
    border-width: 6px;
    border-style: solid;
    border-color: ${({theme}) => theme.palette.secondary} transparent transparent transparent;
  }

  &.right {
    content: '';
    left: 250%;
    top: 60%;
    transform: translateX(0) translateY(-50%);
  }

  &.right::before {
    content: " ";
    position: absolute;
    top: 35%; 
    left: -7px;
    transform: rotate(90deg);
    margin-left: -5px;
    border-width: 6px;
    border-style: solid;
    border-color: ${({theme}) => theme.palette.secondary} transparent transparent transparent;
  }

  &.bottom {
    content: '';
    left: -100%;
    top: 200%;
    transform: translateX(0) translateY(-50%);
  }

  &.bottom::before {
    content: " ";
    position: absolute;
    top: -35%; /* At the bottom of the tooltip */
    left: 50%;
    transform: rotate(180deg);
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({theme}) => theme.palette.secondary} transparent transparent transparent;
  }

  &.left {
    content: '';
    left: -450%;
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }

  &.left::before {
    content: '';
    position: absolute;
    top: 35%;
    left: 105%;
    transform: rotate(-90deg);
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({theme}) => theme.palette.secondary} transparent transparent transparent;
  }
`

const Tooltip = (props) => {
    let timeout
    const [active, setActive] = useState(false)
    const theme = useTheme()

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true)
        }, props.delay || 400)
    }

    const hideTip = () => {
        clearInterval(timeout)
        setActive(false)
    }

    return (
        <Wrapper
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {props.children}
            {!active && (
                <Tip theme={theme} className={`${props.direction || 'top'}`}>
                    {props.content}
                </Tip>
            )}
        </Wrapper>
    )
}

export default Tooltip



Tooltip.propTypes = {
    direction: PropTypes.string,
    content: PropTypes.string,
    delay: PropTypes.number,
    children: PropTypes.any
}
