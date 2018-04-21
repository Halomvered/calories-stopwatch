import React from 'react'
import { List, Icon, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const StopwatchHeader = () => (
    <List horizontal divided>
        <List.Item>
            <Link to="/">
                <Header size='small'>CALORIES STOPWATCH</Header>
            </Link>
        </List.Item>

        <List.Item>
            <Link to="/">
                <Icon inverted size='large' name='hourglass start' />
            </Link>
        </List.Item>

        <List.Item>
            <Link to="/new">
                <Icon inverted size='large' name='plus' />
            </Link>
        </List.Item>

        <List.Item>
            <Link to="/calendar">
                <Icon inverted size='large' name='calendar' />
            </Link>
        </List.Item>

        <List.Item>
            <Link to="/profile">
                <Icon inverted size='large' name='user' />
            </Link>
        </List.Item>
    </List>
)

export default StopwatchHeader;