import React, { Component } from 'react'
import Profile from './Profile/Profile.js';
import ListItem from './ListItem/ListItem.js';
import './Sidebar.css';

export class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar" id="sidebar">
        <Profile />
        <div className="links-section">
          <div className="float-collapse" id="float-collapse">
            <img src={require("./../../images/icon-material-keyboard-arrow-left.png")}
                alt="Imagem de seta para a esquerda"
                className="float-collapse-image"
                id="float-collapse-image"/>
          </div>
          <ul className="links-list">
            <ListItem title="Home" link="#"
                    imageSrc={require("./../../images/icon-awesome-home.png")}
                    imageAlt="Imagem do ícone da home"/>
            <ListItem title="Filmes" link="#"
                    imageSrc={require("./../../images/icon-awesome-film.png")}
                    imageAlt="Imagem do ícone dos filmes"/>
            <ListItem title="Personagens" link="#"
                    imageSrc={require("./../../images/iconfinder_darth_vader_216968.png")}
                    imageAlt="Imagem do ícone dos personagens"/>
            <ListItem title="Planetas" link="#"
                    imageSrc={require("./../../images/caminho-34.png")}
                    imageAlt="Imagem do ícone dos planetas"/>
            <ListItem title="Raças" link="#"
                    imageSrc={require("./../../images/uniao-1.png")}
                    imageAlt="Imagem do ícone das raças"/>
            <ListItem title="Naves" link="#"
                    imageSrc={require("./../../images/uniao-2.png")}
                    imageAlt="Imagem do ícone das naves"/>
            <ListItem title="Veículos" link="#"
                    imageSrc={require("./../../images/icon-awesome-space-shuttle.png")}
                    imageAlt="Imagem do ícone dos veículos"/>            
          </ul>
        </div>
        <div className="faction-section">
          <img src={require("./../../images/icon-awesome-jedi-order.png")}
              alt="Imagem da facção do usuário"
              className="vertical-middle" />
        </div>
      </aside>
    )
  }
}

export default Sidebar
