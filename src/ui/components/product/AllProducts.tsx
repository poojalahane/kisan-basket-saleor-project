"use client";
import React from "react";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { FaIndianRupeeSign } from "react-icons/fa6";
interface Product {
	id: number;
	name: string;
	image: string;
	price: string;
	rating: number;
}

const products: Product[] = [
	{
		id: 1,
		name: "Vegetables",
		image: "/images/category1.svg",
		price: "25/kg",
		rating: 4,
	},
	// {
	// 	id: 2,
	// 	name: "Fruits",
	// 	image: "/images/category2.svg",
	// 	price: "₹60/kg",
	// },
	// {
	// 	id: 3,
	// 	name: "Dairy",
	// 	image: "/images/category3.svg",
	// 	price: "₹90/kg",
	// },
	// {
	// 	id: 4,
	// 	name: "Snacks",
	// 	image: "/images/category4.svg",
	// 	price: "₹45/pack",
	// },
];
//#CCC8D1
const AllProducts = () => {
	return (
		<div className="flex flex-wrap justify-center gap-6  bg-[#efefea] py-10">
			{products.map((product) => (
				<div
					key={product.id}
					className="rounded-[32px] bg-white"
					style={{
						width: "296px",
						height: "469px",
						borderRadius: "32px",
						boxShadow: "5px 7px 8.8px 2px #615A5A40",
					}}
				>
					<div className="rounded-[32px] border-8 border-white">
						{/* Image section */}
						<div className="relative h-[200px] w-full overflow-hidden rounded-[32px] bg-[#B4CDCB]">
							<Image src={product.image} alt={product.name} fill className="object-contain p-6" />
						</div>

						{/* Info section */}
						<div className="p-5">
							<h4 className="text-productPriceColor text-base font-medium capitalize leading-[1.2] sm:text-lg md:text-[17px]">
								{product.name}
							</h4>
							<div className="mt-2 flex items-center space-x-1 text-xs text-black">
								{[...Array(5)].map((_, i) =>
									i < product.rating ? (
										<FaStar key={i} className="text-xs sm:text-sm" />
									) : (
										<FaRegStar key={i} className="text-xs sm:text-sm" />
									),
								)}
							</div>

							<div className="mt-2 flex items-center gap-1 text-sm leading-[1.2] text-gray-400 line-through sm:text-base">
								<FaIndianRupeeSign />
								{product.price}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default AllProducts;
