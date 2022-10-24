import React from "react";

const FAQ = () => {
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="max-w-xl sm:mx-auto lg:max-w-2xl">
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
										id="70326c9b-4a0f-429b-9c76-792941e326d5"
										x="0"
										y="0"
										width=".135"
										height=".30"
									>
										<circle cx="1" cy="1" r=".7" />
									</pattern>
								</defs>
								<rect
									fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
									width="52"
									height="24"
								/>
							</svg>
							<span className="relative">Frequently</span>
						</span>{" "}
						Asked Questions
					</h2>
				</div>
			</div>
			<div className="max-w-screen-xl sm:mx-auto">
				<div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
					<div className="space-y-8">
						<div>
							<p className="mb-4 text-xl font-medium">
								Where can I find used books online?
							</p>
							<p className="text-gray-700">
								You can find used books online right here on the{" "}
								<span className="text-purple-700 mr-1">Book Oulet</span>
								website. We offer multiple ways for you to find your next read,
								including our search bar that allows you to search for books by
								title or author, or you can browse by genre, price, and even
								free shipping.
								<br />
								<br />
								<span className="text-purple-700 mr-1">Book Oulet</span> has
								books for sale that everyone can enjoy, no matter their favorite
								genre. Whether you're looking for your next favorite fantasy
								novel, out-of-print rarities, or shopping for college textbooks
								online, we have everything you need to get affordable new and
								used books. Search by title, author, or ISBN to find exactly
								what you're looking for at an affordable price.
							</p>
						</div>
						<div>
							<p className="mb-4 text-xl font-medium">
								What are the top 5 most popular books?
							</p>
							<p className="text-gray-700">
								<span className="text-purple-700 mr-1">Book Oulet</span> gives
								you access to the most popular books of all time, including:
								<br />
								<br />
								<ul>
									<li> - Harry Potter</li>
									<li className="my-1"> - The Hunger Games</li>
									<li> - The Fault in Our Stars</li>
									<li className="my-1"> - The Twilight Saga</li>
									<li> - The Book Thief</li>
								</ul>
								<br />
								However, you should never read a book just because it's popular.
								Everyone has different tastes, so browse our selection of new
								and used books by genre to ensure you find the right one for
								you.
							</p>
						</div>
						<div>
							<p className="mb-4 text-xl font-medium">
								How much does it cost to buy a book?
							</p>
							<p className="text-gray-700">
								Prices for books vary depending on the seller, but you can find
								books for as low as 99 cents when shopping our discounted books,
								where you can find thousands of the most popular novels,
								non-fiction books, and even new releases. Buy used books to get
								the same great experience without spending too much on your next
								read.
							</p>
						</div>
					</div>
					<div className="space-y-8">
						<div>
							<p className="mb-4 text-xl font-medium">
								Where can I sell books online?
							</p>
							<p className="text-gray-700">
								You can sell your books online with{" "}
								<span className="text-purple-700 mr-1">Book Oulet</span> using
								our buyback program or by becoming a casual seller. With our
								buyback program, you can search for your books online to find
								out if we're currently buying them. If we're not, consider
								signing up to become a casual seller, where you can sell any
								books to people shopping on our website for as little or as much
								as you want.
							</p>
						</div>
						<div>
							<p className="mb-4 text-xl font-medium">How do I cite a book?</p>
							<p className="text-gray-700">
								Citing a book requires in-text citations and a reference list,
								also known as a works cited page or bibliography. There are
								three common citation styles:
								<br />
								<br />
								<span className="font-bold"> APA: </span> APA style citations
								include the author's last name and first initials, year of
								publication, italicized book title, and publisher. Meanwhile,
								the in-text citation includes the author's last name,
								publication year, and page number.
								<br />
								<br />
								<span className="font-bold"> MLA: </span> An MLA citation
								requires the author's name, italicized book title, publisher,
								and year of publication. The in-text citation only lists the
								author's last name and page number of the cited book.
								<br />
								<br /> <span className="font-bold"> Chicago-style: </span>
								Chicago-style citations use footnotes to cite sources instead of
								parentheticals. The footnotes include the author's name, book
								title, edition, location and name of the publisher, and the
								publication year.
								<br />
								<br />
								Which citation style you use may depend on your course's
								specific guidelines, but typically APA style is used in social
								and behavioral sciences, MLA is used in humanities subjects like
								English literature, and Chicago-style is used in history and
								humanities.
							</p>
						</div>
						<div>
							<p className="mb-4 text-xl font-medium">
								How do I find a good book to read?
							</p>
							<p className="text-gray-700">
								Finding a book you'll love is easy. You can search for books by
								genre to help you find something you know you'll like or by
								reading the synopsis on our website to determine if it's the
								right read for you. Still unsure what to read next? Ask family
								and friends for recommendations before shopping online.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
