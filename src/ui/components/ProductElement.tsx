import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { ProductListItemFragment } from "@/gql/graphql";
import { formatMoneyRange } from "@/lib/utils";
import Image from "next/image";
import { FaIndianRupeeSign } from "react-icons/fa6";

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
	// Pick image based on product index hash or ID hash
	const imageIndex = parseInt(product.id.replace(/\D/g, ""), 10) % staticImages.length;
	const staticImage = staticImages[imageIndex];
	const staticRating = 4;

	return (
		<li data-testid="ProductElement">
			<LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
				<div
					className="w-full rounded-[310px] bg-white  "
					style={{
						borderRadius: "32px",
						boxShadow: "5px 7px 8.8px 2px #615A5A40",
					}}
				>
					<div className="rounded-[32px] border-8 border-white">
						{/* Static Image */}
						<div className="relative h-[290px] w-full overflow-hidden rounded-[32px] bg-[#B4CDCB]">
							{staticImage ? (
								<Image
									src={staticImage}
									alt={product.name}
									fill
									className="object-contain p-6"
									loading={loading}
									priority={priority}
								/>
							) : null}
						</div>

						{/* Info Section */}
						<div className="p-2 pl-6">
							<div className="group relative w-fit">
								<h4 className="cursor-default text-[14px] font-medium capitalize leading-[1.2] text-[#363842] sm:text-lg md:text-[20px]">
									{product.name.length > 20 ? product.name.slice(0, 20) + "..." : product.name}
								</h4>

								{/* Tooltip shown only if name is longer than 40 characters */}
								{product.name.length > 20 && (
									<div className="absolute left-0 top-full z-10 mt-2 hidden w-72 rounded-md bg-[#B4CDCB] p-2 text-sm shadow-md group-hover:block">
										{product.name}
									</div>
								)}
							</div>

							{/* Category Name */}
							<p className="mt-1 text-sm text-[#35394C]" data-testid="ProductElement_Category">
								{product.category?.name}
							</p>
							{/* star section  */}
							<div className="mt-1 flex items-center space-x-1 text-xs text-[#35394C]">
								<div className="flex items-center gap-1">
									{[...Array(5)].map((_, i) => (
										<div key={i} className="relative h-3 w-3 sm:h-4 sm:w-4">
											<Image
												src="/images/ratingimage.svg"
												alt="kisan basket rating image"
												fill
												style={{
													objectFit: "contain",
													opacity: i < staticRating ? 1 : 0.2, // dim unfilled ratings
												}}
											/>
										</div>
									))}
								</div>

								{/* {[...Array(5)].map((_, i) =>
									i < staticRating ? (
										<FaStar key={i} className="text-xs sm:text-sm" />
									) : (
										<FaRegStar key={i} className="text-xs sm:text-sm" />
									),
								)} */}
							</div>
							{/* Original Price (hardcoded) */}
							<div className="mt-2 flex items-center gap-1 text-sm leading-[1.2] text-[#81859C] line-through sm:text-base">
								<FaIndianRupeeSign />
								99
							</div>

							{/* Saleor Price Range */}
							<div className="mt-1 flex items-center gap-1 text-xl font-semibold text-[#363842] lg:text-2xl">
								{/* <FaIndianRupeeSign /> */}
								{product?.pricing?.priceRange?.start?.gross
									? formatMoneyRange({
											start: product.pricing.priceRange.start.gross,
											stop: product.pricing.priceRange.stop?.gross,
										})
									: "₹80"}
							</div>
						</div>
						{/* add to cart section */}
						<div
							className="font-inter m-4 mt-1 flex h-[38px] cursor-pointer items-center justify-center rounded-[10px] bg-[#A9B243] text-[14px] font-semibold leading-[1.2] text-white sm:rounded-[11px] md:text-[20px]"
							style={{
								boxShadow: `0px 4px 5.7px 0px #4A454540, inset 0px 5px 4px 0px #6B676740`,
								textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
							}}
						>
							ADD TO CART
						</div>
					</div>
				</div>
			</LinkWithChannel>
		</li>
	);
}

// import { LinkWithChannel } from "../atoms/LinkWithChannel";
// import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";

// import type { ProductListItemFragment } from "@/gql/graphql";
// import { formatMoneyRange } from "@/lib/utils";

// export function ProductElement({
// 	product,
// 	loading,
// 	priority,
// }: { product: ProductListItemFragment } & { loading: "eager" | "lazy"; priority?: boolean }) {
// 	return (
// 		<li data-testid="ProductElement">
// 			<LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
// 				<div>
// 					{product?.thumbnail?.url && (
// 						<ProductImageWrapper
// 							loading={loading}
// 							src={product.thumbnail.url}
// 							alt={product.thumbnail.alt ?? ""}
// 							width={512}
// 							height={512}
// 							sizes={"512px"}
// 							priority={priority}
// 						/>
// 					)}
// 					<div className="mt-2 flex justify-between">
// 						<div>
// 							<h3 className="mt-1 text-sm font-semibold text-neutral-900">{product.name}</h3>
// 							<p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">
// 								{product.category?.name}
// 							</p>
// 						</div>
// 						<p className="mt-1 text-sm font-medium text-neutral-900" data-testid="ProductElement_PriceRange">
// 							{formatMoneyRange({
// 								start: product?.pricing?.priceRange?.start?.gross,
// 								stop: product?.pricing?.priceRange?.stop?.gross,
// 							})}
// 						</p>
// 					</div>
// 				</div>
// 			</LinkWithChannel>
// 		</li>
// 	);
// }
