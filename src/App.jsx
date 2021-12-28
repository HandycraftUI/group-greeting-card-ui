import React from 'react'
import {Grid, Button} from 'semantic-ui-react'
import {useSelector} from 'react-redux'

function App() {
    const exampleStoreData = useSelector(state => state.common)

    return (
        <Grid divided="horizontal" stackable>
            <Grid.Row columns={2}>
                <Grid.Column >
                    <Button basic color="red">Have fun! ;)</Button>
                </Grid.Column>
                <Grid.Column>
                    {exampleStoreData.data}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default App
