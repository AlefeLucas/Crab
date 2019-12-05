import React, { Component } from 'react'
import './../Profile/Profile.css'
import './Modal.css'

export class Modal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      show: "hide"
    };

    console.log("Modal constructor");
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClick.bind(), true)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClick)
  }

  handleClick = (e) => {
    if (!this.modal.contains(e.target)) {
      if (this.props.sidebar.profile.handleClick(e)) {
        this.setState({
          show: "show"
        });
      } else {
        this.setState({
          show: "hide"
        });
      }
    }
  };

  changeStyle = (e) => {
    let target = e.target.value;
    if (target === "Jedi") {
      console.log("modal 0");
    } else if (target === "Sith") {
      console.log("modal 1");
    } else {
      console.log("modal 2");
    }
    this.props.sidebar.changeStyle(target);
  }

  render() {
    return (
      <div className={"modal "+this.state.show}
          ref={modal => {this.modal = modal;}}>
        <img src={require("./../../../images/profile.jpg")} alt="Imagem de perfil" className="img-profile" />
        <span className="modal-float">
          <img src={require("./../../../images/icon-awesome-camera.png")} alt="Imagem de uma camera" className="pointer modal-float-image" />
        </span>
        <p>{this.state.user ? this.state.user.username : "Julius Caesar"}</p>
        <button className="modal-button">Change Password</button>
        <select className="modal-button"
                onChange={this.changeStyle.bind(this)}>
          <option defaultValue className="modal-button">Change Faction</option>
          <option name="faccao-jedi"
                className="modal-button">Jedi</option>
          <option name="faccao-sith"
                className="modal-button">Sith</option>
          <option name="faccao-cacadores"
                className="modal-button">Bounty Hunter</option>
        </select>
        <button className="modal-button blue">Logout</button>
      </div>
    )
  }
}

export default Modal
