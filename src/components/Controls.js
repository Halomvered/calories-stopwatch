import React from 'react';
import { Button } from 'semantic-ui-react'

const Controls = (props) => {
    return (
        <div>
            <Button size='tiny' compact>Start</Button>
            <Button size='tiny' compact>Save</Button>
            <Button size='tiny' compact>Reset</Button>
        </div>
    )
}

export default Controls;