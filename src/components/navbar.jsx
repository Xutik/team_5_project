import React from "react";
import { IoIosSearch } from "react-icons/io";
import { GiHealthNormal } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
	return (
		<div className="navbar">
			<div className="logo">
				<GiHealthNormal
					size={40}
					style={{
						fill: "#168BD9",
					}}
				/>
				<h1>Nurse</h1>
			</div>
			<div className="timeInfo">
				<h3 className="date">27-02-2025</h3>
				<h3 className="time">12:42</h3>
			</div>
			<input type="search" placeholder="Search" className="searchbar" />
			<div className="profile">
				<FaRegBell size={25} className="bell"/>
				<img
					className="pfp"
					src="https://www.bartonassociates.com/wp-content/uploads/2017/03/Blog-Twitter-Facebook-1080x1080-2024-05-23T101111.816.jpg"
					alt="users profile"
				/>
                <div className="person">
				<p className="name">Kristin</p>
				<p className="occupation">Specialist Nurse</p>
                </div>
			</div>
		</div>
	);
}

export default Navbar;
