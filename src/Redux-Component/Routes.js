import React from 'react'
import { Router, Switch, Route } from "react-router-dom";

import HomePage from './HomePage';
import Employee_Details from './Employee_Details';
import Create_Profile from './Create_Profile';
import history from './history';


function Routes() {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/Employee_Details" component={Employee_Details} />
                    <Route path="/Create_Profile" component={Create_Profile} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
