"use client";

import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { useTransition } from "react";
import { addToCartAction } from "@/app/actions/addToCartAction";
import { ProductListItemFragment } from "@/gql/graphql";
import { useState } from "react";
import { formatMoneyRange } from "@/lib/utils";
import Image from "next/image";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useRouter } from "next/navigation";

type ProductVariant = {
	id: string | number;
	name: string;
	price: number;
};

export function ProductElement({ product }: { product: ProductListItemFragment }) {
	const [isPending, startTransition] = useTransition();
	const savedAmount = 20;

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [selectedVariantId, setSelectedVariantId] = useState(product.variants?.[0]?.id || "");
	const [selectedVariantPrice, setSelectedVariantPrice] = useState(
		product.variants?.[0]?.pricing?.price?.gross?.amount || 0,
	);
	const [selectedVariantName, setSelectedVariantName] = useState(product.variants?.[0]?.name || "");
	const handleVariantSelect = (variantId: string, price: number, name: string) => {
		setSelectedVariantId(variantId);
		setSelectedVariantPrice(price);
		setSelectedVariantName(name);
		setIsDropdownOpen(false);
	};

	const router = useRouter();
	//console.log(productVarient);
	const staticRating = 4;
	const variantId = product.variants?.[0]?.id;
	const channel = "kisan-basket";

	const handleAddToCart = () => {
		if (!selectedVariantId) return;

		startTransition(() => {
			addToCartAction({ productVariantId: selectedVariantId, channel }).then(() => router.refresh());
		});
	};

	return (
		<li data-testid="ProductElement" className="flex justify-center md:block">
			<>
				<div
					className="w-[270px] rounded-[24px] bg-white shadow-lg md:w-full"
					style={{ boxShadow: "5px 7px 8.8px 2px #615A5A40" }}
				>
					<div className="rounded-[24px] border-8 border-white">
						{/* Image wrapper */}
						<LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
							<div className="relative h-[140px] w-full overflow-hidden rounded-[24px] bg-[#B4CDCB]  sm:h-[160px] md:h-[200px] lg:h-[260px]">
								{product.thumbnail?.url && (
									<Image src={product.thumbnail.url} alt={product.name} fill className="object-contain p-1" />
								)}
							</div>
						</LinkWithChannel>
						{/* Text section */}
						<div className="p-2 px-3 sm:px-4">
							<div className="group relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-[180px] lg:max-w-[220px]">
								<h4 className="cursor-default truncate text-sm font-medium capitalize leading-[1.2] text-[#363842] sm:text-base lg:text-lg">
									{product.name}
								</h4>

								{/* Tooltip if name is long */}
								{product.name.length > 20 && (
									<div className="absolute left-0 top-full z-10 mt-2 hidden w-72 rounded-md bg-[#B4CDCB] p-2 text-sm shadow-md group-hover:block">
										{product.name}
									</div>
								)}
							</div>

							<p className="mt-1 text-xs text-[#35394C] sm:text-sm">{product.category?.name}</p>

							{/* Ratings */}
							<div className="mt-1 flex items-center space-x-1">
								{[...Array(5)].map((_, i) => (
									<div key={i} className="relative h-3 w-3 sm:h-4 sm:w-4">
										<Image
											src="/images/ratingimage.svg"
											alt="rating"
											fill
											style={{
												objectFit: "contain",
												opacity: i < staticRating ? 1 : 0.2,
											}}
										/>
									</div>
								))}
							</div>

							{/* Price */}
							<div className="flex justify-between ">
								<div className="mt-2 flex items-center gap-1 text-xs text-[#81859C] line-through sm:text-sm">
									<FaIndianRupeeSign />
									99
								</div>
								<div className=" flex items-center gap-1 text-base font-semibold text-[#363842] sm:text-lg">
									{product?.pricing?.priceRange?.start?.gross
										? formatMoneyRange({
												start: product.pricing.priceRange.start.gross,
												stop: product.pricing.priceRange.stop?.gross,
											})
										: "₹80"}
								</div>
							</div>
						</div>
						{/* cart logic */}
						{product.variants && (
							<div className="relative mt-2 flex h-[38px] overflow-hidden rounded-[8px] border border-[#503F3F] text-sm font-medium shadow-sm">
								{/* Saved Amount */}
								<div className="flex items-center justify-center bg-[#503F3F] px-5 py-1.5 text-white">
									<div className="text-center leading-tight">
										<div className="text-[10px] leading-[120%] opacity-100">saved</div>
										<div className="text-[16px] font-semibold leading-[120%] opacity-100">₹{savedAmount}</div>
									</div>
								</div>
								{/* Variant Buttons */}
								<div className="relative flex w-full items-center justify-between gap-2 px-1 py-1">
									<div className="ml-1 flex items-center gap-x-2 md:gap-x-1 lg:gap-x-4 xl:ml-1">
										{/* Show only 2 variant buttons inline */}
										{product.variants.slice(0, 2).map((variant) => (
											<button
												key={variant.id}
												onClick={(e) => {
													e.preventDefault();
													setSelectedVariantId(variant.id);
													setSelectedVariantPrice(variant.pricing?.price?.gross?.amount || 0);
													setSelectedVariantName(variant.name);
												}}
												className={`h-[25px] rounded-[12.5px] border px-2 text-sm font-semibold leading-[120%] opacity-100 transition-colors ${
													selectedVariantId === variant.id
														? "border-[#95A64E] bg-[#C2D58D] text-black"
														: "border-[#D0D0D0] bg-[#F2F0E8] text-black"
												} transition-colors`}
											>
												{variant.name}
											</button>
										))}
									</div>
									{/* Dropdown Icon */}
									<div
										className="relative z-10 flex h-6 w-6 cursor-pointer justify-end"
										onClick={() => {
											console.log("Product Variants:", product.variants);
											setIsDropdownOpen((prev) => !prev);
										}}
									>
										<Image
											src="/homepageimages/dropdownicon.svg"
											alt="dropdown icon"
											fill
											className="object-contain"
										/>
									</div>
									{/* Dropdown Menu */}
									{isDropdownOpen && (
										<div className="absolute left-0 top-full z-50 mt-2 w-full rounded-md border bg-white shadow-lg">
											<ul className="max-h-[200px] overflow-auto text-sm">
												{product.variants.map((variant) => (
													<li
														key={variant.id}
														onClick={() =>
															handleVariantSelect(
																variant.id,
																variant.pricing?.price?.gross?.amount || 0,
																variant.name,
															)
														}
														className={`cursor-pointer px-4 py-2 hover:bg-[#C2D58D] ${
															selectedVariantId === variant.id ? "bg-[#C2D58D] font-semibold" : ""
														}`}
													>
														{variant.name}
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
							</div>
						)}

						{/* Add to cart button */}
						<div className="w-full">
							<button
								disabled={isPending}
								onClick={(e) => {
									e.preventDefault();
									handleAddToCart();
								}}
								className="mb-1 mt-3 flex h-[34px] w-full  items-center justify-center rounded-[18px] bg-[#503F3F] text-xs font-semibold text-white sm:h-[38px] sm:rounded-[10px] sm:text-sm md:text-[16px]"
								style={{
									boxShadow: `0px 4px 5.7px 0px #4A454540, inset 0px 5px 4px 0px #6B676740`,
									textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
								}}
							>
								{isPending ? "Adding..." : "Add to Cart"}
							</button>
						</div>
					</div>
				</div>
			</>
		</li>
	);
}

// "use client";

// import { LinkWithChannel } from "../atoms/LinkWithChannel";
// import { useTransition } from "react";
// import { addToCartAction } from "@/app/actions/addToCartAction";
// import { ProductListItemFragment } from "@/gql/graphql";
// import { formatMoneyRange } from "@/lib/utils";
// import Image from "next/image";
// import { FaIndianRupeeSign } from "react-icons/fa6";
// import { useRouter } from "next/navigation";
// import SavedQuantitySelector from "@/ui/components/HomeContent/SavedQuantitySelector";

// type ProductVariant = {
// 	id: string | number;
// 	name: string;
// 	price: number;
// };

// export function ProductElement({
// 	product,
// 	loading,
// 	priority,
// 	productVariants,
// }: {
// 	product: ProductListItemFragment;
// 	loading: "eager" | "lazy";
// 	priority?: boolean;
// 	productVariants: ProductVariant[];
// }) {
// 	const [isPending, startTransition] = useTransition();
// 	const router = useRouter();
// 	//console.log(productVarient);
// 	const staticRating = 4;
// 	const variantId = product.variants?.[0]?.id;
// 	const channel = "default-channel";
// 	// const productVariants = [
// 	// 	{ id: "v1", name: "250 ml" },
// 	// 	{ id: "v2", name: "500 ml" },
// 	// ];

// 	const handleVariantSelect = (variant: any) => {
// 		//	console.log("Selected Variant:", variant);
// 		//	console.log(productVarient);
// 		console.log("static", productVariants);
// 	};

// 	const handleAddToCart = (e: React.MouseEvent) => {
// 		e.preventDefault();
// 		e.stopPropagation();
// 		console.log(variantId);

// 		if (!variantId) return;

// 		startTransition(() => {
// 			addToCartAction({ productVariantId: variantId, channel }).then(() => {
// 				router.refresh();
// 			});
// 		});
// 	};

// 	return (
// 		<li data-testid="ProductElement" className="flex justify-center md:block">
// 			<>
// 				<div
// 					className="w-[270px] rounded-[24px] bg-white shadow-lg md:w-full"
// 					style={{ boxShadow: "5px 7px 8.8px 2px #615A5A40" }}
// 				>
// 					<div className="rounded-[24px] border-8 border-white">
// 						{/* Image wrapper */}
// 						<LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
// 							<div className="relative h-[140px] w-full overflow-hidden rounded-[24px] bg-[#B4CDCB]  sm:h-[160px] md:h-[200px] lg:h-[260px]">
// 								{product.thumbnail?.url && (
// 									<Image
// 										src={product.thumbnail.url}
// 										alt={product.name}
// 										fill
// 										className="object-contain p-1"
// 										loading={loading}
// 										priority={priority}
// 									/>
// 								)}
// 							</div>
// 						</LinkWithChannel>

// 						{/* Text section */}
// 						<div className="p-2 px-3 sm:px-4">
// 							<div className="group relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-[180px] lg:max-w-[220px]">
// 								<h4 className="cursor-default truncate text-sm font-medium capitalize leading-[1.2] text-[#363842] sm:text-base lg:text-lg">
// 									{product.name}
// 								</h4>

// 								{/* Tooltip if name is long */}
// 								{product.name.length > 20 && (
// 									<div className="absolute left-0 top-full z-10 mt-2 hidden w-72 rounded-md bg-[#B4CDCB] p-2 text-sm shadow-md group-hover:block">
// 										{product.name}
// 									</div>
// 								)}
// 							</div>

// 							<p className="mt-1 text-xs text-[#35394C] sm:text-sm">{product.category?.name}</p>

// 							{/* Ratings */}
// 							<div className="mt-1 flex items-center space-x-1">
// 								{[...Array(5)].map((_, i) => (
// 									<div key={i} className="relative h-3 w-3 sm:h-4 sm:w-4">
// 										<Image
// 											src="/images/ratingimage.svg"
// 											alt="rating"
// 											fill
// 											style={{
// 												objectFit: "contain",
// 												opacity: i < staticRating ? 1 : 0.2,
// 											}}
// 										/>
// 									</div>
// 								))}
// 							</div>

// 							{/* Price */}
// 							<div className="mt-2 flex items-center gap-1 text-xs text-[#81859C] line-through sm:text-sm">
// 								<FaIndianRupeeSign />
// 								99
// 							</div>

// 							<div className="mt-1 flex items-center gap-1 text-base font-semibold text-[#363842] sm:text-lg">
// 								{product?.pricing?.priceRange?.start?.gross
// 									? formatMoneyRange({
// 											start: product.pricing.priceRange.start.gross,
// 											stop: product.pricing.priceRange.stop?.gross,
// 										})
// 									: "₹80"}
// 							</div>
// 						</div>
// 						{/* dropdown */}

// 						<div className=" w-full  ">
// 							<SavedQuantitySelector
// 								variants={productVariants}
// 								savedAmount={20}
// 								onSelect={handleVariantSelect}
// 							/>
// 						</div>

// 						{/* Add to cart button */}
// 						<div className="w-full">
// 							<button
// 								className="my-3 flex h-[34px] w-full  items-center justify-center rounded-[18px] bg-[#503F3F] text-xs font-semibold text-white sm:h-[38px] sm:rounded-[10px] sm:text-sm md:text-[16px]"
// 								style={{
// 									boxShadow: `0px 4px 5.7px 0px #4A454540, inset 0px 5px 4px 0px #6B676740`,
// 									textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
// 								}}
// 								onClick={handleAddToCart}
// 							>
// 								Add to Cart
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</>
// 		</li>
// 	);
// }
