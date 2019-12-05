import React, { Component } from 'react'
import './ListItem.css'

export class ListItem extends Component {
    constructor(props) {
        super(props);

        console.log('ListItem constructor')
    }

  render() {
    return (
      <li>
        <a href={this.props.link}>
          <img src={this.props.imageSrc} alt={this.props.imageAlt}  className={this.props.imageClass}  />
          <span className={this.props.spanClass} >{this.props.title}</span>
        </a>
      </li>
    )
  }
}

export default ListItem
