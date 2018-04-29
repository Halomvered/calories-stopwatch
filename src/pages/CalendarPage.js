import React from 'react';
import { SingleDatePicker, } from 'react-dates';
import { Segment, Button } from 'semantic-ui-react';
import moment from 'moment';
import PastActivitesList from '../components/PastActivitesList';
import Summary from '../components/Summary';
import totalCalories from '../utils/totalCalories'
import { Redirect } from 'react-router-dom';


class CalenderPage extends React.Component {
    state = {
        activityCreatedAt: moment(),
        focused: false
    }

    onDateChange = (activityCreatedAt ) => this.setState({ activityCreatedAt });
    onFocusChange = ({ focused }) => this.setState({ focused });

    render(){
        const data = {...this.props.props};
        if (data.redirect) {
            return <Redirect push to="/" />;
        }

        const weight = data.state.currentUser.weight;

        const pastActivites = data.state.pastActivites
        .filter((activity) => 
        activity.activityCreatedAt.format('L') === this.state.activityCreatedAt.format('L'));        
        const totalPastCalories = totalCalories(pastActivites, weight);
        
        const allowReuseButton = this.state.activityCreatedAt.format('L') === moment().format('L');
        return (
        <div>
            <SingleDatePicker 
            block 
            date={this.state.activityCreatedAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1} 
            isOutsideRange={() => false}
            />
            <Segment 
            inverted
            textAlign='left' 
            style={{ height: '33vh', overflowX : 'scroll' }}>
                        <PastActivitesList
                        state={data.state}
                        pastActivites={pastActivites}
                        createdAtFilter={this.state.activityCreatedAt}
                        isFromCalendar={true}
                        />
            </Segment>
            <Segment style={{ backgroundColor: '#333' }} basic>
            {
                pastActivites &&
                <Button fluid
                disabled={allowReuseButton}
                data-createdat={this.state.activityCreatedAt.format('L')}
                onClick={data.onResumeDay}
                >
                Re-use activities
                </Button>
            }
            </Segment>
            <Summary
            renderedFromCalender={true}
            totalCalories={totalPastCalories}
            isFromCalendar={true}
            />
        </div>
    )
}
}

export default CalenderPage;