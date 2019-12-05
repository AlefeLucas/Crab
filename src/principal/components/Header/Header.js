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
        <img src={require('./../../images/planeta.png')} alt="Imagem de cabecalho do tema" />
        <p>Planetas</p>
      </header>
    )
  }
}

export default Header
