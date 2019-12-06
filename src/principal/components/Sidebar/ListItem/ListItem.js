import React, {Component} from 'react'
import './ListItem.css'

export class ListItem extends Component {
    constructor(props) {
        super(props);

        console.log('ListItem constructor')
    }

    onClick(e) {
        this.props.history.push(this.props.link);
    }

    render() {
        return (
            <li>
                <a onClick={this.onClick.bind(this)}>
                    <img src={this.props.imageSrc} alt={this.props.imageAlt} className={this.props.imageClass}/>
                    <span className={this.props.spanClass}>{this.props.title}</span>
                </a>
            </li>
        )
    }
}

export default ListItem
