import React from 'react';
import StopwatchPage from '../pages/StopwatchPage';
import NewTimerPage from '../pages/NewTimerPage';
import CalendarPage from '../pages/CalendarPage';
import ProfilePage from '../pages/ProfilePage';

export default function componentPicker(path, stateAndMethods) {
    let chosenComponent;

    switch (path) {
        case '/':
            chosenComponent=  <StopwatchPage props={stateAndMethods} />;
            break;
        case '/new':
            chosenComponent=  <NewTimerPage props={stateAndMethods} />;
            break;
        case '/calendar':
            chosenComponent=  <CalendarPage props={stateAndMethods} />;
            break;
        case '/profile':
            chosenComponent=  <ProfilePage props={stateAndMethods} />;
            break;
    
        default:
            break;
    }
    return chosenComponent;
}

