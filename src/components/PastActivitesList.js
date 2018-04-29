import React from 'react';
import { List } from 'semantic-ui-react';
import moment from 'moment'
import PastActivitesItem from './PastActivitesItem'
import caloriesBurned, { personalMET, correctedMET} from '../utils/caloriesBurned';

const PastActivitesList = (props) => {
    const { sex, age, height, weight } = props.state.currentUser;
    const pMET = personalMET(sex, age, height, weight);

    return (
        <List inverted divided verticalAlign='middle'>
            {
                props.pastActivites.map((activity) => {
                    const cMET = correctedMET(pMET, activity.activityMET);
                    const timeFilter = props.isFromCalendar ? props.createdAtFilter : moment();                    
                    if (activity.activityCreatedAt.format('L') === timeFilter.format('L')) {
                        return (
                                <PastActivitesItem 
                                key={activity.activityId}
                                activityMET={activity.activityMET}
                                activityName={activity.activityName}
                                activityInfo={activity.activityInfo}
                                activityId={activity.activityId}
                                user={props.currentUser}
                                caloriesBurned={caloriesBurned(cMET, weight, activity.activityTime)}
                                onRemoveItem={props.onRemoveItem}
                                onResumeItem={props.onResumeItem}
                                isFromCalendar={props.isFromCalendar}
                                />
                        )
                    }
                })
            }
        </List>
    )
}

export default PastActivitesList;