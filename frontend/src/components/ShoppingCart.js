import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cart/cartSlice";
import ConfirmationCard from "./ConfirmationCard";
import { getIsbn } from "../features/isbn/isbnSlice";
import {
	decreaseCartQuantity,
	addToCart,
	getTotals,
} from "../features/cart/cartSlice";

const ShoppingCart = () => {
	// const [showConfirmation, setShowConfirmation] = useState(false);
	// const confirmation = useSelector((state) => state.isbn.showConfirmation);
	const cart = useSelector((state) => state.cart.cartItems);
	const cart2 = useSelector((state) => state.cart);
	//const { cartTotalAmount } = useSelector((state) => state.cart);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTotals());
	}, [cart2, dispatch]);

	const handleRemove = (isbn) => {
		dispatch(removeFromCart(isbn));
		//setShowConfirmation(true);
		//dispatch(getIsbn(isbn));
		//setShowConfirmation(confirmation);
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	const handleDecrease = (item) => {
		dispatch(decreaseCartQuantity(item));
	};

	const handleIncrease = (item) => {
		dispatch(addToCart(item));
	};

	return (
		<>
			<div>
				<div className="w-full h-full bg-opacity-90" id="chec-div">
					<div
						className="w-full  h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
						id="checkout"
					>
						<div className="flex md:flex-row flex-col justify-end" id="cart">
							<div
								className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
								id="scroll"
							>
								<div
									className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
									onClick={() => navigate("/")}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-chevron-left"
										width={16}
										height={16}
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<polyline points="15 6 9 12 15 18" />
									</svg>
									<p className="text-sm pl-2 leading-none">Back</p>
								</div>
								<p className="text-5xl font-black leading-10 text-gray-800 pt-3">
									Shopping Cart
								</p>
								{cart.map((item) => {
									return (
										<div
											className="md:flex items-center mt-14 py-8 border-t border-gray-200"
											key={item.isbn}
										>
											<div className="w-1/4">
												<img
													src={item.image}
													alt="title"
													className="w-full h-full object-center object-cover"
												/>
											</div>
											<div className="md:pl-3 md:w-3/4">
												<div className="flex items-center justify-between w-full pt-1">
													<p className="text-xl font-black leading-none text-gray-800">
														{item.title}
													</p>

													<div className="flex items-center">
														<button
															onClick={() => handleDecrease(item)}
															type="button"
															className="w-full p-2 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
														>
															-
														</button>
														<button
															type="button"
															className="w-full px-3 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 "
														>
															{item.cartQuantity}
														</button>
														<button
															onClick={() => handleIncrease(item)}
															type="button"
															className="w-full p-2 border-t border-l border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
														>
															+
														</button>
													</div>
												</div>
												<p className="text-sm leading-3 text-gray-600 pt-2">
													<span className="font-bold"> Author : </span>
													{item.author}
												</p>
												<p className="my-3 text-sm leading-3 text-gray-600 pt-2">
													<span className="font-bold"> ISBN : </span>
													{item.isbn}
												</p>
												<p className="text-sm my-3 leading-3 text-gray-600 py-4">
													<span className="font-bold">Number of Pages :</span>{" "}
													{item.num_pages}
												</p>
												<p className="text-sm my-3 leading-3 text-gray-600 py-4">
													<span className="font-bold">Price :</span>{" "}
													{item.price}
												</p>

												<p className="w-96 text-sm leading-3 text-gray-600">
													<span className="font-bold">Review :</span>{" "}
													<span className="italic">{item.review}</span>
												</p>
												<div className="flex items-center justify-between pt-5 pr-6">
													<div className="flex itemms-center">
														<p className="text-sm leading-3 underline text-gray-800 cursor-pointer">
															Add to wishlist
														</p>
														<p
															onClick={() => handleRemove(item.isbn)}
															className="text-sm leading-3 underline text-red-500 pl-5 cursor-pointer"
														>
															Remove
														</p>
													</div>
													<p className="text-sm font-black leading-none text-gray-800">
														Total Price: $
														{(item.price * item.cartQuantity).toFixed(2)}
													</p>
												</div>
											</div>
										</div>
									);
								})}

								{cart.length >= 1 && (
									<button
										onClick={() => handleClearCart()}
										className="mt-5 flex mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-8 py-3 text-sm"
									>
										Clear Cart
									</button>
								)}
								{/* {showConfirmation && <ConfirmationCard />} */}
							</div>

							<div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
								<div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
									<div>
										<p className="text-4xl font-black leading-9 text-gray-800">
											Summary
										</p>
										<div className="flex items-center justify-between pt-16">
											<p className="text-base leading-none text-gray-800">
												Subtotal:
											</p>
											<p className="text-base leading-none text-gray-800">
												${cart2.cartTotalAmount.toFixed(2)}
											</p>
										</div>
										<div>
											<div className=" lg:mt-8 flex items-center pb-6 justify-between lg:pt-5 pt-20">
												<p className="text-2xl leading-normal text-gray-800">
													Total:
												</p>
												<p className="text-2xl font-bold leading-normal text-right text-gray-800">
													${cart2.cartTotalAmount.toFixed(2)}
												</p>
											</div>

											<button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white rounded-md">
												Checkout
											</button>
											<h6 className="text-xs text-zinc-600 pt-2 italic text-center">
												Taxes and shipping calculated at checkout
											</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ShoppingCart;
