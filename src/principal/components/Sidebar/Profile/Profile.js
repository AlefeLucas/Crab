import React, {Component} from 'react'
import './Profile.css'

export class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user
        };
        console.log("profile");
        console.log(this.props);

    }

    render() {
        return (
            <div className="profile-section" id="profile-section">
                <img src={require("./../../../images/profile.jpg")} alt="Imagem de perfil" className="img-profile"/>
                <p>{this.state.user ? this.state.user.username : "Julius Caesar"}</p>
                <span className="profile-mobile" id="profile-mobile">
          <img src={require("./../../../images/icon-feather-menu.png")} alt="Imagem do menu mobile"/> MENU
        </span>
            </div>
        )
    }
}

export default Profile
