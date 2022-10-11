import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Carousel />
				<Routes></Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
