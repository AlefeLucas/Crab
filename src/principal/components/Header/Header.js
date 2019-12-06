import React, {Component} from 'react'
import './Header.css';

export class Header extends Component {

    constructor(props) {
        super(props);

        console.log('Header constructor');
    }

    collapse = (e) => {
        if (e) {
            this.header.style.marginLeft = "325px";
        } else {
            this.header.style.marginLeft = "0px";
        }
    };

    changeStyle = (e) => {
        if (e === "Jedi") {
            console.log("header 0");
        } else if (e === "Sith") {
            console.log("header 1");
        } else {
            console.log("header 2");
        }
    };

    render() {


        return (
            <header className="header" ref={header => {
                this.header = header;
            }}>
                <img src={require('./../../images/planeta.png')} alt="Header according to category."/>
                <p>{this.props.path}</p>
            </header>
        )
    }
}

export default Header
