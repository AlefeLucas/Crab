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

        this.state = {
            user: null
        };
    }

    logUser = (user) => {
        this.setState({
            user: user
        });
        console.log(user);
    };

    render() {
        return (
            <Router >
                <Route exact path="/"  render={(props) => <Login {...props} logUser={this.logUser}/>} />
                <Route exact path="/signup" render={(props) => <SignUp {...props} />} />
                <Route exact path="/home" render={(props) => <Home {...props} user={this.state.user}  />} />
                <Route exact path="/forgot" render={(props) => <Forgot {...props} />} />
                <Route exact path="/reset" render={(props) => <ResetPassword {...props} />} />
            </Router>
        )
    }
}


export default App;
