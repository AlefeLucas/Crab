import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.js';
import Header from './components/Header/Header.js';
import Content from './components/Content/Content.js';
import Modal from './components/Sidebar/Modal/Modal.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Content />
      <Modal />
    </div>
  );
}

export default App;
