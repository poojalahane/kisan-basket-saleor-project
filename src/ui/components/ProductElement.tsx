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
	const [selectedVariantId, setSelectedVariantId] = useState(product.variants?.[0]?.id || "");
	const [selectedVariantPrice, setSelectedVariantPrice] = useState(
		product.variants?.[0]?.pricing?.price?.gross?.amount || 0,
	);
	const [selectedVariantName, setSelectedVariantName] = useState(product.variants?.[0]?.name || "");

	const router = useRouter();
	const variantId = product.variants?.[0]?.id;
	const channel = "kisan-basket";

	const handleAddToCart = () => {
		if (!selectedVariantId) return;

		startTransition(() => {
			addToCartAction({ productVariantId: selectedVariantId, channel }).then(() => router.refresh());
		});
	};

	const priceStart = product.pricing?.priceRange?.start?.gross?.amount;
	const priceStop = product.pricing?.priceRange?.stop?.gross?.amount;
	const originalPrice = priceStop && priceStop > priceStart! ? priceStop : undefined;

	const discount = originalPrice ? Math.round(((originalPrice - priceStart!) / originalPrice) * 100) : 0;

	const staticRating = 4;

	// console.log("product_cart page", product.variants.name);
	return (
		<div
			className="group relative overflow-hidden rounded-xl border border-[#ddd] bg-white shadow-md transition-all duration-300 hover:shadow-xl"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<LinkWithChannel href={`/products/${product.slug}`}>
				<div className="relative h-48 overflow-hidden bg-[#f6f6f6]">
					{product.thumbnail?.url && (
						<Image
							src={product.thumbnail.url}
							alt={product.name}
							fill
							className="object-contain transition-transform duration-300 group-hover:scale-105"
						/>
					)}

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

					<div
						className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${
							isHovered ? "opacity-100" : "opacity-0"
						}`}
					>
						<button
							disabled={isPending}
							onClick={(e) => {
								e.preventDefault();
								handleAddToCart();
							}}
							className="rounded-md px-4 py-2 text-sm font-semibold text-white"
							style={{ backgroundColor: "#8BC34A" }}
						>
							<ShoppingCart className="mr-2 inline h-4 w-4" />
							{isPending ? "Adding..." : "Add to Cart"}
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

					<h3 className="line-clamp-2 text-sm font-semibold text-[#8B4513] transition-colors hover:text-[#8BC34A] sm:text-base">
						{product.name}
					</h3>

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
					{product.variants && (
						<div className="mt-2 flex flex-wrap gap-2">
							{product.variants.map((variant) => (
								<button
									key={variant.id}
									onClick={(e) => {
										e.preventDefault();
										setSelectedVariantId(variant.id);
										setSelectedVariantPrice(variant.pricing?.price?.gross?.amount || 0);
										setSelectedVariantName(variant.name);
									}}
									className={`rounded border px-2 py-1 text-xs ${
										selectedVariantId === variant.id
											? "border-[#8BC34A] bg-[#f4fff0] text-[#4b830d]"
											: "border-gray-300 text-gray-600"
									} transition-colors`}
								>
									{variant.name}
								</button>
							))}
						</div>
					)}
				</div>
			</LinkWithChannel>
		</div>
	);
}
