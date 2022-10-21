import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Stars from "./Stars";
import { fetchAsyncBooks } from "../features/books/booksSlice";
import { useDispatch, useSelector } from "react-redux";

const Card = () => {
	const dispatch = useDispatch();
	const books = useSelector((state) => state.books.books);
	const auth = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(fetchAsyncBooks());
	}, [dispatch]);

	return books.map((book) => {
		return (
			<section
				key={book.isbn}
				className="w-4/5 flex flex-col items-center text-center bg-zinc-50 rounded-lg border shadow-md md:flex-row md:max-w-md  hover:bg-gray-100"
			>
				<img
					src={book.image}
					alt=""
					className="object-fill w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
				/>

				<div className="flex flex-col justify-between md:mx-14  p-4 leading-normal">
					<Stars />
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
						{book.title}
					</h5>
					<p className="mb-3 font-normal text-gray-700">{book.author}</p>
					<p className="mb-3 font-normal text-gray-700">$ {book.price} </p>
					<Link
						to={`/${book.isbn}`}
						type="button"
						className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2"
					>
						Details
					</Link>
				</div>
			</section>
		);
	});
};

export default Card;
