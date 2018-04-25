import React from 'react';
import { List } from 'semantic-ui-react';

const NewActivityItem = (props) => {            
    return (
            <List.Item 
            style={{ cursor: 'pointer' }}
            onClick={props.handleChosenActivity}
            data={JSON.stringify({
                activityMET: props.activityMET,
                activityName: props.activityName,
                activityInfo: props.activityInfo,
                })}
            >
                <List.Content>
                    <List.Header>{props.activityName.toUpperCase()}</List.Header>
                    {props.activityInfo}.
                </List.Content>
            </List.Item> 
    )
}

export default NewActivityItem;