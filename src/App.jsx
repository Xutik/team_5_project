import React from 'react';
import './App.css';
import VoiceToText from './voice_text';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sidebar/>

      {/* <h1>Voice to Text App</h1>
      <VoiceToText /> */}
    </div>
  );
}

export default App;
