import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
	return (
		<nav className="bg-stone-100 border-gray-200 px-2 sm:px-4 py-3 rounded shadow-lg">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<Link to="/" className="flex items-center">
					<img src={logo} alt="logo" className="mr-1 h-6 sm:h-9 bg-slate-100" />
					<span className="self-center text-3xl text-zinc-600 font-semibold tracking-widest">
						ookstore
					</span>
				</Link>
				<div className="flex md:order-2">
					<div className="hidden relative md:block">
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<svg
								className="w-5 h-5 text-gray-500"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clipRule="evenodd"
								></path>
							</svg>
							<span className="sr-only">Search icon</span>
						</div>
						<input
							type="text"
							className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-400"
							placeholder="Search by Title or Author"
						/>
					</div>
				</div>
				<div className="justify-between items-center w-full md:flex md:w-auto md:order-1">
					<input
						type="text"
						className="text-sm block my-5 p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-400 md:hidden"
						placeholder="Search by Title or Author"
					/>
					<ul className="flex flex-col p-1 bg-stone-100 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-stone-100 ">
						<li>
							<Link
								href="#"
								className="block py-2 pr-4 pl-3 text-zinc-600  rounded md:bg-transparent md:text-zinc-600 md:p-0 text-base"
								aria-current="page"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="block py-2 pr-4 pl-3 text-zinc-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-zinc-600 md:p-0 md:dark:hover:text-white md:text-zinc-600 text-base"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="block py-2 pr-4 pl-3 text-zinc-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-zinc-600 md:p-0 text-base"
							>
								Services
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
