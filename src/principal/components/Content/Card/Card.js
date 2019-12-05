import React, { Component } from 'react'
import './Card.css'

export class Card extends Component {

    constructor(props) {
        super(props);

        console.log('Card constructor');
    }


  render() {
    return (
      <div className="card" >
        <p className="card-title">{this.props.title}</p>
        <p className="card-text">{this.props.text}</p>
      </div>
    )
  }
}

export default Card
