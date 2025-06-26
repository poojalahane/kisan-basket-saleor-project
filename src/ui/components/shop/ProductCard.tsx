"use client";

import { FC } from "react";
// import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";

interface ProductProps {
	product: {
		id: number;
		image: string;
		title: string;
		weight: string;
		price: number;
		oldPrice: number;
		rating: number;
	};
}

export const ProductCard: FC<ProductProps> = ({ product }) => {
	return (
		<div className="relative rounded-lg border bg-white p-4 shadow-sm">
			<img src={product.image} alt={product.title} className="h-48 w-full rounded object-cover" />
			<button className="absolute right-2 top-2 text-gray-500">
				{/* <HeartIcon className="h-5 w-5" /> */}
			</button>
			<div className="mt-3">
				<h3 className="text-sm font-semibold text-gray-900 md:text-base">{product.title}</h3>
				<p className="mb-1 text-sm text-gray-500">{product.weight}</p>
				<div className="mb-1 flex items-center gap-2">
					<span className="text-sm font-semibold text-green-600">${product.price.toFixed(2)}</span>
					<span className="text-xs text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
				</div>
				<div className="flex items-center text-xs text-yellow-500">
					{/* <StarIcon className="w-4 h-4 mr-1" /> */}
					{product.rating}
				</div>
				<button className="mt-3 w-full rounded bg-green-600 py-1.5 text-sm text-white hover:bg-green-700">
					Add to Cart
				</button>
			</div>
		</div>
	);
};
