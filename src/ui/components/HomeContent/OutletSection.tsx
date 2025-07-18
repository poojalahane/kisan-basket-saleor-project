// "use client";

// import { useState } from "react";
// import Image from "next/image";

// type Shop = {
// 	id: string;
// 	name: string;
// 	location: string;
// 	address: string;
// 	phone: string;
// 	startTime: string;
// 	endTime: string;
// 	imageUrl: string;
// };

// const shops: Shop[] = [
// 	{
// 		id: "magarpatta",
// 		name: "Kisan Basket Shop",
// 		location: "Magarpatta",
// 		address: "Magarpatta City, Pune",
// 		phone: "9868062963",
// 		startTime: "Monday-Friday 9AM",
// 		endTime: "Monday-Friday 8PM",
// 		imageUrl: "/images/magarpatta.png",
// 	},
// 	{
// 		id: "baner",
// 		name: "Kisan Basket Shop",
// 		location: "Baner",
// 		address: "Baner Road, Pune",
// 		phone: "9823456789",
// 		startTime: "Monday-Saturday 10AM",
// 		endTime: "Monday-Saturday 9PM",
// 		imageUrl: "/images/magarpatta.png",
// 	},
// 	{
// 		id: "hadapsar",
// 		name: "Kisan Basket Shop",
// 		location: "Hadapsar",
// 		address: "Hadapsar Industrial Area, Pune",
// 		phone: "9845123456",
// 		startTime: "Monday-Saturday 9AM",
// 		endTime: "Monday-Saturday 8PM",
// 		imageUrl: "/images/magarpatta.png",
// 	},
// 	{
// 		id: "mulshi",
// 		name: "Kisan Basket Shop",
// 		location: "Mulshi",
// 		address: "Mulshi Road, Pune",
// 		phone: "9812345678",
// 		startTime: "Monday-Sunday 8AM",
// 		endTime: "Monday-Sunday 7PM",
// 		imageUrl: "/images/magarpatta.png",
// 	},
// ];

// export default function ShopPage() {
// 	const [selectedId, setSelectedId] = useState("magarpatta");
// 	const selectedShop = shops.find((s) => s.id === selectedId)!;

// 	return (
// 		<div className="max-w-7xl  md:mx-auto md:py-4  md:pb-8 lg:p-8 lg:pb-16">
// 			{/* Title */}
// 			<div className="relative z-10 mb-4 flex justify-center pt-2 md:mb-6 lg:mb-6 lg:mt-1">
// 				<div className="relative h-[50px] w-[250px] md:h-[74px] md:w-[320px] lg:h-[88px] lg:w-[565px]">
// 					<Image
// 						src="/images/exploretheworldimage.svg"
// 						alt="From to Table Journey Title"
// 						fill
// 						style={{ objectFit: "contain" }}
// 					/>
// 				</div>
// 			</div>
// 			<div className="flex w-full flex-col items-center justify-center gap-8 px-4 lg:flex-row lg:items-start lg:px-10 lg:py-8">
// 				{/* Mobile/Tablet Selector */}
// 				<div className="mb-4 flex w-full flex-wrap justify-center gap-3 lg:hidden">
// 					{shops.map((shop) => (
// 						<button
// 							key={shop.id}
// 							onClick={() => setSelectedId(shop.id)}
// 							className={`rounded-full border px-4 py-1 text-sm ${
// 								selectedId === shop.id ? "bg-[#A9B243] text-white" : "border-[#A09898] text-black"
// 							}`}
// 						>
// 							{shop.location}
// 						</button>
// 					))}
// 				</div>

// 				{/* Image section */}
// 				<div className="relative h-[300px] w-full overflow-hidden rounded-3xl sm:h-[400px] lg:h-[450px] lg:w-[45%]">
// 					<Image src={selectedShop.imageUrl} alt={selectedShop.location} fill className="z-0 object-cover" />

// 					<div className="absolute left-0 top-0 z-10 flex h-full w-[75%] flex-col justify-center bg-[#d3cccce7] p-4 text-black sm:w-[55%] sm:p-6 lg:w-[45%]">
// 						<h2 className="text-xl font-bold capitalize leading-tight sm:text-2xl sm:leading-10 lg:text-3xl">
// 							kisan
// 							<br />
// 							basket
// 							<br />
// 							shop
// 							<br />
// 							{selectedShop.location}
// 						</h2>

// 						<div className="mt-6 flex h-12 w-[80%] items-center justify-between rounded-full border-4 border-[#888484] px-4 sm:mt-24">
// 							<div className="text-base font-light sm:text-lg">Explore</div>
// 							<div className="relative h-4 w-4 sm:h-6 sm:w-6">
// 								<Image src="/images/rightArow.svg" alt="arrow" fill />
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Location Info section */}
// 				<div className="flex w-full flex-col items-center lg:w-[50%]">
// 					{/* Desktop Selector */}
// 					<div className="mb-6 hidden justify-center gap-5 lg:flex">
// 						{shops.map((shop) => (
// 							<button
// 								key={shop.id}
// 								onClick={() => setSelectedId(shop.id)}
// 								className={`rounded-full border px-6 py-2 transition-all ${
// 									selectedId === shop.id ? "bg-[#A9B243] text-white" : "border-[#A09898] text-black"
// 								}`}
// 							>
// 								{shop.location}
// 							</button>
// 						))}
// 					</div>

// 					{/* Info Card */}
// 					<div className="w-full space-y-5 rounded-2xl border border-[#A09898] p-5 text-black sm:w-[90%] sm:p-6 lg:w-[75%]">
// 						<h2 className="text-center text-lg font-semibold leading-tight sm:text-left sm:text-xl">
// 							{selectedShop.name} {selectedShop.location}
// 						</h2>

// 						<div className="space-y-4">
// 							{/* Address */}
// 							<div className="flex items-start gap-3 text-sm">
// 								<div className="relative h-4 w-4 sm:h-6 sm:w-6">
// 									<Image src="/images/locationIcon.svg" alt="location" fill />
// 								</div>
// 								<div>
// 									<div className="font-bold">Address</div>
// 									<div>{selectedShop.address}</div>
// 								</div>
// 							</div>

// 							{/* Phone */}
// 							<div className="flex items-start gap-3 text-sm">
// 								<div className="relative h-4 w-4 sm:h-6 sm:w-6">
// 									<Image src="/images/phoneIcon.svg" alt="phone" fill />
// 								</div>
// 								<div>
// 									<div className="font-bold">Phone</div>
// 									<div>{selectedShop.phone}</div>
// 								</div>
// 							</div>

// 							{/* Starts */}
// 							<div className="flex items-start gap-3 text-sm">
// 								<div className="relative h-4 w-4 sm:h-6 sm:w-6">
// 									<Image src="/images/timeStart.svg" alt="start time" fill />
// 								</div>
// 								<div>
// 									<div className="font-bold">Starts</div>
// 									<div>{selectedShop.startTime}</div>
// 								</div>
// 							</div>

// 							{/* Ends */}
// 							<div className="flex items-start gap-3 text-sm">
// 								<div className="relative h-4 w-4 sm:h-6 sm:w-6">
// 									<Image src="/images/TimeEnd.svg" alt="end time" fill />
// 								</div>
// 								<div>
// 									<div className="font-bold">Ends</div>
// 									<div>{selectedShop.endTime}</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

"use client";

import { useState } from "react";
import Image from "next/image";

type Shop = {
	id: string;
	name: string;
	location: string;
	address: string;
	phone: string;
	startTime: string;
	endTime: string;
	imageUrl: string;
};

const shops: Shop[] = [
	{
		id: "magarpatta",
		name: "Kisan Basket Shop",
		location: "Magarpatta",
		address: "Magarpatta City, Pune",
		phone: "9868062963",
		startTime: "Monday-Friday 9AM",
		endTime: "Monday-Friday 8PM",
		imageUrl: "/images/magarpatta.png",
	},
	{
		id: "baner",
		name: "Kisan Basket Shop",
		location: "Baner",
		address: "Baner Road, Pune",
		phone: "9823456789",
		startTime: "Monday-Saturday 10AM",
		endTime: "Monday-Saturday 9PM",
		imageUrl: "/images/magarpatta.png",
	},
	{
		id: "hadapsar",
		name: "Kisan Basket Shop",
		location: "Hadapsar",
		address: "Hadapsar Industrial Area, Pune",
		phone: "9845123456",
		startTime: "Monday-Saturday 9AM",
		endTime: "Monday-Saturday 8PM",
		imageUrl: "/images/magarpatta.png",
	},
	{
		id: "mulshi",
		name: "Kisan Basket Shop",
		location: "Mulshi",
		address: "Mulshi Road, Pune",
		phone: "9812345678",
		startTime: "Monday-Sunday 8AM",
		endTime: "Monday-Sunday 7PM",
		imageUrl: "/images/magarpatta.png",
	},
];

export default function ShopPage() {
	const [selectedId, setSelectedId] = useState("magarpatta");
	const selectedShop = shops.find((s) => s.id === selectedId)!;

	return (
		<section className="bg-white py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Shop Selector - Desktop */}
				{/* <div className="mb-10 hidden justify-center gap-4 lg:flex">
					{shops.map((shop) => (
						<button
							key={shop.id}
							onClick={() => setSelectedId(shop.id)}
							className={`rounded-full border px-6 py-2 transition-all ${
								selectedId === shop.id ? "bg-[#8bc34a] text-white" : "border-[#A09898] text-black"
							}`}
						>
							{shop.location}
						</button>
					))}
				</div> */}

				{/* Shop Selector - Mobile */}
				<div className="mb-8 flex flex-wrap justify-center gap-3 lg:hidden">
					{shops.map((shop) => (
						<button
							key={shop.id}
							onClick={() => setSelectedId(shop.id)}
							className={`rounded-full border px-4 py-1 text-sm ${
								selectedId === shop.id ? "bg-[#8bc34a] text-white" : "border-[#A09898] text-black"
							}`}
						>
							{shop.location}
						</button>
					))}
				</div>

				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					{/* Text + Info */}
					<div>
						<h2 className="mb-6 text-3xl font-bold text-[#5d4037] md:text-4xl">Visit Our Physical Store</h2>
						<p className="mb-8 text-xl text-gray-600">
							Visit our <strong>{selectedShop.location}</strong> outlet to explore fresh produce and get
							expert advice on natural living.
						</p>

						<div className="mb-8 space-y-4">
							<div className="flex items-center space-x-3">
								<div className="h-2 w-2 rounded-full bg-[#8bc34a]" />
								<span className="text-gray-700">Address: {selectedShop.address}</span>
							</div>
							<div className="flex items-center space-x-3">
								<div className="h-2 w-2 rounded-full bg-[#8bc34a]" />
								<span className="text-gray-700">Phone: {selectedShop.phone}</span>
							</div>
							<div className="flex items-center space-x-3">
								<div className="h-2 w-2 rounded-full bg-[#8bc34a]" />
								<span className="text-gray-700">
									Timings: {selectedShop.startTime} - {selectedShop.endTime}
								</span>
							</div>
						</div>

						<div className="flex flex-col gap-4 sm:flex-row">
							<button className="rounded-lg bg-[#8bc34a] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#689f38]">
								Get Directions
							</button>
							<button className="rounded-lg border border-[#5d4037] px-6 py-3 text-base font-semibold text-[#5d4037] transition hover:bg-[#5d4037] hover:text-white">
								Chat with Us
							</button>
						</div>
					</div>

					<div className="relative">
						<Image
							src={selectedShop.imageUrl}
							alt={selectedShop.location}
							width={500}
							height={300}
							className="h-auto w-full rounded-2xl object-cover shadow-2xl"
						/>
						<div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent" />
						<div className="absolute bottom-6 left-6 text-white">
							<h3 className="mb-1 text-xl font-bold">{selectedShop.name}</h3>
							<p className="text-white/90">{selectedShop.address}</p>
							<p className="text-white/90">
								Open: {selectedShop.startTime} - {selectedShop.endTime}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
