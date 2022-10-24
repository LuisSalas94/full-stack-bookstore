import React from "react";

const Feature2 = () => {
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
				<div>
					<p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
						Enchanting The Mind
					</p>
				</div>
				<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
					<span className="relative inline-block">
						<svg
							viewBox="0 0 52 24"
							fill="currentColor"
							className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
						>
							<defs>
								<pattern
									id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
									x="0"
									y="0"
									width=".135"
									height=".30"
								>
									<circle cx="1" cy="1" r=".7" />
								</pattern>
							</defs>
							<rect
								fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
								width="52"
								height="24"
							/>
						</svg>
						<span className="relative">For</span>
					</span>{" "}
					the love of reading
				</h2>
			</div>
			<div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
				<div className="flex flex-col justify-center">
					<div className="flex">
						<div className="mr-4">
							<div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									className="w-6 h-6 text-purple-400"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
									/>
								</svg>
							</div>
						</div>
						<div>
							<h6 className="mb-2 font-semibold leading-5">Selection</h6>
							<p className="text-sm text-gray-900">
								We have more than 1 million titles to choose from, from the
								earliest board books to the all-time classics of literature.
							</p>
							<hr className="w-full my-6 border-gray-300" />
						</div>
					</div>
					<div className="flex">
						<div className="mr-4">
							<div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									className="w-6 h-6 text-purple-400"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
									/>
								</svg>
							</div>
						</div>
						<div>
							<h6 className="mb-2 font-semibold leading-5">Purchasing Power</h6>
							<p className="text-sm text-gray-900">
								Used books are often treasures that are out-of-print or rare.
								With Wish Lists you can choose to be notified the instant we
								find a copy, see how often we find rare titles, and see who else
								is interested.
							</p>
							<hr className="w-full my-6 border-gray-300" />
						</div>
					</div>
					<div className="flex">
						<div className="mr-4">
							<div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
								<svg
									className="w-8 h-8 text-purple-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</div>
						</div>
						<div>
							<h6 className="mb-2 font-semibold leading-5">
								FREE Shipping & More
							</h6>
							<p className="text-sm text-gray-900">
								When you've found the books you want we'll ship qualifying
								orders to your door for FREE in 100% recyclable packaging. If
								there is no demand for a book, we will donate it to charity, or
								we'll recycle it.
							</p>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-5">
					<img
						className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
						src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						alt=""
					/>
					<img
						className="object-cover w-full h-48 rounded shadow-lg"
						src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80"
						alt=""
					/>
					<img
						className="object-cover w-full h-48 rounded shadow-lg"
						src="https://images.unsplash.com/photo-1637681068516-2b22116e68cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Feature2;
