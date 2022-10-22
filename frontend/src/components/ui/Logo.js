import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link to="/" className="flex items-center">
			<span className="self-center text-3xl text-gray-900 font-semibold tracking-widest">
				Book
			</span>
			<span className="self-center text-3xl text-purple-400 font-semibold tracking-widest ml-2">
				Outlet
			</span>
		</Link>
	);
};

export default Logo;
