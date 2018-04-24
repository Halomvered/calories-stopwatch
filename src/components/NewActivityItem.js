import React from 'react';
import { List } from 'semantic-ui-react';

const NewActivityItem = (props) => {
    return (
            <List.Item 
            onClick={() => console.log('ook')}
            style={{ cursor: 'pointer' }}
            >
                <List.Content>
                    <List.Header>{props.activityName.toUpperCase()}</List.Header>
                    {props.activityInfo}.
                </List.Content>
            </List.Item>
    )
}

export default NewActivityItem;