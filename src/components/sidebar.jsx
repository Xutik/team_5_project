import React from "react";
import "./sidebar.css";
import { links1, links2 } from "./links.js";
import Link from "./link";

function Sidebar() {
	return (
		<aside>
			<div className="links">
				<div>
					{links1.map((data) => (
						<Link link={data} />
					))}
				</div>
				<div className="bottom-links">
					{links2.map((data) => (
						<Link link={data} />
					))}
				</div>
			</div>
		</aside>
	);
}

export default Sidebar;
