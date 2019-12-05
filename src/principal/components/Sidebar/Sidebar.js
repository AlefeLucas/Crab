import React, { Component } from 'react'
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
        profile: this.profile
    };
  }

  collapse = (isInDesktop) => {
    if (isInDesktop) {
      this.props.collapse(this.state.collapsed);
      if (this.state.collapsed) {
        this.sidebar.style.width = "325px";
        this.floatCollapseDiv.style.marginLeft = "305px";
        this.floatCollapseDiv.children[0].src = require("./../../images/icon-material-keyboard-arrow-left.png");
        this.floatCollapseDiv.children[0].alt = "Imagem de seta para a esquerda"
      } else {
        this.sidebar.style.width = "0px";
        this.floatCollapseDiv.style.marginLeft = "0px";
        this.floatCollapseDiv.children[0].src = require("./../../images/icon-material-keyboard-arrow-right.png");
        this.floatCollapseDiv.children[0].alt = "Imagem de seta para a direita"
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
  }

  render() {
    return (
      <aside className="sidebar" ref={aside => {this.sidebar = aside;}}>
        <div className="float-collapse"
            ref={div => {this.floatCollapseDiv = div;}}
            onClick={this.collapse.bind(true)}>
          <img src={require("./../../images/icon-material-keyboard-arrow-left.png")}
              alt="Imagem de seta para a esquerda"
              className="float-collapse-image"/>
        </div>
        <div className="sidebar-content">
          <Profile user={this.props.user}
              ref={profile => {this.profile = profile;}}
              collapse={this.collapse.bind()}/>
          <div className="links-section">
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
                alt="Imagem da facção do usuário"/>
          </div>
        </div>        
        <Modal user={this.props.user} sidebar={this} />
      </aside>
    )
  }
}

export default Sidebar
