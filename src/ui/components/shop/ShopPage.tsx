"use client";

import { useState } from "react";
import { ProductCard } from "@/ui/components/shop/ProductCard";
import { FilterSidebar } from "@/ui/components/shop/FilterSidebar";

const products = [
	{
		id: 1,
		image: "/images/bananas.jpg",
		title: "Organic Bananas",
		weight: "1 kg",
		price: 4.99,
		oldPrice: 5.99,
		rating: 4.5,
	},
	{
		id: 2,
		image: "/images/tomatoes.jpg",
		title: "Fresh Tomatoes",
		weight: "500 g",
		price: 2.99,
		oldPrice: 3.99,
		rating: 4.8,
	},
	{
		id: 3,
		image: "/images/milk.jpg",
		title: "Organic Milk",
		weight: "1 L",
		price: 3.49,
		oldPrice: 4.49,
		rating: 4.7,
	},
	{
		id: 4,
		image: "/images/bread.jpg",
		title: "Fresh Bread",
		weight: "400 g",
		price: 2.49,
		oldPrice: 2.99,
		rating: 4.6,
	},
	{
		id: 5,
		image: "/images/eggs.jpg",
		title: "Organic Eggs",
		weight: "12 pcs",
		price: 5.99,
		oldPrice: 6.99,
		rating: 4.9,
	},
	{
		id: 6,
		image: "/images/apples.jpg",
		title: "Fresh Apples",
		weight: "1 kg",
		price: 3.99,
		oldPrice: 4.99,
		rating: 4.7,
	},
];

export default function HomePage() {
	return (
		<main className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-4 py-8 md:grid-cols-12">
			<aside className="hidden md:col-span-3 md:block">
				<FilterSidebar />
			</aside>
			<section className="col-span-1 grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-9 lg:grid-cols-3">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</section>
		</main>
	);
}

// "use client";

// import Image from "next/image";
// import { HeartIcon, StarIcon } from "lucide-react";

// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
//   oldPrice?: number;
//   weight: string;
//   rating: number;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Organic Bananas",
//     image: "/images/bananas.jpg",
//     price: 4.99,
//     oldPrice: 5.99,
//     weight: "1 kg",
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     name: "Fresh Tomatoes",
//     image: "/images/tomatoes.jpg",
//     price: 2.99,
//     oldPrice: 3.99,
//     weight: "500 g",
//     rating: 4.8,
//   },
//   {
//     id: 3,
//     name: "Organic Milk",
//     image: "/images/milk.jpg",
//     price: 3.49,
//     oldPrice: 4.49,
//     weight: "1 L",
//     rating: 4.7,
//   },
//   {
//     id: 4,
//     name: "Fresh Bread",
//     image: "/images/bread.jpg",
//     price: 2.49,
//     oldPrice: 2.99,
//     weight: "400 g",
//     rating: 4.6,
//   },
//   {
//     id: 5,
//     name: "Organic Eggs",
//     image: "/images/eggs.jpg",
//     price: 5.99,
//     oldPrice: 6.99,
//     weight: "12 pcs",
//     rating: 4.9,
//   },
//   {
//     id: 6,
//     name: "Fresh Apples",
//     image: "/images/apples.jpg",
//     price: 3.99,
//     oldPrice: 4.99,
//     weight: "1 kg",
//     rating: 4.7,
//   },
// ];

// export default function ShopPage() {
//   return (
//     <main className="min-h-screen bg-white p-6">
//       <h1 className="text-2xl font-bold mb-6">Shop Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-lg shadow-sm hover:shadow-lg transition-all relative bg-white"
//           >
//             <button className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
//               <HeartIcon className="w-5 h-5" />
//             </button>

//             <div className="w-full h-48 relative">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 fill
//                 className="object-cover rounded-t-lg"
//               />
//             </div>

//             <div className="p-4">
//               <h2 className="font-medium text-lg">{product.name}</h2>
//               <p className="text-sm text-gray-600">{product.weight}</p>

//               <div className="flex items-center gap-2 mt-2">
//                 <span className="text-green-600 font-semibold text-lg">
//                   ${product.price.toFixed(2)}
//                 </span>
//                 {product.oldPrice && (
//                   <span className="text-sm line-through text-gray-400">
//                     ${product.oldPrice.toFixed(2)}
//                   </span>
//                 )}
//               </div>

//               <div className="flex items-center mt-1 text-sm text-yellow-600">
//                 <StarIcon className="w-4 h-4 fill-yellow-400" />
//                 <span className="ml-1">{product.rating}</span>
//               </div>

//               <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
