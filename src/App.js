import React, {Component} from 'react';
import Login from './js/Login.js';
import Home from './principal/Home.js';
import SignUp from "./js/SignUp.js";
import Forgot from "./js/Forgot.js";
import ResetPassword from "./js/ResetPassoword.js";
import {defaultUsers, paths} from './js/Helper.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
    //props is short of properties
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            users: defaultUsers
        };
        console.log("App constructor");
    }

    addUser = (user) => {
        let newUsers = this.state.users;
        newUsers.push(user);
        this.setState({
                users: newUsers
            }
        );

        console.log("added Users");
        console.log(this.state.users);
    };

    setUser = (user) => {
        this.setState({
            user: user
        });
    };

    render() {
        return (

            <Router>
                <Route exact path="/"
                       render={(props) => <Login {...props} users={this.state.users} setUser={this.setUser} user={this.state.user}/>}/>
                <Route exact path="/signup"
                       render={(props) => <SignUp {...props}  setUser={this.setUser} users={this.state.users} addUser={this.addUser}/>}/>
                <Route path="/home" render={(props) => <Home {...props} user={this.state.user} path={paths.HOME} />}/>
                <Route path="/films" render={(props) => <Home {...props} user={this.state.user} path={paths.FILMS} />}/>
                <Route path="/people" render={(props) => <Home {...props} user={this.state.user} path={paths.PEOPLE} />}/>
                <Route path="/planets" render={(props) => <Home {...props} user={this.state.user} path={paths.PLANETS} />}/>
                <Route path="/species" render={(props) => <Home {...props} user={this.state.user} path={paths.SPECIES} />}/>
                <Route path="/starships" render={(props) => <Home {...props} user={this.state.user} path={paths.STARSHIPS} />}/>
                <Route path="/vehicles" render={(props) => <Home {...props} user={this.state.user} path={paths.VEHICLES} />}/>

                <Route path="/forgot" render={(props) => <Forgot {...props} />}/>
                <Route path="/reset" render={(props) => <ResetPassword {...props} />}/>
            </Router>
        )
    }
}


export default App;
