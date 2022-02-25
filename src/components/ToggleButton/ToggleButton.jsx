import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { toggleThemeAction } from '../../store/actions/common'
import useTheme from '../../hooks/use-theme'
import { respondTo } from '../../style-config/respond-to'
import { SLIDER_LIGHT, SLIDER_DARK } from '../../constants/common'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${respondTo.xsmall`
        margin-top: 1rem;
  `}

   ${respondTo.medium`
        margin-top: 0rem;
   `}
`

const SwitchLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 15px;
`

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :checked + .slider {
    background-color: ${({ theme }) => theme.palette.white};
  }

  :checked + .slider:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
    background: ${({ theme }) => theme.palette.tertiary} url(${SLIDER_DARK}) no-repeat center;
    background-size: 15px;
  }
`

const SliderSpan = styled.span`
    border-radius: 34px;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.palette.white};
    -webkit-transition: 0.4s;
    transition: 0.4s;

    :before {
       border-radius: 50%;
       position: absolute;
       content: "";
       height: 23px;
       width: 23px;
       left: 0px;
       bottom: 4px;
       top: 0;
       bottom: 0;
       margin: auto 0;
       -webkit-transition: 0.4s;
       transition: 0.4s;
       box-shadow: 0 0px 15px ${({ theme }) => theme.palette.slider};
       background: ${({ theme }) => theme.palette.tertiary} url(${SLIDER_LIGHT}) no-repeat center;
       background-size: 15px;
    }
`

const ToggleButton = () => {
    const dispatch = useDispatch()
    const theme = useTheme()

    const toggleTheme = () => {
        dispatch(toggleThemeAction())
    }

    return (
        <Container className='ps-2'>
            <SwitchLabel>
                <Input type="checkbox" onClick={toggleTheme} theme={theme} />
                <SliderSpan className="slider round" theme={theme} />
            </SwitchLabel>
        </Container>
    )
}

export default ToggleButton
