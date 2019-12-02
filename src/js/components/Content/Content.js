import React, { Component } from 'react'
import Card from './Card/Card.js'
import './Content.css'

export class Content extends Component {
  render() {
    return (
      <div className="content" id="content">
        <div className="search" id="search">
          <input type="text" placeholder="Pesquisar" />
          <img src={require("./../../images/icon-map-search.png")} alt="Lupa" />
        </div>
        <div className="all-cards">
          <Card title="ALDERAAN" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit impedit expedita beatae velit asperiores sint quo fugit unde nesciunt ex sunt nisi vel, consequuntur porro quisquam deleniti molestiae magnam. Voluptates, perferendis nesciunt officiis animi repudiandae et! Illum quos a distinctio exercitationem voluptatibus dicta consectetur? Unde, fugit dignissimos quis animi eveniet sed harum quasi libero, possimus modi perferendis. Animi, illum." />
          <Card title="ALDERAAN" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit impedit expedita beatae velit asperiores sint quo fugit unde nesciunt ex sunt nisi vel, consequuntur porro quisquam deleniti molestiae magnam. Voluptates, perferendis nesciunt officiis animi repudiandae et! Illum quos a distinctio exercitationem voluptatibus dicta consectetur? Unde, fugit dignissimos quis animi eveniet sed harum quasi libero, possimus modi perferendis. Animi, illum." />
          <Card title="ALDERAAN" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit impedit expedita beatae velit asperiores sint quo fugit unde nesciunt ex sunt nisi vel, consequuntur porro quisquam deleniti molestiae magnam. Voluptates, perferendis nesciunt officiis animi repudiandae et! Illum quos a distinctio exercitationem voluptatibus dicta consectetur? Unde, fugit dignissimos quis animi eveniet sed harum quasi libero, possimus modi perferendis. Animi, illum." />
        </div>
      </div>
    )
  }
}

export default Content
