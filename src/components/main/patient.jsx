import React from "react";

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
            <p style={{color: data.patient.status.color}}>O</p>
			<p>{data.patient.status.condition}</p>
            
		</div>
	);
}

export default Patient;
