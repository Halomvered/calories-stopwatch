import React from 'react';
import componentPicker from '../utils/componentPicker';
import stateMethodBundler from '../utils/stateMethodBundler';
import StopwatchPage from '../pages/StopwatchPage';
import NewTimerPage from '../pages/NewTimerPage';
import CalendarPage from '../pages/CalendarPage';
import ProfilePage from '../pages/ProfilePage';

const RenderComponent = (props) => {
    const stateAndMethods = stateMethodBundler(props);
    const path = props.path;
    const renderComponent = componentPicker(path, stateAndMethods)
    return (
        <div style={{ height: '100%' }}>
            {renderComponent}
        </div>
    )
}

export default RenderComponent;