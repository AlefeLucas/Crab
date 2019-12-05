import React, {Component} from 'react'
import Sidebar from './components/Sidebar/Sidebar.js';
import Header from './components/Header/Header.js';
import Content from './components/Content/Content.js';
import './App.css';

export class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user
        };
    }

    collapse = (e) => {
        this.header.collapse(e);
        this.content.collapse(e);
    };

    changeStyle = (e) => {
        if (e === "Jedi") {
            console.log("home 0");
        } else if (e === "Sith") {
            console.log("home 1");
        } else {
            console.log("home 2");
        }
        this.header.changeStyle(e);
        this.content.changeStyle(e);
    }

    render() {
        return (
            <div className="home">
                <Sidebar user={this.state.user}
                        ref={sidebar => {this.sidebar = sidebar;}}
                        collapse={this.collapse.bind()}
                        changeStyle={this.changeStyle.bind()}/>
                <Header ref={header => {this.header = header;}}/>
                <Content ref={content => {this.content = content;}}/>
            </div>
        );
    }
}

export default Home;