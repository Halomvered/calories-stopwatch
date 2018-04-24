import React from 'react';
import { Form, Divider, Segment } from 'semantic-ui-react';

const options = [
    { key: 'm', text: 'Male', value: 'male', name: 'sex'},
    { key: 'f', text: 'Female', value: 'female', name: 'sex'},
  ];

const ProfilePage = (props) => {
    const data = {...props.props};       
    const currentUser = data.state.currentUser;
    return (
        <Segment textAlign='left' style={{ border: '1px ridge #333', height: '54vh' }}>
            <Form unstackable>
                <Form.Group>
                    <Form.Input width={8} label='First name' placeholder='First name'
                    name='firstName' 
                    value={currentUser.firstName}
                    onChange={data.handleChange}
                    />
                    <Form.Input width={8} label='Last name' placeholder='Last name'
                    name='lastName' 
                    value={currentUser.lastName}
                    onChange={data.handleChange}
                    />
                </Form.Group>
                <Divider />
                <Form.Group widths='equal'>
                    <Form.Select width={8} options={options} label='Gender'
                    name='sex' 
                    value={currentUser.sex}
                    onChange={data.handleChange}
                    />
                    <Form.Input  width={4} type='number' label='Age' placeholder='Age'
                    name='age' 
                    value={currentUser.age}
                    onChange={data.handleChange}
                    />
                </Form.Group>
                <Divider />
                <Form.Group>
                    <Form.Input width={8} type='number' label='Height' placeholder='Height (in cm)'
                    name='height' 
                    value={currentUser.height}
                    onChange={data.handleChange}
                    />
                    <Form.Input width={8} type='number' label='Weight' placeholder='Weight (in kg)'
                    name='weight' 
                    value={currentUser.weight}
                    onChange={data.handleChange}
                    />
                </Form.Group>
            </Form>
        </Segment>
    )
}

export default ProfilePage;