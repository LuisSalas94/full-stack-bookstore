import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
//components
import Logo from "./ui/Logo";
import { fetchAsyncSearch } from "../features/books/booksSlice";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/authSlice";

const Navbar2 = () => {
	//Hooks
	const [showMenu, setShowMenu] = useState(false);
	const inputRef = useRef("");

	//Redux
	const dispatch = useDispatch();
	const { cartTotalQuantity } = useSelector((state) => state.cart);
	const auth = useSelector((state) => state.auth);

	//Functions
	const searchByInput = () => {
		const search = inputRef.current.value;
		dispatch(fetchAsyncSearch(search));
	};

	return (
		<div className="bg-stone-50 rounded shadow-md">
			<div className="container mx-auto relative">
				<div className="py-1 mx-4 md:mx-6 ">
					<div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 py-4">
						<div>
							<div
								className="hidden lg:block cursor-pointer"
								role="img"
								aria-label="luxe. Logo."
							>
								<Logo />
							</div>
							<div
								className="hidden md:block lg:hidden cursor-pointer "
								role="img"
								aria-label="luxe. Logo."
							>
								<Logo />
							</div>
							<div
								className="md:hidden cursor-pointer"
								role="img"
								aria-label="luxe. Logo."
							>
								<Logo />
							</div>
						</div>
						<div className="hidden md:block">
							<ul className="flex items-center space-x-6">
								{auth._id ? (
									<li>
										<Link
											onClick={() => dispatch(logoutUser(null))}
											className=" text-base text-right text-gray-800 focus:outline-none hover:underline"
										>
											Logout
										</Link>
									</li>
								) : (
									<li>
										<Link
											to="/login"
											className=" text-base text-right text-gray-800 focus:outline-none hover:underline"
										>
											Login
										</Link>
										<Link
											to="/register"
											className=" text-base text-right text-gray-800 focus:outline-none hover:underline ml-10"
										>
											Register
										</Link>
									</li>
								)}
							</ul>
						</div>

						<div className="hidden md:flex items-center space-x-4">
							<Link
								aria-label="Bag"
								className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100 p-0.5 rounded"
							>
								<button
									type="button"
									className="text-md text-white text-4xl relative"
								>
									<span className="w-4 h-4 rounded-full absolute right-2 leading text-xs bg-red-500">
										{cartTotalQuantity}
									</span>
									<svg
										width="20"
										height="20"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="text-gray-800 h-8 w-8"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
										/>
									</svg>
								</button>
							</Link>
						</div>

						<div className="md:hidden ">
							<button
								aria-label="open menu"
								onClick={() => setShowMenu(true)}
								className="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
							>
								<svg
									className="fill-stroke text-gray-800"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M4 6H20"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M10 12H20"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M6 18H20"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className="mt-4 pb-4 flex space-x-3 border-b border-gray-200 dark:border-gray-700 ">
						<div>
							<svg
								className="fill-stroke text-gray-600 "
								width={20}
								height={20}
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M19.0004 19.0004L14.6504 14.6504"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<input
							ref={inputRef}
							onChange={searchByInput}
							type="text"
							placeholder="Search by Title or Author"
							className="focus:outline-none bg-transparent text-sm text-gray-800"
						/>
					</div>
				</div>
				<div
					id="mobile-menu"
					className={`${
						showMenu ? "flex" : "hidden"
					} bg-stone-100 md:hidden absolute inset-0 z-10 flex-col w-full h-screen  pt-6 `}
				>
					<div className="w-full">
						<div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 mx-4 ">
							<div role="img" aria-label="Luxe. Logo">
								<Logo />
							</div>
							<button
								aria-label="close menu"
								onClick={() => setShowMenu(false)}
								className="text-gray-800  focus:outline-none focus:ring-2 focus:ring-gray-800"
							>
								<svg
									className="fill-stroke"
									width={20}
									height={20}
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15 5L5 15"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M5 5L15 15"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className="mt-4 mx-4 ">
						<ul className="flex flex-col space-y-4">
							<li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
								<Link className=" focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline">
									Login
								</Link>
								<button
									aria-label="Add"
									className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-slate-50"
								>
									<svg
										className="fill-stroke"
										width={16}
										height={16}
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8 3.3335V12.6668"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M3.33203 8H12.6654"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</li>
							<li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
								<Link className=" focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline">
									Register
								</Link>
								<button
									aria-label="Add"
									className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-slate-50"
								>
									<svg
										className="fill-stroke"
										width={16}
										height={16}
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8 3.3335V12.6668"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M3.33203 8H12.6654"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar2;
