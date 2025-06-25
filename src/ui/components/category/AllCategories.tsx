"use client";
import React from "react";
import Image from "next/image";

interface Category {
	id: number;
	name: string;
	image: string;
	bgColor: string; // 🎯 Add background color field
}

// ✅ Static data with dynamic background colors
const categories: Category[] = [
	{
		id: 1,
		name: "Vegetables",
		image: "/images/category1.svg",
		bgColor: "#D0D9CE",
	},
	{
		id: 2,
		name: "Fruits",
		image: "/images/category2.svg",
		bgColor: "#DDC9C5",
	},
	{
		id: 3,
		name: "Dairy",
		image: "/images/category3.svg",
		bgColor: "#E6DECA",
	},
	{
		id: 4,
		name: "Snacks",
		image: "/images/category4.svg",
		bgColor: "#E6D9DA",
	},
];

const AllCategories = () => {
	return (
		<div className="flex flex-wrap justify-center gap-8 py-6">
			{categories.map((category) => (
				<div key={category.id} className="text-center">
					<div
						className="relative my-4 h-32 w-32 overflow-hidden rounded-full border-4 border-white"
						style={{
							backgroundColor: category.bgColor, // 🎯 Dynamic bg color
							boxShadow: "8px 4px 4px 0px #5C595940",
						}}
					>
						<Image src={category.image} alt={`${category.name} image`} fill className="object-contain" />
					</div>
					<p className="mt-2 text-lg font-medium">{category.name}</p>
				</div>
			))}
		</div>
	);
};

export default AllCategories;

// import Image from "next/image";
// import categories from "@/data/categories"; // Adjust the import path as needed

// const AllCategories = () => {
//   return (
//     <div className="flex flex-wrap justify-center gap-8 bg-blue-100 py-6">
//       {categories.map((category) => (
//         <div key={category.id} className="text-center">
//           <div className="relative my-4 h-32 w-32 overflow-hidden rounded-full bg-[#fcf6f6e1] shadow-md">
//             <Image
//               src={category.image}
//               alt={`${category.name} image`}
//               fill
//               className="object-cover"
//             />
//           </div>
//           <p className="mt-2 text-lg font-medium">{category.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllCategories;
