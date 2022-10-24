import React from "react";

const Features = () => {
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
									id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
									x="0"
									y="0"
									width=".135"
									height=".30"
								>
									<circle cx="1" cy="1" r=".7" />
								</pattern>
							</defs>
							<rect
								fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
								width="52"
								height="24"
							/>
						</svg>
						<span className="relative">Where</span>
					</span>{" "}
					can I find the best books online?
				</h2>
				<p className="text-base text-gray-700 md:text-lg">
					You can find the best books online right here on the Book Outlet
					website. We offer multiple ways for you to find your next read,
					including our search bar that allows you to search for books by title
					or author, and even free shipping.
				</p>
			</div>
			<div className="grid gap-8 row-gap-10 lg:grid-cols-2 ">
				<div className="max-w-md sm:mx-auto sm:text-center">
					<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="w-12 h-12 text-purple-400 sm:w-14 sm:h-14"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
							/>
						</svg>
					</div>
					<h6 className="mb-3 text-xl font-bold leading-5">
						Independent sellers
					</h6>
					<p className="mb-3 text-sm text-gray-900">
						Millions of books and other items are listed for sale on Book Outlet
						by trusted sellers from around the world.
					</p>
					<a
						href="/"
						aria-label=""
						className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-500 hover:text-deep-purple-800"
					>
						Learn more
					</a>
				</div>
				<div className="max-w-md sm:mx-auto sm:text-center ">
					<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="w-12 h-12 text-purple-400 sm:w-14 sm:h-14"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
							/>
						</svg>
					</div>
					<h6 className="mb-3 text-xl font-bold leading-5">Not just books</h6>
					<p className="mb-3 text-sm text-gray-900">
						We're known for our epic selection of new, used, and rare books, but
						we also sell fine art & collectibles.
					</p>
					<a
						href="/"
						aria-label=""
						className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-500 hover:text-deep-purple-800"
					>
						Learn more
					</a>
				</div>
				<div className="max-w-md sm:mx-auto sm:text-center ">
					<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="w-12 h-12 text-purple-400 sm:w-14 sm:h-14"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
							/>
						</svg>
					</div>
					<h6 className="mb-3 text-xl font-bold leading-5">Feel the love</h6>
					<p className="mb-3 text-sm text-gray-900">
						We asked customers to tell us why they love shopping on Book Outlet
						and we were overwhelmed by their kind words.
					</p>
					<a
						href="/"
						aria-label=""
						className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-500 hover:text-deep-purple-800"
					>
						Learn more
					</a>
				</div>
				<div className="max-w-md sm:mx-auto sm:text-center">
					<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="w-12 h-12 text-purple-400 sm:w-14 sm:h-14"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
							/>
						</svg>
					</div>
					<h6 className="mb-3 text-xl font-bold leading-5">More to explore</h6>
					<p className="mb-3 text-sm text-gray-900">
						Book Outlet regularly publishes fascinating features about a huge
						variety of bookish subjects, publishers, and interesting characters
						in literature and notable anniversaries.
					</p>
					<a
						href="/"
						aria-label=""
						className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-500 hover:text-deep-purple-800"
					>
						Learn more
					</a>
				</div>
			</div>
		</div>
	);
};

export default Features;
