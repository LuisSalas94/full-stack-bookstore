import React, { useEffect } from "react";
import Stars from "./Stars";
import { Link } from "react-router-dom";
import { fetchAsyncBooks } from "../features/books/booksSlice";
import { useDispatch, useSelector } from "react-redux";

const Cards = () => {
	const dispatch = useDispatch();
	const books = useSelector((state) => state.books.books);

	useEffect(() => {
		dispatch(fetchAsyncBooks());
	}, [dispatch]);

	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
				<div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
					<a href="/" aria-label="Item" className="mr-3">
						<div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-8 h-8 text-purple-400"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
						</div>
					</a>
					<h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
						<span className="inline-block mb-2">Check Out Our Books</span>
						<div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
					</h2>
				</div>
				<p className="w-full text-center text-gray-700 lg:text-sm lg:max-w-md">
					“I find television very educating. Every time somebody turns on the
					set, I go into the other room and read a book.” - Groucho Marx
				</p>
			</div>
			<div className="grid gap-8 row-gap-5 mb-8 md:grid-cols-2  lg:grid-cols-3 lg:row-gap-8 xl:grid-cols-4">
				{books.map((book) => {
					return (
						<div className="flex flex-col items-center" key={book.isbn}>
							<img
								className="mx-auto object-contain h-80 mb-6 rounded shadow-lg md:h-64 xl:h-80"
								src={book.image}
								alt={book.title}
							/>
							<Stars />
							<p className="my-4 text-m text-gray-900 text-center font-bold leading-none">
								{book.title}
							</p>
							<p className="text-gray-700">
								<span>by</span> {book.author}
							</p>
							<p className="text-gray-900 font-bold my-4">
								<span className="text-rose-500 line-through">
									${book.price + 2}
								</span>{" "}
								- ${book.price}
							</p>
							<Link
								to={`/${book.isbn}`}
								className="inline-flex items-center justify-center h-9 px-5 font-medium tracking-wide transition duration-200 rounded shadow-lg  text-purple-400 border	border-purple-400	hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
							>
								Details
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Cards;
