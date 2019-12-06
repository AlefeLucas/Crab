import React, {Component} from 'react'
import './Header.css';
import {paths} from "../../../js/Helper";

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
        let file = "planeta.png";
        switch (this.props.path) {
            case paths.SPECIES:
                file = "species.jpeg";
                break;
            case paths.STARSHIPS:
                file = "starships.jpeg";
                break;
            case paths.PEOPLE:
                file = "people.jpeg";
                break;
            case paths.PLANETS:
                file = "planeta.png";
                break;
            case paths.VEHICLES:
                file = "vehicles.jpeg";
                break;
            case paths.FILMS:
                file = "films.jpeg";
                break;
            case paths.HOME:
                file = "planeta.png";

        }


        return (
            <header className="header" ref={header => {
                this.header = header;
            }}>
                <img src={require('./../../images/' + file)} alt="Header according to category."/>
                <p>{this.props.path}</p>
            </header>
        )
    }
}

export default Header
