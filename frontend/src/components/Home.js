import React from "react";
//Components
import Hero from "./ui/Hero";
import Features from "./ui/Features";
import Cards from "./Cards";
import Feature2 from "./ui/Feature2";
import FAQ from "./ui/FAQ";
import Footer from "./ui/Footer";

const Home = () => {
	return (
		<div className="">
			<Hero />
			<Features />
			<Cards />
			<Feature2 />
			<FAQ />
			<Footer />
		</div>
	);
};

export default Home;
