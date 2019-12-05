import React, {Component} from 'react'
import Profile from './Profile/Profile.js';
import ListItem from './ListItem/ListItem.js';
import Modal from './Modal/Modal.js';
import './Sidebar.css';

export class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            collapsed: false,
            profile: null
        };

        console.log("Sidebar constructor");
        console.log(this.props);
    }

    collapse = (isInDesktop) => {
        if (isInDesktop) {
            this.props.collapse(this.state.collapsed);
            if (this.state.collapsed) {
                this.sidebar.style.width = "325px";
                this.floatCollapseDiv.style.marginLeft = "305px";
                this.floatCollapseDiv.children[0].src = require("./../../images/icon-material-keyboard-arrow-left.png");
                this.floatCollapseDiv.children[0].alt = "Left arrow"
            } else {
                this.sidebar.style.width = "0px";
                this.floatCollapseDiv.style.marginLeft = "0px";
                this.floatCollapseDiv.children[0].src = require("./../../images/icon-material-keyboard-arrow-right.png");
                this.floatCollapseDiv.children[0].alt = "Right arrow"
            }
        } else {
            if (this.state.collapsed) {
                this.sidebar.style.height = "100%";
            } else {
                this.sidebar.style.height = "79px";
            }
        }
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <aside className="sidebar" ref={aside => {
                this.sidebar = aside;
            }}>
                <div className="float-collapse"
                     ref={div => {
                         this.floatCollapseDiv = div;
                     }}
                     onClick={this.collapse.bind(true)}>
                    <img src={require("./../../images/icon-material-keyboard-arrow-left.png")}
                         alt="Left arrow"
                         className="float-collapse-image"/>
                </div>
                <div className="sidebar-content">
                    <Profile user={this.props.user}
                             ref={profile => {
                                 this.profile = profile;
                             }}
                             collapse={this.collapse.bind()}/>
                    <div className="links-section">
                        <ul className="links-list">
                            <ListItem title="Home" link="#"
                                      imageSrc={require("./../../images/icon-awesome-home.png")}
                                      imageAlt="Home icon"/>
                            <ListItem title="Films" link="#"
                                      imageSrc={require("./../../images/icon-awesome-film.png")}
                                      imageAlt="Films icon"/>
                            <ListItem title="People" link="#"
                                      imageSrc={require("./../../images/iconfinder_darth_vader_216968.png")}
                                      imageAlt="People icon"/>
                            <ListItem title="Planets" link="#"
                                      imageSrc={require("./../../images/caminho-34.png")}
                                      imageAlt="Planets icon"/>
                            <ListItem title="Species" link="#"
                                      imageSrc={require("./../../images/uniao-1.png")}
                                      imageAlt="Species icon"/>
                            <ListItem title="Starships" link="#"
                                      imageSrc={require("./../../images/uniao-2.png")}
                                      imageAlt="Starships icon"/>
                            <ListItem title="Vehicles" link="#"
                                      imageSrc={require("./../../images/icon-awesome-space-shuttle.png")}
                                      imageAlt="Vehicles icon"/>
                        </ul>
                    </div>
                    <div className="faction-section">
                        <img src={require("./../../images/icon-awesome-jedi-order.png")}
                             alt="User's faction icon"/>
                    </div>
                </div>
                <Modal user={this.props.user} sidebar={this}/>
            </aside>
        )
    }
}

export default Sidebar
