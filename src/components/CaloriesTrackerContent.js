import React from 'react';
import { Label, List } from 'semantic-ui-react';

const CaloriesTrackerContent = (props) => {
    return (
        <List style={{ textAlign: 'left', marginTop: '10px' }} inverted>
            <List.Item>
                <List.Content>
                        <List.Header>Calories Burned: {props.caloriesBurned}</List.Header>
                </List.Content>
             </List.Item>
             {
                props.activityName &&
                <List.Item>
                    <List.Content>
                            <List.Description>{props.activityName}</List.Description>
                    </List.Content>
                </List.Item>
             }
        </List>
    )
}

export default CaloriesTrackerContent;