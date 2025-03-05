import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { IoPeopleOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoChatboxOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { IoMicOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";

function Link(data) {
	const icons = {
		A: <HiOutlineHome size={25} />,
		B: <IoPeopleOutline size={25} />,
		C: <IoMailOutline size={25} />,
		D: <IoChatboxOutline size={25} />,
		E: <HiOutlineClipboardDocumentCheck size={25} />,
		F: <HiOutlineArrowsUpDown size={25} />,
		G: <IoMicOutline size={25} />,
		H: <IoSettingsOutline size={25} />,
		I: <IoIosHelpCircleOutline size={25} />,
	};

	return (
		<div className="link" key={data.link.icon}>
			{icons[data.link.icon]}
			<p>{data.link.title}</p>
		</div>
	);
}

export default Link;
