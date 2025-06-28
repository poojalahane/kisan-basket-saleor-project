"use client";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { useTransition } from "react";
import { addToCartAction } from "@/app/actions/addToCartAction";
import { ProductListItemFragment } from "@/gql/graphql";
import { formatMoneyRange } from "@/lib/utils";
import Image from "next/image";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const staticImages = [
	"/images/category1.svg",
	"/images/category2.svg",
	"/images/category3.svg",
	"/images/category4.svg",
];

export function ProductElement({
	product,
	loading,
	priority,
}: {
	product: ProductListItemFragment;
	loading: "eager" | "lazy";
	priority?: boolean;
}) {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const imageIndex = parseInt(product.id.replace(/\D/g, ""), 10) % staticImages.length;
	const staticImage = staticImages[imageIndex];
	const staticRating = 4;

	const variantId = product.variants?.[0]?.id;
	const channel = "default-channel";

	const handleAddToCart = () => {
		if (!variantId) return;

		startTransition(() => {
			addToCartAction({ productVariantId: variantId, channel }).then(() => {
				router.refresh();
			});
		});
	};

	return (
		<li data-testid="ProductElement">
			<LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
				<div
					className="w-full rounded-[310px] bg-white"
					style={{
						borderRadius: "32px",
						boxShadow: "5px 7px 8.8px 2px #615A5A40",
					}}
				>
					<div className="rounded-[32px] border-8 border-white">
						<div className="relative h-[290px] w-full overflow-hidden rounded-[32px] bg-[#B4CDCB]">
							{staticImage && (
								<Image
									src={staticImage}
									alt={product.name}
									fill
									className="object-contain p-6"
									loading={loading}
									priority={priority}
								/>
							)}
						</div>

						<div className="p-2 pl-6">
							<h4 className="text-[14px] font-medium capitalize leading-[1.2] text-[#363842] sm:text-lg md:text-[16px]">
								{product.name}
							</h4>
							<p className="mt-1 text-sm text-[#35394C]" data-testid="ProductElement_Category">
								{product.category?.name}
							</p>
							<div className="mt-1 flex items-center space-x-1 text-xs text-[#35394C]">
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
							<div className="mt-2 flex items-center gap-1 text-sm leading-[1.2] text-[#81859C] line-through sm:text-base">
								<FaIndianRupeeSign />
								99
							</div>
							<div className="mt-1 flex items-center gap-1 text-xl font-semibold text-[#363842] lg:text-2xl">
								{product?.pricing?.priceRange?.start?.gross
									? formatMoneyRange({
											start: product.pricing.priceRange.start.gross,
											stop: product.pricing.priceRange.stop?.gross,
										})
									: "₹80"}
							</div>
						</div>

						{/* Add to cart button */}
						<button
							type="button"
							onClick={(e) => {
								e.preventDefault();
								handleAddToCart();
							}}
							disabled={!variantId || isPending}
							className="font-inter m-4 mt-1 flex h-[38px] items-center justify-center rounded-[10px] bg-[#A9B243] text-[14px] font-semibold leading-[1.2] text-white sm:rounded-[11px] md:text-[20px]"
							style={{
								boxShadow: `0px 4px 5.7px 0px #4A454540, inset 0px 5px 4px 0px #6B676740`,
								textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
							}}
						>
							{isPending ? "ADDING..." : "ADD TO CART"}
						</button>
					</div>
				</div>
			</LinkWithChannel>
		</li>
	);
}
