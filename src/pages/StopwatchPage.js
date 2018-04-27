import React from 'react';
import Timer from '../components/Timer';
import CaloriesTracker from '../components/CaloriesTracker';
import PastActivitesList from '../components/PastActivitesList';
import Summary from '../components/Summary';
import totalCalories from '../utils/totalCalories';
import { Segment } from 'semantic-ui-react';

const StopwatchPage = (props) => {    
    const data = {...props.props};    
    const userWeight = data.state.currentUser.weight;
    const totalCaloriesToday = totalCalories(data.state.pastActivites, userWeight);   
    return (
        <div 
        style={{ height: '55vh', width: '100%' }}
        >
            <Segment 
            inverted
            style={{ height: '26vh', width: '100%',  overflowX : 'scroll', paddingTop: 0}}
            >
                <Timer 
                time={data.state.currentActivity.activityTime}
                onStartStop={data.onStartStop}
                onSave={data.onSave}
                onReset={data.onReset}
                isRunning={data.isRunning}
                />
                <CaloriesTracker state={data.state}/>
            </Segment>
            <Segment 
            inverted
            textAlign='left' 
            style={{ height: '26vh', overflowX : 'scroll' }}>
                        <PastActivitesList
                        state={data.state}
                        onRemoveItem={data.onRemoveItem}
                        onResumeItem={data.onResumeItem}
                        />
            </Segment>
                <Summary 
                totalCalories={totalCaloriesToday}
                />
        </div>
    )
}

export default StopwatchPage;