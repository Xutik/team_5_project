import React from "react";
import "./sidebar.css";
import { links } from "./links.js";
import Link from "./link";

function Sidebar() {
	console.log(links);
	return (
		<div>
			{links.map((data) => (
				<Link link={data}></Link>
			))}
		</div>
	);
}

export default Sidebar;
