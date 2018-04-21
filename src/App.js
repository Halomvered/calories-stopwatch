import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import StopwatchHeader from './components/StopwatchHeader';
import RenderComponent from './components/RenderComponent';

class App extends Component {
    render() {
        const path = this.props.match.path;
        
        return (
        <div className="Stopwatch-container">
            <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
            >
                <Grid.Column style={{ maxWidth: 450 }}
                >
                    <Segment raised inverted secondary>
                            <StopwatchHeader />
                            <RenderComponent path={path}/>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
        );
    }
}

export default App;
