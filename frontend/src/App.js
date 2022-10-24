import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components

//import Carousel from "./components/Carousel";
import Login from "./components/Login";
import Home from "./components/Home";
import CardDetail from "./components/CardDetail";
import ShoppingCart from "./components/ShoppingCart";
import Register from "./components/auth/Register";
//testing
import Navbar from "./components/Navbar";

import NotFound from "./components/ui/NotFound";

function App() {
	return (
		<div className="">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shoppingCart" element={<ShoppingCart />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/:isbn" element={<CardDetail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
