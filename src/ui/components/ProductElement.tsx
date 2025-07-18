"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { ProductListItemFragment } from "@/gql/graphql";
import { addToCartAction } from "@/app/actions/addToCartAction";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LinkWithChannel } from "../atoms/LinkWithChannel";

export default function ProductCard({ product }: { product: ProductListItemFragment }) {
	const [isLiked, setIsLiked] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [isPending, startTransition] = useTransition();

	const router = useRouter();
	const variantId = product.variants?.[0]?.id;
	const channel = "default-channel";

	const handleAddToCart = () => {
		if (!variantId) return;
		startTransition(() => {
			addToCartAction({ productVariantId: variantId, channel }).then(() => router.refresh());
		});
	};

	const priceStart = product.pricing?.priceRange?.start?.gross?.amount;
	const priceStop = product.pricing?.priceRange?.stop?.gross?.amount;
	const originalPrice = priceStop && priceStop > priceStart! ? priceStop : undefined;

	const discount = originalPrice ? Math.round(((originalPrice - priceStart!) / originalPrice) * 100) : 0;

	const staticRating = 4;

	return (
		<div
			className="group relative overflow-hidden rounded-xl border border-[#ddd] bg-white shadow-md transition-all duration-300 hover:shadow-xl"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<LinkWithChannel href={`/products/${product.slug}`}>
				{/* Image Block */}
				<div className="relative h-48 overflow-hidden bg-[#f6f6f6]">
					{product.thumbnail?.url && (
						<Image
							src={product.thumbnail.url}
							alt={product.name}
							fill
							className="object-contain transition-transform duration-300 group-hover:scale-105"
						/>
					)}

					{/* Badges */}
					<div className="absolute left-3 top-3 flex flex-col gap-1">
						{discount > 0 && (
							<span
								className="rounded-md px-2 py-1 text-xs font-semibold text-white"
								style={{ backgroundColor: "#DAA520" }}
							>
								-{discount}%
							</span>
						)}
					</div>

					{/* Like/Wishlist Button */}
					<button
						className="absolute right-3 top-3 rounded-full p-1 transition-all duration-200"
						onClick={(e) => {
							e.preventDefault();
							setIsLiked(!isLiked);
						}}
						style={{ color: isLiked ? "#DAA520" : "#999" }}
					>
						<Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
					</button>

					{/* Hover Cart Button */}
					<div
						className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${
							isHovered ? "opacity-100" : "opacity-0"
						}`}
					>
						<button
							onClick={(e) => {
								e.preventDefault();
								handleAddToCart();
							}}
							className="rounded-md px-4 py-2 text-sm font-semibold text-white"
							style={{ backgroundColor: "#8BC34A" }}
						>
							<ShoppingCart className="mr-2 inline h-4 w-4" />
							Add to Cart
						</button>
					</div>
				</div>

				{/* Product Details */}
				<div className="p-4">
					{/* Category & Rating */}
					<div className="mb-2 flex items-center justify-between">
						<span
							className="rounded border px-2 py-0.5 text-xs font-medium"
							style={{ borderColor: "#8B4513", color: "#8B4513" }}
						>
							{product.category?.name ?? "Category"}
						</span>
						<div className="flex items-center space-x-1">
							<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
							<span className="text-sm text-gray-600">{staticRating}</span>
						</div>
					</div>

					{/* Name */}
					<h3 className="line-clamp-2 text-sm font-semibold text-[#8B4513] transition-colors hover:text-[#8BC34A] sm:text-base">
						{product.name}
					</h3>

					{/* Pricing */}
					<div className="mt-2 flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<span className="text-lg font-bold" style={{ color: "#8BC34A" }}>
								₹{priceStart?.toFixed(0) ?? "--"}
							</span>
							{originalPrice && <span className="text-sm text-gray-500 line-through">₹{originalPrice}</span>}
						</div>

						<button
							className="rounded-full p-1"
							style={{ backgroundColor: "#8B4513" }}
							onClick={(e) => {
								e.preventDefault();
								handleAddToCart();
							}}
						>
							<ShoppingCart className="h-4 w-4 text-white" />
						</button>
					</div>
				</div>
			</LinkWithChannel>
		</div>
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

// export function ProductElement({
// 	product,
// 	loading,
// 	priority,
// }: {
// 	product: ProductListItemFragment;
// 	loading: "eager" | "lazy";
// 	priority?: boolean;
// }) {
// 	const [isPending, startTransition] = useTransition();
// 	const router = useRouter();

// 	const staticRating = 4;
// 	const variantId = product.variants?.[0]?.id;
// 	const channel = "default-channel";

// 	const handleAddToCart = (e: React.MouseEvent) => {
// 		e.preventDefault();
// 		e.stopPropagation();

// 		if (!variantId) return;

// 		startTransition(() => {
// 			addToCartAction({ productVariantId: variantId, channel }).then(() => {
// 				router.refresh();
// 			});
// 		});
// 	};

// 	return (
// 		<li data-testid="ProductElement" className="flex justify-center md:block">
// 			<LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
// 				<div
// 					className="w-[270px] rounded-[24px] bg-white shadow-lg md:w-full"
// 					style={{ boxShadow: "5px 7px 8.8px 2px #615A5A40" }}
// 				>
// 					<div className="rounded-[24px] border-8 border-white">
// 						{/* Image wrapper */}
// 						<div className="relative h-[140px] w-full overflow-hidden rounded-[24px] bg-[#B4CDCB]  sm:h-[160px] md:h-[200px] lg:h-[260px]">
// 							{product.thumbnail?.url && (
// 								<Image
// 									src={product.thumbnail.url}
// 									alt={product.name}
// 									fill
// 									className="object-contain p-1"
// 									loading={loading}
// 									priority={priority}
// 								/>
// 							)}
// 						</div>

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

// 						{/* Add to cart button */}
// 						<button
// 							className="m-3 flex h-[34px] w-[calc(100%-24px)] items-center justify-center rounded-[8px] bg-[#A9B243] text-xs font-semibold text-white sm:h-[38px] sm:rounded-[10px] sm:text-sm md:text-[16px]"
// 							style={{
// 								boxShadow: `0px 4px 5.7px 0px #4A454540, inset 0px 5px 4px 0px #6B676740`,
// 								textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
// 							}}
// 							onClick={handleAddToCart}
// 						>
// 							Check the Item
// 						</button>
// 					</div>
// 				</div>
// 			</LinkWithChannel>
// 		</li>
// 	);
// }

// "use client";
// import { LinkWithChannel } from "../atoms/LinkWithChannel";
// import { useTransition } from "react";
// import { addToCartAction } from "@/app/actions/addToCartAction";
// import { ProductListItemFragment } from "@/gql/graphql";
// import { formatMoneyRange } from "@/lib/utils";
// import Image from "next/image";
// import { FaIndianRupeeSign } from "react-icons/fa6";
// import { useRouter } from "next/navigation";

// const staticImages = [
// 	"/productimages/papaya1.png",
// 	"/productimages/papaya1.png",
// 	"/productimages/papaya1.png",
// 	"/productimages/papaya1.png",
// 	"/productimages/papaya1.png",
// 	"/productimages/papaya1.png",
// ];

// export function ProductElement({
// 	product,
// 	loading,
// 	priority,
// }: {
// 	product: ProductListItemFragment;
// 	loading: "eager" | "lazy";
// 	priority?: boolean;
// }) {
// 	const [isPending, startTransition] = useTransition();
// 	const router = useRouter();

// 	const imageIndex = parseInt(product.id.replace(/\D/g, ""), 10) % staticImages.length;
// 	const staticImage = staticImages[imageIndex];
// 	const staticRating = 4;

// 	const variantId = product.variants?.[0]?.id;
// 	const channel = "default-channel";

// 	const handleAddToCart = (e: React.MouseEvent) => {
// 		e.preventDefault();
// 		e.stopPropagation();

// 		if (!variantId) return;

// 		startTransition(() => {
// 			addToCartAction({ productVariantId: variantId, channel }).then(() => {
// 				router.refresh();
// 			});
// 		});
// 	};

// 	return (
// 		<li data-testid="ProductElement" className="flex justify-center md:block">
// 			<LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
// 				<div
// 					className="w-[270px] rounded-[24px] bg-white shadow-lg md:w-full"
// 					style={{ boxShadow: "5px 7px 8.8px 2px #615A5A40" }}
// 				>
// 					<div className="rounded-[24px] border-8 border-white ">
// 						{/* Image wrapper */}
// 						<div className="relative h-[140px] w-full overflow-hidden rounded-[24px] bg-[#B4CDCB]  sm:h-[160px] md:h-[200px] lg:h-[260px]">
// 							{staticImage && (
// 								<Image
// 									src={staticImage}
// 									alt={product.name}
// 									fill
// 									className="object-contain p-6"
// 									loading={loading}
// 									priority={priority}
// 								/>
// 							)}
// 						</div>

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

// 						{/* Add to cart button */}
// 						<button
// 							className="m-3 flex h-[34px] w-[calc(100%-24px)] items-center justify-center rounded-[8px] bg-[#A9B243] text-xs font-semibold text-white sm:h-[38px] sm:rounded-[10px] sm:text-sm md:text-[16px]"
// 							style={{
// 								boxShadow: `0px 4px 5.7px 0px #4A454540, inset 0px 5px 4px 0px #6B676740`,
// 								textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
// 							}}
// 							onClick={handleAddToCart}
// 						>
// 							Check the Item
// 						</button>
// 					</div>
// 				</div>
// 			</LinkWithChannel>
// 		</li>
// 	);
// }
