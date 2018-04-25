import React from 'react';
import { List, Divider } from 'semantic-ui-react';
import PastActivitesItem from './PastActivitesItem'
import caloriesBurned, { personalMET, correctedMET} from '../utils/caloriesBurned';

const PastActivitesList = (props) => {
    const { sex, age, height, weight } = props.state.currentUser;
    const pMET = personalMET(sex, age, height, weight);
    return (
        <List inverted divided verticalAlign='middle'>
            {
                props.state.pastActivites.map((activity) => {
                    const cMET = correctedMET(pMET, activity.activityMET);
                    return (
                            <PastActivitesItem 
                            key={activity.activityId}
                            activityMET={activity.activityMET}
                            activityName={activity.activityName}
                            activityInfo={activity.activityInfo}
                            activityId={activity.activityId}
                            user={props.currentUser}
                            caloriesBurned={caloriesBurned(cMET, weight, activity.activityTime)}
                            />
                    )
                })
            }
        </List>
    )
}

export default PastActivitesList;