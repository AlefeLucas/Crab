import React, {Component} from 'react'
import Sidebar from '../principal/components/Sidebar/Sidebar.js';
import Header from '../principal/components/Header/Header.js';
import Content from '../principal/components/Content/Content.js';
import '../principal/App.css';

export class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user
        };
        console.log("Home constructor");
    }

    collapse(collapsed) {

    }

    render() {


        return (
            <div className="home">
                <Sidebar user={this.state.user} collapse={this.collapse}/>
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default Home;
