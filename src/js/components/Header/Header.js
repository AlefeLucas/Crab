import React, { Component } from 'react'
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <header className="header" id="header">
        <img src={require('./../../images/planeta.png')} alt="Imagem de cabecalho do tema" />
        <p>Planetas</p>
      </header>
    )
  }
}

export default Header
