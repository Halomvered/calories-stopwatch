import React from 'react';
import caloriesBurned, { personalMET, correctedMET} from '../utils/caloriesBurned';
import CaloriesTrackerContent from './CaloriesTrackerContent'

const CaloriesTracker = (props) => {
    const state = props.state;
    const { activityMET, activityTime, activityName } = state.currentActivity;
    const { sex, age, height, weight } = state.currentUser;
    const errorCheck = state.activityExists;
    const pMET = personalMET(sex, age, height, weight);
    const cMET = correctedMET(pMET, activityMET);

    return (

        <div>
            {
                errorCheck ? 
                <CaloriesTrackerContent 
                activityName={activityName}
                caloriesBurned={caloriesBurned(cMET, weight, activityTime)}
                />
                :
                <h5>Please create a new timer, or resume an existing one.</h5>
            }
        </div>
    )
}

export default CaloriesTracker;

CaloriesTrackerContent