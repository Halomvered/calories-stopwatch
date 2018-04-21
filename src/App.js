import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react'

class App extends Component {
    render() {
        return (
        <div className="Stopwatch-container">
            <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
            >
                <Grid.Column style={{ maxWidth: 400 }}
                >
                    <Segment raised inverted secondary>
                    <ol>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                    </ol>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
        );
    }
}

export default App;
