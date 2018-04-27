import React from 'react';
import { Button } from 'semantic-ui-react';

const Controls = (props) => {            
    return (
        <div>
            <Button 
            size='tiny' 
            compact
            onClick={props.onStartStop}
            >
            {props.isRunning ? 'Stop' : 'Start'}
            </Button>
            <Button 
            size='tiny'
            compact
            onClick={props.onSave}
            disabled={props.isRunning}
            >
            Save
            </Button>
            <Button 
            size='tiny' 
            compact
            onClick={props.onReset}
            disabled={props.isRunning}
            >
            Reset
            </Button>
        </div>
    )
}

export default Controls;