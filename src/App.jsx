import React, {Suspense} from 'react'
import {useRoutes} from 'react-router-dom'
import routes from './routes.jsx'
import styled from 'styled-components'
import {respondTo} from './style-config/respond-to'

//Example how to use media queries with styled-components
const Wrapper = styled.div`
  background-color: aqua;

  ${respondTo.xs`
        background-color: red;
    `}

  ${respondTo.sm`
        background-color: blue;
    `}

  ${respondTo.md`
        background-color: yellow;
    `}

  ${respondTo.lg`
        background-color: orange;
    `}
`

const App = () => {
    const routing = useRoutes(routes)
    return (
        <Wrapper>
            <Suspense fallback={<div>Loading...</div>}>
                {routing}
            </Suspense>
        </Wrapper>
    )
}

export default App
