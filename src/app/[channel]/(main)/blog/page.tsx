import React from "react";
import Image from "next/image";
import BlogCard from "@/ui/components/blog/BlogCard";
const page = async (props: { params: Promise<{ channel: string }> }) => {
	const channel = (await props.params).channel;
	type Blog = {
		title: string;
		description: string;
		imageUrl: string;
		author: string;
		date: string;
	};

	const blogs: Blog[] = [
		{
			title: "Pure Desi Ghee ",
			description:
				"Explore the health benefits of consuming pure desi ghee daily. Kisan Basket delivers farm-fresh ghee straight from local dairies.",
			imageUrl: "/blogimages/ghee.svg",
			author: "Puja Lahane",
			date: "July 10, 2025",
		},
		{
			title: "Seasonal Mangoes ",
			description:
				"Enjoy sweet, juicy Alphonso mangoes picked fresh from Maharashtra farms. Limited stock—order now on Kisan Basket.",
			imageUrl: "/blogimages/ghee.svg",
			author: "Kisan Basket Blog",
			date: "July 8, 2025",
		},
		// {
		// 	title: "Organic Vegetables?",
		// 	description:
		// 		"Organic vegetables are not only healthy but also free from harmful pesticides. Learn why more families are choosing organic today.",
		// 	imageUrl: "/blogimages/vegetables.jpg",
		// 	author: "Kisan Basket Writer",
		// 	date: "July 6, 2025",
		// },
	];
	return (
		<div>
			<div
				className="h-auto min-h-[400px] w-full bg-[#E3DFDF] "
				style={{ boxShadow: "4px 4px 7.2px 0px #716B6B40" }}
			>
				{/* Hero Banner */}
				<div className="relative w-full md:h-[238px] lg:h-[289px]">
					{/* background image */}
					<Image
						src="/shoppageimages/shoppageherosectionimage.svg"
						alt="kisan basket image"
						fill
						className="object-cover"
					/>
				</div>

				{/* main content */}
				<div className="">
					{/* title */}
					<div className="flex justify-center  py-2 md:py-4">
						<div className="relative aspect-[16/5] w-[220px] px-4  md:w-[300px] lg:w-[450px]">
							<Image
								src="/blogimages/blogtitleimage.svg"
								alt="Kisan Basket"
								fill
								className="object-contain"
							/>
						</div>
					</div>

					{/* all blogs */}
					<div className="flex flex-col items-center justify-center">
						<section className=" px-4 pb-4 md:px-10 ">
							<div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-8 lg:grid-cols-2">
								{blogs.map((blog, idx) => (
									<BlogCard key={idx} {...blog} channel={channel} />
								))}
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
