import React from "react";
//import Carousel from "./Carousel";
import Card from "./Card";
import Hero from "./ui/Hero";
import Features from "./ui/Features";
import { useSelector } from "react-redux";

const Home = () => {
	return (
		<div className="">
			{/* <Card /> */}
			<Hero />
			<Features />
		</div>
	);
};

export default Home;
