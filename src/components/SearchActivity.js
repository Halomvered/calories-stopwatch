import React from 'react';
import { Form } from 'semantic-ui-react';

const SearchActivity = (props) => {
    return (
        <Form>
            <Form.Field>
                <label>Search Activity</label>
                <input  
                search={props.search}
                onChange={props.handleChange}
                />
            </Form.Field>
        </Form>
    )
}

export default SearchActivity;