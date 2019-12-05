import React, { Component } from 'react'
import Card from './Card/Card.js'
import './Content.css'

export class Content extends Component {

  constructor(props) {
    super(props);

    this.state = {
      boxShadow: ""
    };

    console.log('Content constructor');
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(), true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if ((this.search.getBoundingClientRect().top) === 0) {
      this.setState({
        boxShadow: "box-shadow"
      });
    } else {
      this.setState({
        boxShadow: ""
      });
    }
  };
  
  collapse = (e) => {
    if (e) {
      this.content.style.marginLeft = "325px";
    } else {
      this.content.style.marginLeft = "0px";
    }
  };

  changeStyle = (e) => {
    if (e === "Jedi") {
      console.log("content 0");
    } else if (e === "Sith") {
      console.log("content 1");
    } else {
      console.log("content 2");
    }
  }
  
  render() {
    return (
      <div className="content" ref={content => {this.content = content;}}>
        <div className={"search "+this.state.boxShadow} ref={search => {this.search = search;}}>
          <input type="text" placeholder="Search" />
          <img src={require("./../../images/icon-map-search.png")} alt="Search icon" />
        </div>
        <div className="all-cards">
          <Card title="ALDERAAN"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit impedit expedita beatae velit asperiores sint quo fugit unde nesciunt ex sunt nisi vel, consequuntur porro quisquam deleniti molestiae magnam. Voluptates, perferendis nesciunt officiis animi repudiandae et! Illum quos a distinctio exercitationem voluptatibus dicta consectetur? Unde, fugit dignissimos quis animi eveniet sed harum quasi libero, possimus modi perferendis. Animi, illum."/>
          <Card title="ALDERAAN" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit impedit expedita beatae velit asperiores sint quo fugit unde nesciunt ex sunt nisi vel, consequuntur porro quisquam deleniti molestiae magnam. Voluptates, perferendis nesciunt officiis animi repudiandae et! Illum quos a distinctio exercitationem voluptatibus dicta consectetur? Unde, fugit dignissimos quis animi eveniet sed harum quasi libero, possimus modi perferendis. Animi, illum." />
          <Card title="ALDERAAN" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit impedit expedita beatae velit asperiores sint quo fugit unde nesciunt ex sunt nisi vel, consequuntur porro quisquam deleniti molestiae magnam. Voluptates, perferendis nesciunt officiis animi repudiandae et! Illum quos a distinctio exercitationem voluptatibus dicta consectetur? Unde, fugit dignissimos quis animi eveniet sed harum quasi libero, possimus modi perferendis. Animi, illum." />
        </div>
      </div>
    )
  }
}

export default Content
