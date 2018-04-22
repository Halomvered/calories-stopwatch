import React from 'react'
import { List, Grid, Icon, Label, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const StopwatchHeader = () => (

    <Segment style={{ backgroundColor: '#666', border: '1px ridge #333' }}>
        <Grid columns={5}>
            <Grid.Row verticalAlign='middle'>

                <List horizontal size='tiny' divided>
                    <List.Item>
                        <Link to="/">
                            <Label ribbon size='medium'>CALORIES STOPWATCH</Label>
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

            </Grid.Row>
        </Grid>
    </Segment>
)

export default StopwatchHeader;