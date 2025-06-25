"use client";
import React from "react";
import Image from "next/image";

interface Product {
	id: number;
	name: string;
	image: string;
	price: string;
}

const products: Product[] = [
	{
		id: 1,
		name: "Vegetables",
		image: "/images/category1.svg",
		price: "₹25/kg",
	},
	{
		id: 2,
		name: "Fruits",
		image: "/images/category2.svg",
		price: "₹60/kg",
	},
	{
		id: 3,
		name: "Dairy",
		image: "/images/category3.svg",
		price: "₹90/kg",
	},
	{
		id: 4,
		name: "Snacks",
		image: "/images/category4.svg",
		price: "₹45/pack",
	},
];

const AllProducts = () => {
	return (
		<div className="flex flex-wrap justify-center gap-6 py-10">
			{products.map((product) => (
				<div
					key={product.id}
					className="bg-white"
					style={{
						width: "296px",
						height: "469px",
						borderRadius: "32px",
						boxShadow: "5px 7px 8.8px 2px #615A5A40",
					}}
				>
					{/* Image section */}
					<div className="relative h-60 w-full overflow-hidden rounded-t-[32px]">
						<Image src={product.image} alt={product.name} fill className="object-contain p-6" />
					</div>

					{/* Info section */}
					<div className="p-5">
						<h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
						<p className="text-lg text-gray-700">{product.price}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default AllProducts;
