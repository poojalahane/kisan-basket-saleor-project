import React from "react";
import Image from "next/image";

import OutletSection from "./OutletSection";
import OutletList from "@/ui/components/outlet/OutletList";
const MainOutlet = () => {
	const outlets = [
		{
			id: 0,
			imageSrc: "/outletimages/coldpressoilimage.svg",
			title: "Kisan Basket Cold-Pressed Oils",
			description:
				"Kisan Basket Cold-Pressed Oils are naturally extracted using traditional wooden presses, preserving nutrients and rich flavor. Pure, chemical-free, and made from farm-fresh seeds — perfect for healthy everyday cooking",
			bestFor: "🌿 100% natural, unrefined & chemical-free",
			signatureFeature: "🪵 Cold-pressed using traditional wooden ghani method",
			sectionImageSrc: "/images/outletsectionimage1.svg",
		},

		{
			id: 1,
			imageSrc: "/outletimages/aataimageoutlet.svg",
			title: "Magarpatta OutLet",
			description:
				"Kisan Basket Atta is made from premium, handpicked grains, Maually-ground to retain fiber, nutrients, and natural aroma. Freshly milled in small batches, it's wholesome, soft, and perfect for everyday rotis. Key Highlights:  ",
			bestFor: "🌾 Maually--ground from high-quality, farm-sourced grains",
			signatureFeature: "🍞 Rich in fiber, naturally aromatic & chemical-free",
			sectionImageSrc: "/images/outletsectionimage2.svg",
		},
		{
			id: 2,
			imageSrc: "/outletimages/vegetablesimage.svg",
			title: "Kisan basket vegetables",
			description:
				"Kisan Basket Vegetables are farm-fresh, naturally grown, and delivered straight from the source. Handpicked for quality and taste, our veggies are free from harmful chemicals and full of natural goodness.",
			bestFor: "🥬 Freshly harvested & locally sourced",
			signatureFeature: "🚫 No harmful chemicals or artificial ripening",
			sectionImageSrc: "/images/outletsectionimage3.svg",
		},
		{
			id: 3,
			imageSrc: "/outletimages/mangoesimage.svg",
			title: "kisan basket hapus mangoes",
			description:
				"Kisan Basket Hapus Mangoes are naturally ripened, handpicked from the orchards of Ratnagiri and Devgad. Juicy, aromatic, and bursting with sweetness — these Alphonso mangoes are the true taste of summer.",
			bestFor: "🥭 GI-tagged, carbide-free Alphonso mangoes from Ratnagiri & Devgad",
			signatureFeature: "🍯 Naturally ripened for rich flavor and sweetness",
			sectionImageSrc: "/images/outletsectionimage4.svg",
		},
		{
			id: 4,
			imageSrc: "/outletimages/haldiimage.svg",
			title: "Kisan basket Organic haldi",
			description:
				"Kisan Basket Organic Halad is sourced from the fertile lands of Hingoli/vasmat known for its rich curcumin content and purity. Sun-dried and stone-ground, it brings vibrant color, earthy aroma, and powerful health benefits to your kitchen.",
			bestFor: "🌿 Naturally grown in Hingoli/vasmat, rich in curcumin",
			signatureFeature: "🌞 Sun-dried & stone-ground for maximum potency and flavor",
		},
	];
	return (
		<div className="">
			{/* title */}
			<div className="relative h-[25vh] max-h-[200px] w-full overflow-hidden md:h-[35vh] md:max-h-[280px] lg:h-[60vh] lg:max-h-[500px]">
				<Image
					src="/outletimages/outletbannerimage.jpg"
					alt="kisan basket image"
					fill
					className="lg:object-cover"
				/>
			</div>

			{/* outlet main content */}
			<div className="bg-[#E3DFDF]">
				{/* home image */}
				{/* <div className=" hidden lg:flex lg:justify-end   lg:px-24 lg:py-16">
					<div className="relative  h-[120px]  w-[140px]  md:h-[229px] md:w-[240px] ">
						<Image
							src="/outletimages/outlethomeimage.svg"
							alt="kisan basket image"
							fill
							className="object-contain lg:object-cover"
						/>
					</div>
				</div> */}
				{/* shop outlet section */}
				{/* <div>
					<ShopPage />
				</div> */}
				<div>
					<div className=" lg:px-18 bg-[#EAE6E6] p-4 md:px-10 md:py-6 lg:py-10 ">
						<OutletList />
					</div>
				</div>
			</div>
			{/* what make unique section  whatmakesuniquetitle.svg */}
			<div className=" bg-[#F1F3F4]">
				{/* heading  */}
				<div className="flex items-center justify-center">
					<div className="relative mt-4 h-[50px] w-[250px] md:mt-6 md:h-[74px] md:w-[320px] lg:mb-20 lg:mt-32 lg:h-[100px] lg:w-[700px] ">
						<Image
							src="/outletimages/whatmakesuniquetitle.svg"
							alt="From to Table Journey Title"
							fill
							style={{ objectFit: "contain" }}
						/>
					</div>
				</div>

				<div className=" ">
					{outlets.map((outlet) => (
						<OutletSection
							key={outlet.id}
							id={outlet.id}
							imageSrc={outlet.imageSrc}
							title={outlet.title}
							description={outlet.description}
							bestFor={outlet.bestFor}
							signatureFeature={outlet.signatureFeature}
							sectionImageSrc={outlet.sectionImageSrc}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default MainOutlet;
