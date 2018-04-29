import React from 'react';
import componentPicker from '../utils/componentPicker';
import stateMethodBundler from '../utils/stateMethodBundler';

// eslint-disable-next-line
import StopwatchPage from '../pages/StopwatchPage';
// eslint-disable-next-line
import NewTimerPage from '../pages/NewTimerPage';
// eslint-disable-next-line
import CalendarPage from '../pages/CalendarPage';
// eslint-disable-next-line
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