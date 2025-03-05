import React from "react";
import { FaCircle } from "react-icons/fa6";

function Patient(data) {
	const statuses = {
		stats: {
			a: "Discharged",
			b: "In recovery",
			c: "Life support",
		},
	};

	return (
		<div className="patient" key={data.patient.idNum}>
			<p>{data.patient.name}</p>
			<p>{data.patient.idNum}</p>
			<p>{data.patient.caretaker}</p>
			<div>
				<FaCircle size={12} color={data.patient.status.color} />
				<p>{data.patient.status.condition}</p>
			</div>
		</div>
	);
}

export default Patient;
