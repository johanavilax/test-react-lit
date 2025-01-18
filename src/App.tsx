import React from 'react';
import logo from './logo.svg';
import './App.css';
import './my-lit-component';
function App() {
  return (
    <div className="App">
      <div style={{width:"100px",height:"100px"}}></div>
       <my-lit-component></my-lit-component>
    </div>
  );
}

export default App;
