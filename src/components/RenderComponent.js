import React from 'react';
import componentPicker from '../utils/componentPicker';
import StopwatchPage from './StopwatchPage';
import NewTimerPage from './NewTimerPage';
import CalenderPage from './CalenderPage';
import ProfilePage from './ProfilePage';

const RenderComponent = (props) => {
    const path = props.path;
    const renderComponent = componentPicker(path, props)
    return (
        <div>
            {renderComponent}
        </div>
    )
}

export default RenderComponent;