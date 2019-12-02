import React from 'react';
import Sidebar from '../principal/components/Sidebar/Sidebar.js';
import Header from '../principal/components/Header/Header.js';
import Content from '../principal/components/Content/Content.js';
import Modal from '../principal/components/Sidebar/Modal/Modal.js';
import '../principal/App.css';

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Header />
      <Content />
      <Modal />
    </div>
  );
}

export default Home;
