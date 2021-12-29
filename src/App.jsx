import React from 'react'
import {Grid, Button} from 'semantic-ui-react'
import styled from 'styled-components'
import useTheme from './hooks/use-theme'
import {useDispatch} from 'react-redux'
import {toggleThemeAction} from './store/actions/common'

const AppContainer = styled(Grid)`
  background-color: ${({theme}) => theme.palette.background.primary};
  color: ${({theme}) => theme.palette.text.primary};
  min-height: 100vh;
`

function App() {
    const theme = useTheme()
    const dispatch = useDispatch()

    const toggleTheme = () => {
        dispatch(toggleThemeAction())
    }

    return (
        <AppContainer
            theme={theme}
            divided="horizontal"
            stackable>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Button
                        basic
                        color="red"
                        onClick={toggleTheme}
                    >Toggle theme
                    </Button>
                    Hello its me!
                </Grid.Column>
            </Grid.Row>
        </AppContainer>
    )
}

export default App
