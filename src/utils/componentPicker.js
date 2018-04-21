import React from 'react';
import StopwatchPage from '../pages/StopwatchPage';
import NewTimerPage from '../pages/NewTimerPage';
import CalendarPage from '../pages/CalendarPage';
import ProfilePage from '../pages/ProfilePage';

export default function componentPicker(path, props) {
    let chosenComponent;

    switch (path) {
        case '/':
            chosenComponent=  <StopwatchPage props={props} />;
            break;
        case '/new':
            chosenComponent=  <NewTimerPage props={props} />;
            break;
        case '/calendar':
            chosenComponent=  <CalendarPage props={props} />;
            break;
        case '/profile':
            chosenComponent=  <ProfilePage props={props} />;
            break;
    
        default:
            break;
    }
    return chosenComponent;
}

