import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import StopwatchHeader from './components/StopwatchHeader';
import RenderComponent from './components/RenderComponent';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: {
                firstName: 'Halom',
                lastName: 'vered',
                age: 33,
                sex: 'male',
                height: 167,
                weight: 70,
            }
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e, { name, value }) => {        
        const currentUser = {
            ...this.state.currentUser,
            [name]: value
        };
        this.setState(() => ({ currentUser }));
    };

    render() {
        const path = this.props.match.path;
        
        return (
        <div className="Stopwatch-container">
            <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
            >
                <Grid.Column style={{ maxWidth: 400 }}>
                    <Segment raised style={{ height: '70vh', backgroundColor: '#333' }}>
                            <StopwatchHeader />
                            <RenderComponent 
                            path={path} 
                            state={this.state}
                            handleChange={this.handleChange}
                            />
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
        );
    }
}

export default App;
