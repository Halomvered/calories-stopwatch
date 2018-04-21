import React from 'react';
import componentPicker from '../utils/componentPicker';
import StopwatchPage from '../pages/StopwatchPage';
import NewTimerPage from '../pages/NewTimerPage';
import CalendarPage from '../pages/CalendarPage';
import ProfilePage from '../pages/ProfilePage';

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