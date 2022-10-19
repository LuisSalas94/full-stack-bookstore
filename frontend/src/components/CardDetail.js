import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//import { fetchAsyncBook } from "../features/books/booksSlice";
import { fetchAsyncBook, clearBook } from "../features/book/bookSlice";
import { Link } from "react-router-dom";
//Components
import Stars from "./Stars";
import Spinner from "./spinner/Spinner";

const CardDetail = () => {
	const [readMore, setReadMore] = useState(false);
	const { isbn } = useParams();
	const dispatch = useDispatch();
	const book = useSelector((state) => state.book.book);
	const { isLoading } = useSelector((state) => state.book);

	useEffect(() => {
		dispatch(fetchAsyncBook(isbn));
		return () => {
			dispatch(clearBook());
		};
	}, [dispatch, isbn]);

	const randomViews = Math.floor(Math.random() * 55) + 1;

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				// container
				<div className=" px-5 py-10 mx-auto">
					<div className="lg:w-4/5 mx-auto flex items-center flex-wrap justify-center">
						<img
							src={book.image}
							alt={book.title}
							className="w-80 h-80 rounded lg:h-4/5"
						/>

						<div className="lg:w-4/5 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
							{/* Container 1 */}
							<div className="">
								<h2 className="text-sm title-font text-gray-500 tracking-widest">
									ON SALE
								</h2>
								<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
									{book.title}
								</h1>
								<h1 className="text-gray-900 text-sm title-font font-medium mb-1 mt-2">
									{book.author}
								</h1>
								<div className="flex mb-4 ">
									<span className="flex items-center">
										<Stars />
										<span className="text-gray-600 ml-3">
											{randomViews} Reviews
										</span>
									</span>
									<span className="flex ml-3 gap-2 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
										<a className="text-gray-500">
											<svg
												fill="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-5 h-5 "
												viewBox="0 0 24 24"
											>
												<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
											</svg>
										</a>
										<a className="text-gray-500">
											<svg
												fill="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-5 h-5"
												viewBox="0 0 24 24"
											>
												<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
											</svg>
										</a>
										<a className="text-gray-500">
											<svg
												fill="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-5 h-5"
												viewBox="0 0 24 24"
											>
												<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
											</svg>
										</a>
									</span>
								</div>
								<hr className="my-3" />
								<h2 className="text-lg title-font text-gray-900 tracking-widest my-3">
									About the Book
								</h2>
								<p className="leading-relaxed text-base font-light">
									{book.description}
								</p>
								<div className="flex mt-5">
									<span className="title-font font-medium text-2xl text-gray-900">
										${book.price}
									</span>
									<button className="flex ml-auto text-white bg-indigo-400 border-0 py-2 px-3 focus:outline-none rounded">
										Buy Now
									</button>

									<Link
										to="/"
										className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
											/>
										</svg>
									</Link>
								</div>
							</div>

							<hr className="mt-6" />
							{/* Container 2 */}
							<div className="mt-4 ">
								<h2 className="text-lg title-font text-gray-900 tracking-widest">
									Detail of the Book
								</h2>
								<div className="mt-3">
									<h1 className="text-gray-900 text-base title-font font-medium mb-1">
										ISBN:{" "}
										<span className="leading-relaxed text-base font-light">
											{book.isbn}
										</span>
									</h1>
									<h1 className="text-gray-900 text-base title-font font-medium mb-1">
										Price:{" "}
										<span className="leading-relaxed text-base font-light">
											$ {book.price}
										</span>
									</h1>
									<h1 className="text-gray-900 text-base title-font font-medium mb-1">
										Publishing House:{" "}
										<span className="leading-relaxed text-base font-light">
											{book.publisher}
										</span>
									</h1>
									<h1 className="text-gray-900 text-base title-font font-medium mb-1">
										Number of Pages:{" "}
										<span className="leading-relaxed text-base font-light">
											{book.num_pages}
										</span>
									</h1>
									<h1 className="text-gray-900 text-base title-font font-medium mb-1">
										Review:{" "}
										<span className="leading-relaxed text-base font-light italic">
											"{book.review}" by{" "}
										</span>
										<span className="text-gray-900 text-base title-font font-medium">
											{book.review_author}
										</span>
									</h1>
								</div>
							</div>
							{/* Container 3 */}
							<hr className="mt-6" />
							<div className="mt-4 ">
								<h2 className="text-lg title-font text-gray-900 tracking-widest">
									About the Author
								</h2>
								<div className="flex flex-col items-center gap-10 md:flex-row">
									<img
										src={book.author_image}
										alt={book.author}
										className="rounded-full w-28 h-28 mt-4"
									/>
									<p className="leading-relaxed text-base font-light">
										{book.author_info}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default CardDetail;
