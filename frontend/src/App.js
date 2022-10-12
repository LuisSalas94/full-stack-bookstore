import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
