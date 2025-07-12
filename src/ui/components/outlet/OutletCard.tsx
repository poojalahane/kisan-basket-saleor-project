"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Outlet {
	name: string;
	image: string;
	address: string;
	phone: string;
	starts: string;
	ends: string;
	mapEmbedUrl: string;
}

const outletData: Outlet[] = [
	{
		name: "Magarpatta",
		image: "/outletimages/outletbannerimage.svg",
		address: "lorem epsum uijoi n xsnxjniu",
		phone: "9860862963",
		starts: "Monday–Friday 9AM",
		ends: "Monday–Friday 8PM",
		mapEmbedUrl: "https://www.google.com/maps/embed?...",
	},
	{
		name: "Baner",
		image: "/outletimages/outletbannerimage.svg",
		address: "lorem epsum uijoi n xsnxjniu",
		phone: "9860862963",
		starts: "Monday–Friday 9AM",
		ends: "Monday–Friday 8PM",
		mapEmbedUrl: "https://www.google.com/maps/embed?...",
	},
	{
		name: "Hadapsar",
		image: "/outletimages/outletbannerimage.svg",
		address: "lorem epsum uijoi n xsnxjniu",
		phone: "9860862963",
		starts: "Monday–Friday 9AM",
		ends: "Monday–Friday 8PM",
		mapEmbedUrl: "https://www.google.com/maps/embed?...",
	},
	{
		name: "Wagholi",
		image: "/outletimages/outletbannerimage.svg",
		address: "lorem epsum uijoi n xsnxjniu",
		phone: "9860862963",
		starts: "Monday–Friday 9AM",
		ends: "Monday–Friday 8PM",
		mapEmbedUrl: "https://www.google.com/maps/embed?...",
	},
];

const InfoRow = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
	<div className="flex items-start gap-3 text-sm">
		<div className="relative mt-1 h-6 w-6 min-w-[24px]">
			<Image src={icon} alt={label} fill />
		</div>
		<div>
			<div className="mt-1 text-base font-bold text-[#7A7676] md:text-lg lg:text-[20px]">{label}</div>
			<div className="mt-1 text-sm text-black md:text-base">{value}</div>
		</div>
	</div>
);

export default function OutletCard() {
	const [selectedTab, setSelectedTab] = useState("Magarpatta");
	const outlet = outletData.find((o) => o.name === selectedTab)!;

	return (
		<div className="max-w-7xl  md:mx-auto md:p-4  md:pb-4 lg:px-8 lg:pb-8">
			<section className="flex flex-col gap-6 lg:flex-row">
				{/* Left Image */}
				<div className="relative h-[250px] w-full  overflow-hidden rounded-xl shadow-md sm:h-[300px] lg:h-[540px]  lg:w-[40%]">
					<Image
						src={outlet.image}
						alt={outlet.name}
						fill
						className="rounded-lg object-cover"
						sizes="(max-width: 1024px) 100vw, 442px"
					/>
				</div>

				{/* Right Content */}
				<div className="flex flex-col gap-4 lg:h-[540px] lg:w-[60%]">
					{/* Tab Buttons */}
					<div className="flex flex-wrap justify-center gap-3 rounded-[25px] bg-[#F8F5F5] p-3 shadow-md">
						{outletData.map((o) => (
							<button
								key={o.name}
								onClick={() => setSelectedTab(o.name)}
								className={`rounded-full px-8 py-2 text-sm font-semibold transition md:text-base lg:text-lg ${
									selectedTab === o.name ? "bg-[#A9B243] text-white" : "border border-[#A09898]  text-black"
								}`}
							>
								{o.name}
							</button>
						))}
					</div>

					{/* Info + Map */}
					<div className="flex flex-col gap-6 rounded-2xl bg-[#F8F5F5] p-6 shadow-sm lg:flex-row lg:items-start lg:gap-8">
						{/* Info Section */}
						<div className="flex-1">
							<h2 className="mb-4 text-2xl font-semibold lg:text-3xl">{outlet.name}</h2>
							<div className="space-y-4">
								<InfoRow icon="/images/locationIcon.svg" label="Address" value={outlet.address} />
								<InfoRow icon="/images/phoneIcon.svg" label="Phone" value={outlet.phone} />
								<InfoRow icon="/images/timeStart.svg" label="Starts" value={outlet.starts} />
								<InfoRow icon="/images/TimeEnd.svg" label="Ends" value={outlet.ends} />
							</div>
						</div>

						{/* Map Section */}
						<div className="h-64 w-full overflow-hidden rounded-xl lg:h-[400px] lg:w-[360px]">
							<iframe
								src={outlet.mapEmbedUrl}
								className="h-full w-full border-0"
								loading="lazy"
								allowFullScreen
								title={`Map for ${outlet.name}`}
							></iframe>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// interface Outlet {
// 	name: string;
// 	image: string;
// 	address: string;
// 	phone: string;
// 	starts: string;
// 	ends: string;
// 	mapEmbedUrl: string;
// }

// const outletData: Outlet[] = [
// 	{
// 		name: "Magarpatta",
// 		image: "/images/outletbannerimage.svg",
// 		address: "lorem epsum uijoi n xsnxjniu",
// 		phone: "9860862963",
// 		starts: "Monday–Friday 9AM",
// 		ends: "Monday–Friday 8PM",
// 		mapEmbedUrl: "https://www.google.com/maps/embed?...",
// 	},
// 	{
// 		name: "Baner",
// 		image: "/images/outletbannerimage.svg",
// 		address: "lorem epsum uijoi n xsnxjniu",
// 		phone: "9860862963",
// 		starts: "Monday–Friday 9AM",
// 		ends: "Monday–Friday 8PM",
// 		mapEmbedUrl: "https://www.google.com/maps/embed?...",
// 	},
// 	{
// 		name: "Hadapsar",
// 		image: "/images/outletbannerimage.svg",
// 		address: "lorem epsum uijoi n xsnxjniu",
// 		phone: "9860862963",
// 		starts: "Monday–Friday 9AM",
// 		ends: "Monday–Friday 8PM",
// 		mapEmbedUrl: "https://www.google.com/maps/embed?...",
// 	},
// 	{
// 		name: "Bhugaon",
// 		image: "/images/outletbannerimage.svg",
// 		address: "lorem epsum uijoi n xsnxjniu",
// 		phone: "9860862963",
// 		starts: "Monday–Friday 9AM",
// 		ends: "Monday–Friday 8PM",
// 		mapEmbedUrl: "https://www.google.com/maps/embed?...",
// 	},
// ];

// export default function OutletCard() {
// 	const [selectedTab, setSelectedTab] = useState("Magarpatta");
// 	const outlet = outletData.find((o) => o.name === selectedTab)!;

// 	return (
// 		<div className="w-full ">
// 			{/* Outlet Content */}
// 			<div className="w-full rounded-xl   md:gap-2 lg:flex">
// 				{/* Image Section */}
// 				<div className="overflow-hidden rounded-lg lg:w-[35%]">
// 					<div className="relative aspect-[442/548] w-full h-[250px] md:h-[300px] lg:h-[548px] lg:w-[442px]">
// 						<Image
// 							src={outlet.image}
// 							alt={outlet.name}
// 							fill
// 							className="rounded-lg object-cover"
// 							sizes="(max-width: 1023px) 100vw, 442px"
// 							style={{ boxShadow: "5px 4px 6.2px 0px #69666621" }}
// 						/>
// 					</div>
// 				</div>

// 				{/* Details Section */}
// 				<div>
// 					{/* Tab Switcher */}
// 					<div
// 						style={{ boxShadow: "5px 4px 6.2px 0px #69666621" }}
// 						className="mt-2 flex h-[78px] w-full  items-center justify-center rounded-[25px] bg-[#F8F5F5] md:mt-4 lg:mt-0 lg:w-[833px]"
// 					>
// 						<div className="flex flex-wrap gap-4 ">
// 							{outletData.map((outlet) => (
// 								<button
// 									key={outlet.name}
// 									onClick={() => setSelectedTab(outlet.name)}
// 									className={`rounded-[28px] px-4 py-2 text-sm font-semibold transition ${
// 										selectedTab === outlet.name
// 											? "bg-[#A9B243] leading-[100%]  tracking-[0%] text-white md:text-[20px]"
// 											: "border border-[#A09898] bg-white font-bold leading-[100%] tracking-[0%] text-black md:text-[20px]"
// 									}`}
// 								>
// 									{outlet.name}
// 								</button>
// 							))}
// 						</div>
// 					</div>
// 					{/* map section and info section */}
// 					<div className="mt-2 w-full justify-around gap-4 space-y-4 rounded-[20px] bg-[#F8F5F5]  p-4 leading-[100%] tracking-[0%] text-black md:mt-4 md:flex lg:mt-6 lg:h-[448px] lg:gap-8  ">
// 						<div>
// 							<h2 className="mt-12 font-normal lg:text-[40px]">{outlet.name}</h2>
// 							<div className="mt-6 space-y-2">
// 								{/* Address */}
// 								<div className="mt-2 flex items-start gap-3 text-sm">
// 									<div className="relative mt-2 h-[28px] w-[28px] sm:h-6 sm:w-6">
// 										<Image src="/images/locationIcon.svg" alt="location" fill />
// 									</div>
// 									<div>
// 										<div className="mt-2 font-bold text-[#7A7676] lg:text-[24px]">Address</div>
// 										<div className="mt-1 lg:mt-2 lg:text-[16px]">{outlet.address}</div>
// 									</div>
// 								</div>

// 								{/* Phone */}
// 								<div className="mt-2 flex items-start gap-3 text-sm">
// 									<div className="relative mt-2 h-4 w-4 sm:h-6 sm:w-6">
// 										<Image src="/images/phoneIcon.svg" alt="phone" fill />
// 									</div>
// 									<div>
// 										<div className="mt-2 font-bold text-[#7A7676] lg:text-[24px]">Phone</div>
// 										<div className="mt-1 lg:mt-2 lg:text-[20px]">{outlet.phone}</div>
// 									</div>
// 								</div>

// 								{/* Starts */}
// 								<div className="mt-2 flex items-start gap-3 text-sm">
// 									<div className="relative mt-2 h-4 w-4 sm:h-6 sm:w-6">
// 										<Image src="/images/timeStart.svg" alt="start time" fill />
// 									</div>
// 									<div>
// 										<div className="mt-2 font-bold text-[#7A7676] lg:text-[24px]">Starts</div>
// 										<div className="mt-1 lg:mt-2 lg:text-[16px]">{outlet.starts}</div>
// 									</div>
// 								</div>

// 								{/* Ends */}
// 								<div className="mt-2 flex items-start gap-3 text-sm">
// 									<div className="relative mt-2 h-4 w-4 sm:h-6 sm:w-6">
// 										<Image src="/images/TimeEnd.svg" alt="end time" fill />
// 									</div>
// 									<div>
// 										<div className="mt-2 font-bold text-[#7A7676] lg:text-[24px]">Ends</div>
// 										<div className="mt-1 lg:mt-2 lg:text-[16px]">{outlet.ends}</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>

// 						{/* Map */}
// 						<div className="mt-4 h-64 w-full overflow-hidden rounded-[31px] lg:h-[399px] lg:w-[412px]">
// 							<iframe
// 								src={outlet.mapEmbedUrl}
// 								className="h-full w-full border-none"
// 								allowFullScreen
// 								loading="lazy"
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
