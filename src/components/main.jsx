import React from "react";
import Supplies from "./main/supplies";
import Tasks from "./main/tasks";
import Patients from "./main/patients";
import "./main.css";

function Main() {
	return (
		<main>
			<Tasks />
			<Patients />
			<Supplies />
		</main>
	);
}

export default Main;
