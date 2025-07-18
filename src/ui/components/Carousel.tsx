"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight, Leaf, Shield, Truck } from "lucide-react";

type MediaItem = {
	type: "image" | "video" | "youtube";
	src: string;
};

const mediaItems: MediaItem[] = [
	{ type: "image", src: "/images/banner-2.png" },
	{ type: "image", src: "/images/banner-1.jpeg" },
	{ type: "image", src: "/images/banner-3.png" },
];

const CarouselHeroSection: React.FC = () => {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
		}, 6000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			className="relative min-h-[600px] overflow-hidden bg-gradient-to-br via-white"
			style={{
				backgroundImage: `linear-gradient(to bottom right, #FFF8DC, white, #FFF8DC)`,
			}}
		>
			<div className="bg-grain-texture absolute inset-0 opacity-5"></div>
			<div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					{/* Left Content */}
					<div className=" animate-fade-in">
						<h1
							className="mb-6 text-balance text-4xl font-bold md:text-6xl"
							style={{ color: "#8B4513" }} // brown
						>
							Pure, Fresh & Local
							<span className="block" style={{ color: "#8BC34A" }}>
								Delivered to Your Doorstep!
							</span>
						</h1>
						<p className="mb-8 text-balance text-xl" style={{ color: "#654321" }}>
							Experience the finest organic produce, traditional atta, cold-pressed oils, and authentic spices
							directly from local farms.
						</p>
						<div className="flex flex-col gap-4 sm:flex-row">
							<button
								className="flex items-center justify-center rounded-md px-8 py-4 text-lg font-semibold"
								style={{ backgroundColor: "#8BC34A", color: "#fff" }}
							>
								Shop Now
								<ArrowRight className="ml-2 h-5 w-5" />
							</button>
							<button
								className="rounded-md border px-8 py-4 text-lg font-semibold hover:bg-[#8BC34A] hover:text-white"
								style={{
									color: "#8B4513", // brown
									borderColor: "#DAA520", // gold border
								}}
							>
								Explore Categories
							</button>
						</div>
					</div>

					{/* Right Side Carousel */}
					<div className="animate-slide-in relative h-[530px] w-full overflow-visible rounded-2xl shadow-2xl">
						{mediaItems.map((item, index) => {
							const isActive = index === current;
							const commonClasses = `absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
								isActive ? "opacity-100 z-10" : "opacity-0 z-0"
							}`;

							if (item.type === "image") {
								return (
									<img
										key={index}
										src={item.src}
										alt={`slide-${index}`}
										className={`${commonClasses} h-full w-full rounded-2xl object-cover`}
									/>
								);
							}

							if (item.type === "video") {
								return (
									<video
										key={index}
										src={item.src}
										autoPlay={isActive}
										muted
										loop
										playsInline
										preload="auto"
										className={`${commonClasses} h-full w-full rounded-2xl object-cover`}
									/>
								);
							}

							if (item.type === "youtube" && isActive) {
								return (
									<iframe
										key={index}
										src={item.src}
										allow="autoplay; encrypted-media"
										allowFullScreen
										title={`YouTube video ${index}`}
										className={`${commonClasses} h-full w-full rounded-2xl`}
									></iframe>
								);
							}
							return null;
						})}

						{/* Floating badges */}
						<div className="absolute left-4 top-4 z-20 rounded-lg bg-white/90 p-3 shadow-lg backdrop-blur-md">
							<div className="flex items-center space-x-2">
								<Shield className="h-5 w-5" style={{ color: "#8BC34A" }} />
								<span className="text-sm font-medium" style={{ color: "#654321" }}>
									100% Organic
								</span>
							</div>
						</div>

						<div className="absolute bottom-4 right-4 z-20 rounded-lg bg-white/90 p-3 shadow-lg backdrop-blur-md">
							<div className="flex items-center space-x-2">
								<Truck className="h-5 w-5" style={{ color: "#8BC34A" }} />
								<span className="text-sm font-medium" style={{ color: "#654321" }}>
									Same Day Delivery
								</span>
							</div>
						</div>

						<div
							className="absolute -right-6 -top-6 z-50 rounded-full p-4 shadow-xl"
							style={{ backgroundColor: "#8BC34A", color: "#fff" }}
						>
							<Leaf className="h-8 w-8" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CarouselHeroSection;
