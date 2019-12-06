import React, {Component} from 'react'
import './Header.css';
import {paths} from "../../../js/Helper";
import Carousel from "react-bootstrap/Carousel";
import babyyoda from '../../images/babyYoda.jpg';
import leia from '../../images/Leia.jpg';
import ix from '../../images/StarWarsIX.jpg';
//import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

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

        let content = this.props.path !== paths.HOME ?
            <header className="header" ref={header => {
                this.header = header;
            }}>
                <img src={require('./../../images/' + file)} alt="Header according to category."/>
                <p>{this.props.path}</p>
            </header> : <header className="header" ref={header => {
                this.header = header;
            }}><Carousel >

                <Carousel.Item>
                    <img style={{height: 400, width:"100%"}}
                         className="d-block w-100"
                         src={babyyoda}
                         alt="Baby Yoda"
                    />
                    <Carousel.Caption>
                        <h3>Baby Yoda</h3>
                        <p>50-Year-Old Baby Version Of “Yoda” Appeared In ‘The Mandalorian’ Episode</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height: 400, width: "100%"}}
                         className="d-block w-100"
                         src={leia}
                         alt="Leia Organa"
                    />

                    <Carousel.Caption>
                        <h3>Leia Organa</h3>
                        <p>Carrie Fisher is still playing Princess Leia in Star Wars: Episode 9 thanks to unused Force
                            Awakens footage</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height: 400, width:"100%"}}
                         className="d-block w-100"
                         src={ix}
                         alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Star Wars Episode IX</h3>
                        <p>The Rise of Skywalker hits theaters worldwide on Dec. 20, 2019.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel></header>;

        return (<div>
                {content}
            </div>
        )
    }
}

export default Header
