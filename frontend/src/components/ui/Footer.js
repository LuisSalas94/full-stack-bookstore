import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className=" bg-gray-900 px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-20 ">
			<div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
				<div className="sm:col-span-2">
					<Link to="/">
						<span className="self-center text-3xl text-zinc-50 font-semibold tracking-widest">
							Book
						</span>
						<span className="self-center text-3xl text-purple-400 font-semibold tracking-widest ml-2">
							Outlet
						</span>
					</Link>

					<div className="mt-6 lg:max-w-sm">
						<p className="text-sm text-zinc-50">
							I'm Fernando Salas a Full-Stack Web Developer based in Lima -
							Peru. With more than 1300+ Hours of experience mastering Data
							Structures & Algorithms, and Full-Stack development skills - 1.2k+
							Github Commits - 20+ Succes Projects - 4+ Articles published on
							Medium with more than 4.2k views.
						</p>
					</div>
				</div>
				<div className="space-y-2 text-sm">
					<p className="text-base font-bold tracking-wide text-zinc-50">
						Contacts
					</p>
					<div className="flex">
						<p className="mr-1 text-zinc-50">Phone:</p>
						<a
							href="tel:850-123-5021"
							aria-label="Our phone"
							title="Our phone"
							className="transition-colors duration-300 text-purple-400 hover:text-deep-purple-800"
						>
							+51 922 162 963
						</a>
					</div>
					<div className="flex">
						<p className="mr-1 text-zinc-50">Email:</p>
						<a
							href="mailto:info@lorem.mail"
							aria-label="Our email"
							title="Our email"
							className="transition-colors duration-300 text-purple-400 hover:text-deep-purple-800"
						>
							luisfernandosalasg@gmail.com
						</a>
					</div>
					<div className="flex">
						<p className="mr-1 text-zinc-50">Address:</p>
						<a
							href="https://www.google.com/maps"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Our address"
							title="Our address"
							className="transition-colors duration-300 text-purple-400 hover:text-deep-purple-800"
						>
							Lima - Peru
						</a>
					</div>
				</div>
				<div>
					<span className="text-base font-bold tracking-wide text-zinc-50">
						Social
					</span>
					<div className="flex items-center mt-1 space-x-3">
						<a
							href="https://www.linkedin.com/in/luisfernandosalasgave/"
							target="_blank"
							className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400 text-2xl"
							rel="noreferrer"
						>
							<i class="fa-brands fa-linkedin-in"></i>
						</a>

						<a
							href="https://www.hackerrank.com/luisfernandosal2"
							target="_blank"
							className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400 text-2xl"
							rel="noreferrer"
						>
							<i class="fa-brands fa-hackerrank"></i>
						</a>
						<a
							href="https://github.com/LuisSalas94"
							target="_blank"
							className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400 text-2xl"
							rel="noreferrer"
						>
							<i class="fa-brands fa-github"></i>
						</a>
						<a
							href="https://medium.com/@luisfernandosalasg"
							target="_blank"
							className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400 text-2xl"
							rel="noreferrer"
						>
							<i class="fa-brands fa-medium"></i>
						</a>
					</div>
				</div>
			</div>
			<div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
				<p className="text-sm text-zinc-50">
					© Copyright 2022 - All rights reserved.
				</p>
				<ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
					<li>
						<a
							href="/"
							className="text-sm text-zinc-50 transition-colors duration-300 hover:text-deep-purple-accent-400"
						>
							F.A.Q
						</a>
					</li>
					<li>
						<a
							href="/"
							className="text-sm text-zinc-50 transition-colors duration-300 hover:text-deep-purple-accent-400"
						>
							Privacy Policy
						</a>
					</li>
					<li>
						<a
							href="/"
							className="text-sm text-zinc-50 transition-colors duration-300 hover:text-deep-purple-accent-400"
						>
							Terms &amp; Conditions
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
