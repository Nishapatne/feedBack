import React from 'react'
import {Button} from 'react-bootstrap'
import history from './history';


function Login() {
    return (
        <div>
            <h1>Hello login</h1>
            <Button onClick={() => history.push('/')}>Back to Home</Button>
        </div>
    )
}

export default Login;
