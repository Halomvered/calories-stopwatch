import React from 'react';

const Summary = (props) => {
    return (
        <h1 className='summary'>
            Total Calories Burned{ !props.isFromCalendar && ' Today' }: {props.totalCalories}
        </h1>
    )
}

export default Summary;