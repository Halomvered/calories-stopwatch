import React from 'react';
import { Redirect } from 'react-router-dom';
import { Segment, Divider } from 'semantic-ui-react';
import SearchActivity from '../components/SearchActivity';
import NewActivityList from '../components/NewActivityList';


class NewTimerPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ search: value})) 
    }

    render() {
        const data = {...this.props.props};
        if (data.redirect) {
            return <Redirect push to="/" />;
        }
        return (
            <Segment textAlign='left' style={{ border: '1px ridge #333', height: '54vh' }}>
                <SearchActivity 
                handleChange={this.handleChange} 
                search={this.state.search}
                />
                <Divider />
                <div style={{width:'100%', height: '75%', overflowX : 'scroll' }}>
                    <NewActivityList 
                    search={this.state.search} 
                    handleChosenActivity={data.handleChosenActivity}
                    />
                </div>
            </Segment>
        )
    }
}

export default NewTimerPage;