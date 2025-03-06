import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Main from "./components/main";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Sidebar />
			<Main></Main>
		</div>
	);
}

export default App;

//Testing