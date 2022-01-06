import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleThemeAction } from './store/actions/common'
import { Grid, Button } from 'semantic-ui-react'

export default function ToggleButton() {
    const dispatch = useDispatch()

    const toggleTheme = () => {
        dispatch(toggleThemeAction())
    }
    return (
        <Grid.Row columns={2}>
            <Grid.Column>
                <Button
                    basic
                    color="red"
                    onClick={toggleTheme}
                >Toggle theme
                </Button>
            </Grid.Column>
        </Grid.Row>
    )
}
