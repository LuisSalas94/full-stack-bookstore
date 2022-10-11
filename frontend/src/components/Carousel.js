import React from "react";

const Carousel = () => {
	return (
		<div
			id="carouselDarkVariant"
			className="carousel slide carousel-fade carousel-dark relative"
			data-bs-ride="carousel"
		>
			<div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
				<button
					data-bs-target="#carouselDarkVariant"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					data-bs-target="#carouselDarkVariant"
					data-bs-slide-to="1"
					aria-label="Slide 1"
				></button>
				<button
					data-bs-target="#carouselDarkVariant"
					data-bs-slide-to="2"
					aria-label="Slide 1"
				></button>
			</div>

			<div className="carousel-inner carousel-config relative w-full overflow-hidden md:h-1/2 ">
				<div className="carousel-item active relative float-left w-full">
					<img
						src="https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						className="block w-full"
						alt="Motorbike Smoke"
					/>
					<div className="carousel-caption hidden md:block absolute text-center">
						<blockquote className="text-xl italic font-semibold text-slate-100">
							“There is more treasure in books than in all the pirate’s loot on
							Treasure Island.”
						</blockquote>
						<p className="text-2xl font-semibold text-slate-200">
							Walt Disney ( American entrepreneur, animator, writer, voice actor
							and film producer.)
						</p>
					</div>
				</div>

				<div className="carousel-item relative float-left w-full">
					<img
						src="https://images.unsplash.com/photo-1456315138460-858d1089ddba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						className="block w-full"
						alt="Mountaintop"
					/>
					<div className="carousel-caption hidden md:block absolute text-center">
						<blockquote className="text-xl italic font-semibold text-slate-100">
							“Despite the enormous quantity of books, how few people read! And
							if one reads profitably, one would realize how much stupid stuff
							the vulgar herd is content to swallow every day.”
						</blockquote>
						<p className="text-2xl font-semibold text-slate-200">
							Voltaire (French Enlightenment writer, historian, and philosopher)
						</p>
					</div>
				</div>

				<div className="carousel-item relative float-left w-full">
					<img
						src="https://images.unsplash.com/photo-1523043829291-4195e5c69656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						className="block w-full"
						alt="Woman Reading a Book"
					/>
					<div className="carousel-caption hidden md:block absolute text-center">
						<blockquote className="text-xl italic font-semibold text-slate-100">
							“Show me a family of readers, and I will show you the people who
							move the world.”
						</blockquote>
						<p className="text-2xl font-semibold text-slate-200">
							Napoléon Bonaparte (French military and political leader)
						</p>
					</div>
				</div>
			</div>

			<button
				className=" carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
				type="button"
				data-bs-target="#carouselDarkVariant"
				data-bs-slide="prev"
			>
				<span
					className=" carousel-control-prev-icon inline-block bg-no-repeat"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
				type="button"
				data-bs-target="#carouselDarkVariant"
				data-bs-slide="next"
			>
				<span
					className="carousel-control-next-icon inline-block bg-no-repeat"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default Carousel;
