import React, {Component} from 'react'
import './Profile.css'

export class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user
        };

        console.log('Profile constructor');
    }
  
    handleClick = (e) => {
        return this.profile.contains(e.target);
    };

    collapse(isInDesktop) {
        this.props.collapse(isInDesktop);
    }

    render() {
        return (
            <div className="profile-section"
                    ref={profile => {this.profile = profile;}}>
                <img src={require("./../../../images/profile.jpg")} alt="Imagem de perfil" className="img-profile"/>
                <p>{this.state.user ? this.state.user.username : "Julius Caesar"}</p>
                <div className="profile-mobile" id="profile-mobile" 
                        onClick={this.collapse.bind(this, false)}>
                    <img src={require("./../../../images/icon-feather-menu.png")} alt="Imagem do menu mobile"/> MENU
                </div>
            </div>
        )
    }
}

export default Profile
