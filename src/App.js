import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import StopwatchHeader from './components/StopwatchHeader';
import RenderComponent from './components/RenderComponent';
import isObjectEmpty from './utils/isObjectEmpty';
import moment from 'moment';
import uuid from 'uuid';

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
            },
            currentActivity: {},
            pastActivites: [],
            redirect: false,
            activityExists: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChosenActivity = this.handleChosenActivity.bind(this);
    }

    handleChange = (e, { name, value }) => {        
        const currentUser = {
            ...this.state.currentUser,
            [name]: value
        };
        this.setState(() => ({ currentUser }));
    };

    handleChosenActivity = (e) => {
        const activityData = JSON.parse(e.target.closest('.item')
        .getAttribute('data'));
        const { activityMET, activityName, activityInfo } = activityData;
        const sourceNewActivity = true;

        const currentActivity = {
                activityMET,
                activityName,
                activityInfo,
                activityTime: 0,
                activityId: uuid(),
                activityCreatedAt: moment()
        }

        this.setState(() => ({ 
            redirect: true,
            activityExists: true,    
        }), this.onSave(sourceNewActivity));

        setTimeout(() => {
            this.setState(() => ({ 
                redirect: false,
                currentActivity,
            }))
        }, 500);
    };

    onSave = (sourceNewActivity) => {
        return () => {
            if (!this.state.activityExists) return;
            
            const currentActivity = sourceNewActivity ? '' : {};
            const latestActivity =  this.state.currentActivity;
            const pastActivites = this.state.pastActivites;

            if(!isObjectEmpty(this.state.currentActivity)) pastActivites.unshift(latestActivity);
            
            this.setState(() => ({
                currentActivity,
                pastActivites,
            }));
            
        }
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
                            handleChosenActivity={this.handleChosenActivity}
                            redirect={this.state.redirect}
                            />
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
        );
    }
}

export default App;
