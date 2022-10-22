import React from "react";
//import Carousel from "./Carousel";
import Card from "./Card";
import Hero from "./ui/Hero";
import Features from "./ui/Features";
import Cards from "./Cards";
import Feature2 from "./ui/Feature2";
import FAQ from "./ui/FAQ";

const Home = () => {
	return (
		<div className="">
			<Hero />
			<Features />
			<Cards />
			<Feature2 />
			<FAQ />
			{/* <Card /> */}
		</div>
	);
};

export default Home;
