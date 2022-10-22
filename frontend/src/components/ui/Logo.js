import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link to="/" className="flex items-center">
			<img src={logo} alt="logo" className="mr-1 h-6 sm:h-9 bg-white" />
			<span className="self-center text-3xl text-gray-900 font-semibold tracking-widest">
				ook
			</span>
			<span className="self-center text-3xl text-purple-400 font-semibold tracking-widest ml-2">
				Oulet
			</span>
		</Link>
	);
};

export default Logo;
