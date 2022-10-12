import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Bars from "./Bars";

const Navbar = () => {
	const [click, setClick] = useState(true);

	const handleClick = () => {
		setClick(!click);
	};

	return (
		<nav className="bg-stone-100 mb-5 border-gray-200 px-2 sm:px-4 py-3 rounded shadow-lg md:py-4">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<Link to="/" className="flex items-center">
					<img src={logo} alt="logo" className="mr-1 h-6 sm:h-9 bg-slate-100" />
					<span className="self-center text-3xl text-zinc-600 font-semibold tracking-widest">
						ookstore
					</span>
				</Link>
				<div className="flex md:order-2">
					<div className="md:hidden cursor-pointer" onClick={handleClick}>
						<Bars />
					</div>
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
				{click && (
					<div className="justify-between items-center w-full md:flex md:w-auto md:order-1">
						<input
							type="text"
							className="text-sm block my-5 p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-400 md:hidden"
							placeholder="Search by Title or Author"
						/>
						<ul className="flex flex-row justify-center p-1 gap-5 bg-stone-100 rounded-lg    md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-stone-100 md:items-center">
							<li>
								<Link
									to="/login"
									className="block py-2 pr-4 pl-3 text-zinc-600  rounded md:bg-transparent md:text-zinc-600 md:p-0 text-base"
									aria-current="page"
								>
									Login
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="block py-2 pr-4 pl-3 text-zinc-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-zinc-600 md:p-0 md:dark:hover:text-white md:text-zinc-600 text-base"
								>
									Register
								</Link>
							</li>
							<li>
								<div className="inline-flex relative w-fit mx-3 md:mx-0">
									<div className="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 p-1 text-xs bg-zinc-800 rounded-full z-10 text-zinc-400">
										22
									</div>
									<div className="px-1.5 py-1.5 bg-gray-300 flex items-center justify-center text-center rounded-lg shadow-lg">
										<div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
												/>
											</svg>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
