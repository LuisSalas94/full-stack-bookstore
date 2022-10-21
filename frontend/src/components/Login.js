// import React from "react";

// const Login = () => {
// 	return (
// 		<section class="h-full gradient-form bg-gray-200 md:h-screen">
// 			<div class="container py-12 px-6 h-full">
// 				<div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
// 					<div class="xl:w-10/12">
// 						<div class="block bg-white shadow-lg rounded-lg">
// 							<div class="lg:flex lg:flex-wrap g-0">
// 								<div class="lg:w-6/12 px-4 md:px-0">
// 									<div class="md:p-12 md:mx-6">
// 										<div class="text-center">
// 											<img
// 												class="mx-auto w-48"
// 												src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
// 												alt="logo"
// 											/>
// 											<h4 class="text-xl font-semibold mt-1 mb-12 pb-1">
// 												We are The Lotus Team
// 											</h4>
// 										</div>
// 										<form>
// 											<p class="mb-4">Please login to your account</p>
// 											<div class="mb-4">
// 												<input
// 													type="email"
// 													class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
// 													id="exampleFormControlInput1"
// 													placeholder="Email"
// 												/>
// 											</div>
// 											<div class="mb-4">
// 												<input
// 													type="password"
// 													class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
// 													id="exampleFormControlInput1"
// 													placeholder="Password"
// 												/>
// 											</div>
// 											<div class="text-center pt-1 mb-12 pb-1">
// 												<button
// 													class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
// 													type="button"
// 													data-mdb-ripple="true"
// 													style={{ backgroundColor: "#3f51b5" }}
// 												>
// 													Log in
// 												</button>
// 												<a class="text-gray-500" href="#!">
// 													Forgot password?
// 												</a>
// 											</div>
// 											<div class="flex items-center justify-between pb-6">
// 												<p class="mb-0 mr-2">Don't have an account?</p>
// 												<button
// 													type="button"
// 													class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
// 													data-mdb-ripple="true"
// 													data-mdb-ripple-color="light"
// 												>
// 													Danger
// 												</button>
// 											</div>
// 										</form>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Login;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const auth = useSelector((state) => state.auth);

	useEffect(() => {
		if (auth._id) {
			navigate("/shoppingCart");
		}
	}, [auth._id, navigate]);

	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(loginUser(user));
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>
			<input
				type="email"
				placeholder="email"
				onChange={(e) => setUser({ ...user, email: e.target.value })}
			/>
			<input
				type="password"
				placeholder="password"
				onChange={(e) => setUser({ ...user, password: e.target.value })}
			/>
			<button>
				{auth.loginStatus === "pending" ? "Submitting..." : "Login"}
			</button>
			{auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
		</form>
	);
};

export default Login;
