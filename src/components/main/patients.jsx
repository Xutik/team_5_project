import React from "react";
import "./patients.css";
import { patients } from "../data/patients";
import Patient from "./patient";

function Patients() {
	return (
		<div className="patients">
			<h3 className="patientTitle">Patients</h3>
			<div className="patientTable">
			{patients.map((data) => (
				<Patient patient={data} key={data.idNum} />
			))}
			</div>
		</div>
	);
}

export default Patients;
