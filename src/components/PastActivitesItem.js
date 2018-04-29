import React from 'react';
import { Button, List } from 'semantic-ui-react';

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
            { 
                !props.isFromCalendar && 
                <List.Content floated='right'>
                        <Button 
                        compact 
                        size='tiny' 
                        positive
                        onClick={props.onResumeItem}
                        >
                        Resume
                        </Button>
                        <Button 
                        compact 
                        size='tiny' 
                        negative
                        onClick={props.onRemoveItem}
                        >
                        Remove
                        </Button>
                </List.Content>
            }
        </List.Item>
    )
}

export default PastActivitesItem;

