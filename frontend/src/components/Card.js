import React from "react";
import { Link } from "react-router-dom";
import Stars from "./Stars";

const Card = () => {
	return (
		<Link
			to="/"
			className="w-4/5 flex flex-col items-center text-center bg-zinc-50 rounded-lg border shadow-md md:flex-row md:max-w-md  hover:bg-gray-100"
		>
			<img
				src="https://res.cloudinary.com/dc6vqigdn/image/upload/v1664832104/BookStore/cosmos_nez3av.jpg"
				alt=""
				className="object-fill w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
			/>

			<div className="flex flex-col justify-between md:mx-14  p-4 leading-normal">
				<Stars />
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
					Cosmos
				</h5>
				<p className="mb-3 font-normal text-gray-700">Carl Sagan</p>
				<p className="mb-3 font-normal text-gray-700">$100.00</p>
				<button
					type="button"
					class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2"
				>
					Details
				</button>
			</div>
		</Link>
	);
};

export default Card;
