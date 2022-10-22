import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";

//import Carousel from "./components/Carousel";
import Login from "./components/Login";
import Home from "./components/Home";
import CardDetail from "./components/CardDetail";
import ShoppingCart from "./components/ShoppingCart";
import Register from "./components/auth/Register";
//testing
import Navbar2 from "./components/Navbar2";

function App() {
	return (
		<div className="">
			<BrowserRouter>
				{/* <Navbar /> */}
				<Navbar2 />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shoppingCart" element={<ShoppingCart />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/:isbn" element={<CardDetail />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
