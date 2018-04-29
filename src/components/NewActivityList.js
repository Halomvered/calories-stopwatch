import React from 'react';
import { List } from 'semantic-ui-react';
import METDATA from '../data/METData';
import NewActivityItem from './NewActivityItem';
import generateNameInfo from '../utils/generateNameInfo'

const NewActivityList = (props) => {
    const search = props.search;  
    return (
        <List celled >
            {
                !!search &&
                METDATA.map((activity, i) => {                  
        {/* eslint-disable-next-line */}
                    const { activityName, activityInfo } = generateNameInfo(activity.description);
                    if (activityName.indexOf(search) !== -1) {                                                
                        return (
                            <NewActivityItem 
                            key={`${activityInfo}${activity.MET}${i}`}
                            activityName={activityName}
                            activityInfo={activityInfo}
                            activityMET={activity.MET}
                            handleChosenActivity={props.handleChosenActivity}
                            />
                        )
                    }
                })
            }
        </List>
    )
}

export default NewActivityList;