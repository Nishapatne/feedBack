import React from 'react'
import {Button} from 'react-bootstrap';
import history from './history';


function Create_Profile() {
    return (
        <div>
            <h1>Hello update</h1>
            <Button onClick={() => history.push('/')}>Back to Home</Button>
        </div>
    )
}

export default Create_Profile;
