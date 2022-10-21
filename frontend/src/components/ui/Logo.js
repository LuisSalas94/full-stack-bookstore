import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link to="/" className="flex items-center">
			<img src={logo} alt="logo" className="mr-1 h-6 sm:h-9 bg-slate-100" />
			<span className="self-center text-3xl text-zinc-600 font-semibold tracking-widest">
				ookstore
			</span>
		</Link>
	);
};

export default Logo;
