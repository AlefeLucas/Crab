import React, {Component} from 'react'

import './Card/Card.css'
import './Content.css'
import axios from 'axios'
import {Link} from "react-router-dom";
import {paths} from "../../../js/Helper";
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'

import jediOrSith from '../../images/jediorSith.jpg';
import vocemanja from '../../images/vocemanja_Quiz.jpg';

import quepersonagem from '../../images/Quepersonagem_Quiz.jpg';







//import YouTube from 'react-native-youtube';


export class Content extends Component {

    constructor(props) {
        super(props);

        this.state = {
            boxShadow: "",
            films: [],
            people: [],
            planets: [],
            species: [],
            starships: [],
            vehicles: [],
            search: ""
        };
        this.getFilms = this.getFilms.bind(this);
        this.getPeople = this.getPeople.bind(this);
        this.getShips = this.getShips.bind(this);
        this.getPlanets = this.getPlanets.bind(this);
        this.getSpecies = this.getSpecies.bind(this);
        this.getVehicles = this.getVehicles.bind(this);
        console.log('Content constructor');
    }

    getVehicles(url) {
        axios.get(url)
            .then((response) => {
                console.log(response.data.results);
                this.setState({vehicles: [...this.state.vehicles, ...response.data.results]});
                if (response.data.next != null)
                    this.getVehicles(response.data.next);
            })
    }

    getSpecies(url) {
        axios.get(url)
            .then((response) => {
                console.log(response.data.results);
                this.setState({species: [...this.state.species, ...response.data.results]});
                if (response.data.next != null)
                    this.getSpecies(response.data.next);
            })
    }

    getShips(url) {
        axios.get(url)
            .then((response) => {
                console.log(response.data.results)
                this.setState({starships: [...this.state.starships, ...response.data.results]});
                if (response.data.next != null)
                    this.getShips(response.data.next);
            })
    }

    getPlanets(url) {
        axios.get(url)
            .then((response) => {
                console.log(response.data.results);
                this.setState({planets: [...this.state.planets, ...response.data.results]});
                if (response.data.next != null)
                    this.getPlanets(response.data.next);
            })
    }

    getPeople(url) {
        axios.get(url)
            .then((response) => {
                console.log(response.data.results);
                this.setState({people: [...this.state.people, ...response.data.results]});
                if (response.data.next != null)
                    this.getPeople(response.data.next);
            })
    }

    getFilms(url) {
        axios.get(url)
            .then((response) => {
                console.log("Obtendo filmes");
                console.log(response.data);
                this.setState({films: [...this.state.films, ...response.data.results]});
                if (response.data.next != null)
                    this.getFilms(response.data.next);
            });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(), true);
        switch (this.props.path) {
            case paths.FILMS:
                this.getFilms('https://swapi.co/api/films/?format=json');
                break;
            case paths.PEOPLE:
                this.getPeople('https://swapi.co/api/people/?format=json');
                break;
            case paths.PLANETS:
                this.getPlanets('https://swapi.co/api/planets/?format=json');
                break;
            case paths.SPECIES:
                this.getSpecies('https://swapi.co/api/species/?format=json');
                break;
            case paths.STARSHIPS:
                this.getShips('https://swapi.co/api/starships/?format=json');
                break;
            case paths.VEHICLES:
                this.getVehicles('https://swapi.co/api/vehicles/?format=json');
                break;
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        if (this.search != null) {
            if ((this.search.getBoundingClientRect().top) === 0) {
                this.setState({
                    boxShadow: "box-shadow"
                });
            } else {
                this.setState({
                    boxShadow: ""
                });
            }
        }
    };


    collapse = (e) => {
        if (e) {
            this.content.style.marginLeft = "325px";
        } else {
            this.content.style.marginLeft = "0px";
        }
    };

    changeStyle = (e) => {
        if (e === "Jedi") {
            console.log("content 0");
        } else if (e === "Sith") {
            console.log("content 1");
        } else {
            console.log("content 2");
        }
    };

    onSearchChange(e) {
        this.setState({
            search: e.target.value
        });
    }

    goto(url) {
        console.log("History");
        console.log(this.props.history);
        //this.props.history.push(url);

    }

    render() {
        const {planets} = this.state;
        const planetsList = planets.length ? (
            planets.filter(obj => this.state.search.length === 0 || obj.name.toUpperCase().includes(this.state.search.toUpperCase())).map(planets => {
                return (
                    <div className="planets card" key={planets.url}>
                        <div className="card-content">
                            <Link>
                                <span className="card-title"> {planets.name}</span>
                            </Link>
                            <p><b>Population: </b>{planets.population}</p>
                            <p><b>Diameter: </b> {planets.diameter}</p>
                            <p><b>Climate: </b> {planets.climate}</p>

                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center"/>
        );

        const {species} = this.state;
        const speciesList = species.length ? (
            species.filter(obj => this.state.search.length === 0 || obj.name.toUpperCase().includes(this.state.search.toUpperCase())).map(species => {

                let homeworld = species.homeworld ? species.homeworld.replace('https://swapi.co/api/', '').slice(0, -1) : "";
                let homelink = (homeworld.length > 0 ?
                    <Link onClick={e => this.goto(homeworld)}>{homeworld}</Link> : "No info.");
                return (
                    <div className="species card" key={species.url}>
                        <div className="card-content">
                            <Link>
                                <span className="card-title"> {species.name}</span>
                            </Link>
                            <p><b>Classification: </b>{species.classification}</p>
                            <p><b>Homeworld: </b>{homelink}</p>
                            <p><b>Language: </b> {species.language}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center"/>
        );

        const {vehicles} = this.state;
        const vehiclesList = vehicles.length ? (
            vehicles.filter(obj => this.state.search.length === 0 || obj.name.toUpperCase().includes(this.state.search.toUpperCase())).map(vehicles => {
                return (

                    <div className="vehicles card" key={vehicles.url}>
                        <div className="card-content">

                            <span className="card-title"> {vehicles.name}</span>

                            <p><b>Model: </b>{vehicles.model}</p>
                            <p><b>Manufacturer:</b> {vehicles.manufacturer}</p>
                            <p><b>Cargo capacity: </b> {vehicles.cargo_capacity}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center"/>
        );

        const {films} = this.state;
        const filmsList = films.length ? (
            films.filter(obj => this.state.search.length === 0 || obj.title.toUpperCase().includes(this.state.search.toUpperCase())).map(films => {
                return (
                    <div className="films card" key={films.episode_id}>
                        <div className="card-content">
                            <span className="card-title"> {films.title}</span>
                            <p><b>Episode: </b>{films.episode_id}</p>
                            <p><b>Director: </b> {films.director}</p>
                            <p><b>Release date: </b> {films.release_date}</p>
                            <p><b>"</b>{films.opening_crawl}<b>"</b></p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center"/>
        );

        const {people} = this.state;
        const peopleList = people.length ? (
            people.filter(obj => this.state.search.length === 0 || obj.name.toUpperCase().includes(this.state.search.toUpperCase())).map(people => {

                let homeworld = people.homeworld ? people.homeworld.replace('https://swapi.co/api/', '').slice(0, -1) : "";
                let homelink = (homeworld.length > 0 ?
                    <Link onClick={e => this.goto(homeworld)}>{homeworld}</Link> : "No info.");
                let species = people.species.length > 0 ? people.species.map(value => value.replace('https://swapi.co/api/', '').slice(0, -1)) : "";
                let specieslink = (species.length > 0 ? species.map(value => <Link
                    onClick={e => this.goto(value)}>{value}</Link>) : "No info.");
                return (
                    <div className="people card" key={people.url}>
                        <div className="card-content">

                            <span className="card-title"> {people.name}</span>

                            <p><b>Birth year: </b>{people.birth_year}</p>
                            <p><b>Homeworld: </b> {homelink}</p>
                            <p><b>Specie: </b> {specieslink}</p>
                            <p><b>Gender: </b> {people.gender}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center"/>
        );

        const {starships} = this.state;
        const shipsList = starships.length ? (
            starships.filter(obj => this.state.search.length === 0 || obj.name.toUpperCase().includes(this.state.search.toUpperCase())).map(starships => {
                return (
                    <div className="Ships card" key={starships.url}>
                        <div className="card-content">
                            <span className="card-title"> {starships.name}</span>
                            <p><b>Model:</b>{starships.model}</p>
                            <p><b>Manufacturer:</b> {starships.manufacturer}</p>
                            <p><b>Cargo capacity: </b> {starships.cargo_capacity}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center"/>
        );

        let shownList = [];

        switch (this.props.path) {
            case paths.HOME:
                shownList = <div className="center"/>;
                break;
            case paths.FILMS:
                shownList = filmsList;
                break;
            case paths.PLANETS:
                shownList = planetsList;
                break;
            case paths.VEHICLES:
                shownList = vehiclesList;
                break;
            case paths.PEOPLE:
                shownList = peopleList;
                break;
            case paths.STARSHIPS:
                shownList = shipsList;
                break;
            case paths.SPECIES:
                shownList = speciesList;
                break;
        }


        return (
            <div className="content" ref={content => {
                this.content = content;
            }}>
                {this.props.path !== paths.HOME ?
                    <div className={"search " + this.state.boxShadow} ref={search => {
                        this.search = search;
                    }}>
                        <input onChange={this.onSearchChange.bind(this)} value={this.state.search} type="text"
                               placeholder="Search"/>
                        <img src={require("./../../images/icon-map-search.png")} alt="Search icon"/>
                    </div>
                    :
                    <div style={{display: "inline-flex", flexWrap: "wrap"}}>


                        <Card style={{margin: 20, width: 300}}>
                            <Card.Img variant="top" src={jediOrSith} style={{width: "100%", height: "auto"}}/>
                            <Card.Body style={{ background: jediOrSith}}>
                                <Card.Title>Quiz</Card.Title>
                                <Card.Text>
                                    Are you a Sith or a Jedi?
                                </Card.Text>
                                <a href="https://pt.quizur.com/quiz/voce-e-mais-sith-ou-jedi-ba" class="btn btn-info"
                                   role="button">See More!</a>

                            </Card.Body>
                        </Card>
                        <Card  style={{margin: 20, width: 300}}>
                            <Card.Img variant="top" src={vocemanja} style={{width: "100%", height: "auto"}}/>
                            <Card.Body  >
                                <Card.Title>Quiz</Card.Title>
                                <Card.Text>
                                    How much do you know about Star Wars?
                                </Card.Text>
                                <a href="https://www.buzzfeed.com/br/raphaelevangelista/quanto-voce-manja-de-star-war"
                                   class="btn btn-info" role="button">See More!</a>
                            </Card.Body>
                        </Card>

                        <Card style={{margin: 20, width: 300}}>
                            <Card.Img variant="top" src={quepersonagem} style={{width: "100%", height: "auto"}}/>
                            <Card.Body>
                                <Card.Title>Quiz </Card.Title>
                                <Card.Text>
                                    Which Star Wars Character Are You?
                                </Card.Text>
                                <a href="https://pt.quizur.com/quiz/quem-voce-seria-em-star-wars-aT"
                                   class="btn btn-info" role="button">See More!</a>
                            </Card.Body>
                        </Card>
                    </div>
                }
                <div className="all-cards">
                    {shownList}
                </div>
            </div>
        )
    }
}

export default Content
