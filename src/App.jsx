import React from 'react'
import {Grid, Button} from 'semantic-ui-react'

function App() {
    return (
        <Grid divided="horizontal" stackable>
            <Grid.Row columns={2}>
                <Grid.Column >
                    <Button basic color="red">Have fun! ;)</Button>
                </Grid.Column>

                <Grid.Column>
                    <Button basic color="red">Have fun! :)</Button>
                </Grid.Column>

                <Grid.Column>
                    <Button basic color="red">Have fun! :)</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default App
