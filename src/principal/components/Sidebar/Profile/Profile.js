import React, { Component } from 'react'
import './Profile.css'

export class Profile extends Component {
  render() {
    return (
      <div className="profile-section" id="profile-section">
        <img src={require("./../../../images/profile.jpg")} alt="Imagem de perfil" className="img-profile" />
        <p>Julius Caesar</p>
        <span className="profile-mobile" id="profile-mobile">
          <img src={require("./../../../images/icon-feather-menu.png")} alt="Imagem do menu mobile" /> MENU
        </span>
      </div>
    )
  }
}

export default Profile
