import React from 'react'
import { Router, Switch, Route } from "react-router-dom";

import HomePage from './HomePage';
import Login from './Login';
import Updateprofile from './Updateprofile';
import history from './history';


function Routes() {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/Login" component={Login} />
                    <Route path="/Updateprofile" component={Updateprofile} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
