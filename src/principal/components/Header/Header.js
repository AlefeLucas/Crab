import React, { Component } from 'react'
import './Header.css';

export class Header extends Component {

  collapse = (e) => {
    if (e) {
      this.header.style.marginLeft = "325px";
    } else {
      this.header.style.marginLeft = "0px";
    }
  };

  constructor(props) {
    super(props);

    console.log('Header constructor');
  }

  render() {
    return (
      <header className="header" ref={header => {this.header = header;}}>
        <img src={require('./../../images/planeta.png')} alt="Header according to category." />
        <p>Planets</p>
      </header>
    )
  }
}

export default Header
