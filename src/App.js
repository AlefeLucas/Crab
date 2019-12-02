import React, {Component} from 'react';
import Login from './js/Login.js';
import Home from './js/Home.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SignUp from "./js/SignUp";

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
            </Router>
        )
    }
}


export default App;
