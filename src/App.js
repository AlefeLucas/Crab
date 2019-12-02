import React, {Component} from 'react';
import Login from './js/Login.js';
import Home from './js/Home.js';
import SignUp from "./js/SignUp.js";
import Forgot from "./js/Forgot.js";
import ResetPassword from "./js/ResetPassoword.js";

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
    //props is short of properties
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Route exact path="/" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/forgot" component={Forgot}/>
                <Route exact path="/reset" component={ResetPassword}/>
            </Router>
        )
    }
}


export default App;
