import React, { Component } from 'react'
import './Card.css'

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <p className="card-title">{this.props.title}</p>
        <p className="card-text">{this.props.text}</p>
      </div>
    )
  }
}

export default Card
