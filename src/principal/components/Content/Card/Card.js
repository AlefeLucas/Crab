import React, { Component } from 'react'
import './Card.css'

export class Card extends Component {
  
  passThroughIt = () => {
    this.props.selectCard(this.props.title);
  }

  render() {
    return (
      <div className="card" onClick={this.passThroughIt}>
        <p className="card-title">{this.props.title}</p>
        <p className="card-text">{this.props.text}</p>
      </div>
    )
  }
}

export default Card
