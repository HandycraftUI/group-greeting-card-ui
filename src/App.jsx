import React from 'react'
import { Grid } from 'semantic-ui-react'
import styled from 'styled-components'
import useTheme from './hooks/use-theme'
import Navbar from './components/Navbar/Navbar'

const AppContainer = styled(Grid)`
  background-color: ${({ theme }) => theme.palette.background.primary};
  color: ${({ theme }) => theme.palette.text.primary};
  min-height: 100vh;
`

function App() {
    const theme = useTheme()

    return (
        <>
            <Navbar />

            <AppContainer
                theme={theme}
                divided="horizontal"
                stackable>
            </AppContainer>
        </>

    )
}

export default App
