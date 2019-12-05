import React, { Component } from 'react'
import './Header.css';

export class Header extends Component {

  collapse = (e) => {
    if (e) {
      this.header.style.marginLeft = "325px";
    } else {
      this.header.style.marginLeft = "0px";
    }
  }

  render() {
    return (
      <header className="header" ref={header => {this.header = header;}}>
        <img src={require('./../../images/planeta.png')} alt="Header image" />
        <p>Planets</p>
      </header>
    )
  }
}

export default Header
