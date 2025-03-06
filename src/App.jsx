
import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Main from './components/main';

import VoiceToText from './voice_text/VoiceToText';
// import { patientsData, staffData } from './components/data/dataset';

function App() {

	return (
		<div className="App">
			<Navbar></Navbar>
			<Sidebar />
			<Main></Main>
		</div>
	);
=======
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Sidebar/>
        <main>
          <Routes>
              <Route 
                path="/" 
                element={<Main/>} 
              />
              <Route path="/voice" element={<VoiceToText />} />
              
            </Routes>
          </main>        
      </div>
      {/* <div>
        <h1>Voice to Text App</h1>
        <VoiceToText />

        <h1>Hospital Data</h1>
        <h2>Patients</h2>
        <ul>
          {patientsData?.map(patient => (
          <li key={patient.Id}>{patient["Name: First"]} {patient["Name: Last"]}</li>
        ))}
        </ul>
        <h2>Staff</h2>
        <ul>
          {staffData?.map(staff => (
            <li key={staff.Id}>{staff["Name: First"]} {staff["Name: Last"]} - {staff["Contacts: Status"]}</li>
          ))}
        </ul>
      </div> */}
   </Router>     
  );
}

export default App;
