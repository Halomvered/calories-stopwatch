export default function componentPicker(path, props) {
    let chosenComponent;

    switch (path) {
        case '/':
            chosenComponent=  <StopwatchPage props={props} />;
            break;
        case '/new':
            chosenComponent=  <NewTimerPage props={props} />;
            break;
        case '/calender':
            chosenComponent=  <CalenderPage props={props} />;
            break;
        case '/profile':
            chosenComponent=  <ProfilePage props={props} />;
            break;
    
        default:
            break;
    }
    return chosenComponent;
}

