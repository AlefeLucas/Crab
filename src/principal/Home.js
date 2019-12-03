import React, {Component} from 'react'
import Sidebar from '../principal/components/Sidebar/Sidebar.js';
import Header from '../principal/components/Header/Header.js';
import Content from '../principal/components/Content/Content.js';
import Modal from '../principal/components/Sidebar/Modal/Modal.js';
import '../principal/App.css';

export class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user
        };
        console.log("home");
        console.log(this.props);

    }

    render() {


        return (
            <div className="home">
                <Sidebar user={this.state.user}/>
                <Header/>
                <Content/>
                <Modal/>
            </div>
        );
    }
}

export default Home;
