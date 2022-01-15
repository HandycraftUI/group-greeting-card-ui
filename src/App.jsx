import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Navbar from './components/Navbar/Navbar'
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes.jsx'
import styled from 'styled-components'
import { respondTo } from './style-config/respond-to'

//Example how to use media queries with styled-components
const Wrapper = styled.div`
  background-color: purple;

  ${respondTo.small`
        background-color: red;
    `}

  ${respondTo.medium`
        background-color: blue;
    `}

  ${respondTo.large`
        background-color: yellow;
    `}

  ${respondTo.xlarge`
        background-color: orange;
    `}

  ${respondTo.xxlarge`
        background-color: green;
    `}
`

const App = () => {
    const routing = useRoutes(routes)
    return (
        <Wrapper>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                {routing}
            </Suspense>
        </Wrapper>
    )
}

export default App
