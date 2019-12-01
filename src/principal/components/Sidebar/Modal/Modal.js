import React, { Component } from 'react'
import './../Profile/Profile.css'
import './Modal.css'

export class Modal extends Component {
  render() {
    return (
      <div className="modal" id="profile-modal">
        <img src={require("./../../../images/profile.jpg")} alt="Imagem de perfil" className="img-profile" />
        <span className="modal-float">
          <img src={require("./../../../images/icon-awesome-camera.png")} alt="Imagem de uma camera" className="pointer modal-float-image" />
        </span>
        <p>Julius Caesar</p>
        <button className="modal-button">Alterar Senha</button>
        <select className="modal-button">
          <option defaultValue className="modal-button">Alterar Facção</option>
          <option name="faccao-jedi" className="modal-button">Jedi</option>
          <option name="faccao-sith" className="modal-button">Sith</option>
          <option name="faccao-cacadores" className="modal-button">Caçador de Recompensa</option>
        </select>
        <button className="modal-button blue">Sair</button>
      </div>
    )
  }
}

export default Modal
