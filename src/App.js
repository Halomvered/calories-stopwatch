import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import StopwatchHeader from './components/StopwatchHeader';
import RenderComponent from './components/RenderComponent';
// import isObjectEmpty from './utils/isObjectEmpty';
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
            currentActivity: this.defeaultActivity,
            pastActivites: [
                {
                activityMET: 7,
                activityName: 'Climbing',
                activityInfo: 'Really high',
                activityTime: 213422,
                activityId: 0,
                activityCreatedAt: 0
                },
                {
                activityMET: 12,
                activityName: 'Running',
                activityInfo: 'Really fast',
                activityTime: 2137642,
                activityId: 0,
                activityCreatedAt: 0
                },
            ],
            redirect: false,
            activityExists: true,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChosenActivity = this.handleChosenActivity.bind(this);
    }

    get defeaultActivity() {
        return {
                activityMET: 0,
                activityName: '',
                activityInfo: '',
                activityTime: 0,
                activityId: 0,
                activityCreatedAt: 0
        }
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

        const currentActivity = {
                activityMET,
                activityName: activityName.toUpperCase(),
                activityInfo,
                activityTime: 0,
                activityId: uuid(),
                activityCreatedAt: moment()
        }

        this.setState(() => ({ 
            redirect: true,
            activityExists: true,    
        }), this.onSave(currentActivity));

        setTimeout(() => {
            this.setState(() => ({ 
                redirect: false,
            }))
        }, 500);
    };

    onSave = (sourceNewActivity) => {
        return () => {
            if (!this.state.activityExists) return;
            
            const currentActivity = sourceNewActivity ? sourceNewActivity : {};
            const latestActivity =  this.state.currentActivity;
            const pastActivites = this.state.pastActivites;

            if(this.state.currentActivity.activityMET !== 0) pastActivites.unshift(latestActivity);
            
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
                    <Segment raised style={{ height: '72vh', backgroundColor: '#333' }}>
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
