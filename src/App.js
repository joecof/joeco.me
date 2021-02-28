import React from 'react';
import Container from './Container'
import Footer from './Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Container/>
        <div className='push'></div>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
