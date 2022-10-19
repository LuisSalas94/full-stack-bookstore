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

function App() {
	return (
		<div className="">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shoppingCart" element={<ShoppingCart />} />
					<Route path="/:isbn" element={<CardDetail />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
