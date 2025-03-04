import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { IoPeopleOutline } from "react-icons/io5";

function Link(data) {
	console.log(data.link.title);

	const icons = {
		Home: <HiOutlineHome></HiOutlineHome>,
		Patients: <IoPeopleOutline />,
	};

	return (
		<div>
			<p>{data.link.title}</p>
			{icons[data.link.title]}
		</div>
	);
}

export default Link;
