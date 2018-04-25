import React from 'react';
import timeFormat from '../utils/timeFormat';
import Controls from './Controls.js';

const Timer = (props) => {
    return (
        <div>
            <h1 className='timer'>{timeFormat(props.time)}</h1>
            <Controls />
        </div>
    )
}

export default Timer;