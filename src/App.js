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
            pastActivites: [],
            redirect: false,
            activityExists: false,
            isRunning: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChosenActivity = this.handleChosenActivity.bind(this);
        this.onStartStop = this.onStartStop.bind(this);
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

        const latestActivity =  this.state.currentActivity;
        const pastActivites = this.state.pastActivites;

        if(this.state.currentActivity.activityMET > 0) pastActivites.unshift(latestActivity);

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
            currentActivity   
        }));

        setTimeout(() => {
            this.setState(() => ({ 
                redirect: false,
            }))
        }, 500);
    };

    onStartStop = () => {        
        if (!this.state.isRunning) {
            if (this.state.currentActivity.activityMET === 0) {
                this.setState(() => ({ 
                    activityExists: false
                 }));
                 return;
            }; 
    
            this.setState(() => ({ 
                isRunning: true,
                activityExists: true
                }));
            
            const currentActivity = this.state.currentActivity;
    
            this.timeRef = setInterval(() => {
                currentActivity.activityTime += 100;                
                this.setState(() => ({ currentActivity }))
            }, 100);

        } else {
            this.setState(() => ({ 
                isRunning: false
             }))
            clearInterval(this.timeRef);
        }
        
    };

    onSave = () => {
        if (!this.state.activityExists) return;

        const latestActivity = this.state.currentActivity;
        const pastActivites = [latestActivity, ...this.state.pastActivites];

        this.setState(() => ({
            currentActivity: this.defeaultActivity,
            pastActivites,
            activityExists: false
        }));
    };

    onReset = () => {
        const activity = this.state.currentActivity;
        activity.activityTime = 0;
        this.setState(() => ({ activity }));
    };

    onRemoveItem = (e) => {
        
        const id = JSON.parse(e.target.closest('.item').getAttribute('data')).activityId;
        const pastActivites = this.state.pastActivites
        .filter((activity) => activity.activityId !== id);
        
        this.setState(() => ({ pastActivites }));
    };

    onResumeItem = (e) => {
        const id = JSON.parse(e.target.closest('.item').getAttribute('data')).activityId;

        const currentActivity = this.state.pastActivites
        .filter((activity) => activity.activityId === id)[0];
        
        let pastActivites = this.state.pastActivites
        .filter((activity) => activity.activityId !== id);

        if (this.state.currentActivity.activityMET) {
            pastActivites = [this.state.currentActivity, ...pastActivites];
        };
        
        this.setState(() => ({
            pastActivites,
            currentActivity,
            activityExists: true
        }));        
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
                            redirect={this.state.redirect}
                            isRunning={this.state.isRunning}
                            handleChange={this.handleChange}
                            handleChosenActivity={this.handleChosenActivity}
                            onStartStop={this.onStartStop}
                            onSave={this.onSave}
                            onReset={this.onReset}
                            onRemoveItem={this.onRemoveItem}
                            onResumeItem={this.onResumeItem}
                            />
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
        );
    }
}

export default App;
