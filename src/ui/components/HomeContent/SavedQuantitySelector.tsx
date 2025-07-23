"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Variant = {
	id: string | number;
	name: string;
};

type Props = {
	variants: Variant[];
	savedAmount?: number;
	onSelect?: (variant: Variant) => void;
};

export default function SavedQuantitySelector({ variants, savedAmount = 20, onSelect }: Props) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	// 🔁 Auto-select the first variant on mount
	useEffect(() => {
		if (variants.length > 0) {
			onSelect?.(variants[0]);
		}
	}, [variants, onSelect]);

	const handleSelect = (index: number) => {
		setSelectedIndex(index);
		onSelect?.(variants[index]);
		setIsDropdownOpen(false); // Close dropdown after selecting
	};

	return (
		<div className="relative flex h-[38px] overflow-hidden rounded-[8px] border border-[#503F3F] text-sm font-medium shadow-sm">
			{/* Saved Amount */}
			<div className="flex items-center justify-center bg-[#503F3F] px-3 py-1.5 text-white">
				<div className="text-center leading-tight">
					<div className="text-[10px] leading-[120%] opacity-100">saved</div>
					<div className="text-[16px] font-semibold leading-[120%] opacity-100">₹{savedAmount}</div>
				</div>
			</div>

			{/* Variant Buttons */}
			<div className="relative flex w-full items-center justify-between gap-2 px-1 py-1">
				<div className="ml-1 flex items-center gap-x-2 md:gap-x-1 lg:gap-x-4 xl:ml-4">
					{/* Show only 2 variant buttons inline */}
					{variants.slice(0, 2).map((variant, index) => (
						<button
							key={variant.id}
							onClick={() => handleSelect(index)}
							className={`h-[25px] rounded-[12.5px] border px-2 text-sm font-semibold leading-[120%] opacity-100 transition-colors ${
								selectedIndex === index
									? "border-[#95A64E] bg-[#C2D58D] text-black"
									: "border-[#D0D0D0] bg-[#F2F0E8] text-black"
							}`}
						>
							{variant.name}
						</button>
					))}
				</div>

				{/* Dropdown Icon */}
				<div
					className="relative z-10 flex h-8 w-8 cursor-pointer justify-end"
					onClick={() => setIsDropdownOpen((prev) => !prev)}
				>
					<Image src="/homepageimages/dropdownicon.svg" alt="dropdown icon" fill className="object-contain" />
				</div>

				{/* Dropdown Menu */}
				{isDropdownOpen && (
					<div className="absolute right-2 top-10 z-20 w-[120px] rounded-md border bg-white shadow-md">
						{variants.map((variant, index) => (
							<div
								key={variant.id}
								onClick={() => handleSelect(index)}
								className={`cursor-pointer px-3 py-2 text-sm hover:bg-[#C2D58D] ${
									selectedIndex === index ? "bg-[#C2D58D]" : ""
								}`}
							>
								{variant.name}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// type Variant = {
// 	id: string | number;
// 	name: string;
// };

// type Props = {
// 	variants: Variant[];
// 	savedAmount?: number;
// 	onSelect?: (variant: Variant) => void;
// };

// export default function SavedQuantitySelector({ variants, savedAmount = 20, onSelect }: Props) {
// 	const [selectedIndex, setSelectedIndex] = useState(0);

// 	// 🔁 Auto-select the first variant on mount
// 	useEffect(() => {
// 		if (variants.length > 0) {
// 			onSelect?.(variants[0]);
// 		}
// 	}, [variants, onSelect]);

// 	const handleSelect = (index: number) => {
// 		setSelectedIndex(index);
// 		onSelect?.(variants[index]);
// 	};

// 	return (
// 		<div className="flex h-[38px] overflow-hidden rounded-[8px] border border-[#503F3F] text-sm font-medium shadow-sm">
// 			{/* Saved Amount */}
// 			<div className="flex items-center justify-center bg-[#503F3F] px-3 py-1.5 text-white">
// 				<div className="text-center leading-tight">
// 					<div className=" text-[10px] leading-[120%] opacity-100">saved</div>
// 					<div className="text-[16px] font-semibold leading-[120%] opacity-100">₹{savedAmount}</div>
// 				</div>
// 			</div>

// 			{/* Variant Buttons */}
// 			<div className="flex w-full items-center justify-between gap-2  px-1 py-1  ">
// 				<div className=" ml-1 flex items-center gap-x-4 md:gap-x-1 lg:gap-x-4 xl:ml-4">
// 					{variants.slice(0, 2).map((variant, index) => (
// 						<button
// 							key={variant.id}
// 							onClick={() => handleSelect(index)}
// 							className={`h-[25px]  rounded-[12.5px] border px-2  text-sm font-semibold leading-[120%] opacity-100 transition-colors ${
// 								selectedIndex === index
// 									? "border-[#95A64E] bg-[#C2D58D]  text-black"
// 									: "border-[#D0D0D0] bg-[#F2F0E8] text-black "
// 							}`}
// 						>
// 							{variant.name}
// 						</button>
// 					))}
// 				</div>
// 				{/* drop down icon */}
// 				<div className="relative  flex h-8 w-8 cursor-pointer justify-end  ">
// 					<Image
// 						src="/homepageimages/dropdownicon.svg"
// 						alt="dropdown icon"
// 						fill
// 						className="object-contain "
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
