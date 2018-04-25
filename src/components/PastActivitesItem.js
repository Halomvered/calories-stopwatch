import React from 'react';
import { Button, List, Label } from 'semantic-ui-react';

const PastActivitesItem = (props) => {            
    return (
        <List.Item 
        data={JSON.stringify({
                activityMET: props.activityMET,
                activityName: props.activityName,
                activityInfo: props.activityInfo,
                activityId: props.activityId,
                })
            }
        >
            <List.Content>
                <List.Header>
                    {props.activityName}.
                </List.Header>
                <List.Description>
                    Calories Burned: {props.caloriesBurned}
                </List.Description>
            </List.Content>
            <List.Content floated='right'>
                    <Button compact size='tiny' positive>Resume</Button>
                    <Button compact size='tiny' negative>Remove</Button>
            </List.Content>
        </List.Item>
    )
}

export default PastActivitesItem;

