"use client";

import { ProductListFragment, CategoryListItemFragment } from "@/gql/graphql";
import { useState } from "react";
import { ProductList } from "@/ui/components/ProductList";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ProductListingSection } from "@/ui/components/ProductListingSection";
interface CategoryWithProducts extends CategoryListItemFragment {
	products: ProductListFragment[];
}

export default function CategoryWiseProductsClient({
	categories,
	channel,
}: {
	categories: CategoryWithProducts[];
	channel: string;
}) {
	const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [delayedSlug, setDelayedSlug] = useState<string | null>(null);
	const selectedCategory = categories.find((cat) => cat.slug === delayedSlug);

	useEffect(() => {
		if (selectedSlug !== null) {
			setLoading(true);
			const timeout = setTimeout(() => {
				setDelayedSlug(selectedSlug);
				setLoading(false);
			}, 1000);
			return () => clearTimeout(timeout);
		}
	}, [selectedSlug]);
	return (
		<div className="mx-auto h-auto max-w-7xl px-4 py-8 lg:px-6">
			{/* breadcrum */}
			<div className="lg:px-4">
				<nav className="text-sm text-gray-600">
					<span>
						<Link href="/" className="hover:text-black">
							Home
						</Link>
					</span>
					<span className="mx-2">{">"}</span>
					{selectedCategory ? (
						<span className="font-medium text-gray-900">{selectedCategory.name}</span>
					) : (
						<span className="text-gray-700">All Products</span>
					)}
				</nav>
			</div>

			{/* all cateogires */}
			<div className="scrollbar-hide flex w-full gap-4 overflow-x-auto py-4 pl-4 sm:flex-wrap sm:justify-center sm:gap-2 sm:overflow-x-visible sm:py-0 sm:pl-0 md:gap-4 md:pl-0 lg:gap-8">
				{categories.map((category) => (
					<div
						key={category.id}
						onClick={() => setSelectedSlug(category.slug)}
						className={`rounded   ${selectedSlug === category.slug ? "bg-gree-600 text-whit" : "bg-whit"}`}
					>
						<div className="relative h-24 w-24 cursor-pointer  overflow-hidden rounded-full bg-gray-100 sm:my-1   md:my-2 lg:my-4 lg:h-32 lg:w-32">
							<div className="absolute inset-2">
								{category.backgroundImage?.url ? (
									<Image
										src={category.backgroundImage.url}
										alt={category.name}
										fill
										className="object-contain"
									/>
								) : (
									<div className="flex h-full items-center justify-center text-xs">No Image</div>
								)}
							</div>
						</div>
						<p className="mt-2 flex items-center justify-center text-sm font-medium">{category.name}</p>
					</div>
				))}
			</div>
			{/* category wise all products */}

			{loading ? (
				<div className="pt-4 md:pt-6 lg:pt-8">
					<div className="flex items-center justify-center space-x-2">
						<div className="h-5 w-5 animate-spin rounded-full border-2 border-green-600 border-t-transparent"></div>
						<span className="text-gray-500">Loading products...</span>
					</div>
				</div>
			) : (
				<div className="">
					{selectedCategory ? (
						<div className="my-4  md:my-6 lg:pt-12">
							<ProductList products={selectedCategory.products} />
						</div>
					) : (
						<div className="my-4 md:my-6 lg:pt-12">
							{/* <ProductListingSection channel={channel} /> all products */} ALL PRODUCTS
					
						</div>
					)}
				</div>
			)}
		</div>
	);
}

// "use client";

// import { ProductListFragment, CategoryListItemFragment } from "@/gql/graphql";
// import { useState } from "react";
// import { ProductList } from "@/ui/components/ProductList";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect } from "react";

// interface CategoryWithProducts extends CategoryListItemFragment {
// 	products: ProductListFragment[];
// }

// export default function CategoryWiseProductsClient({ categories }: { categories: CategoryWithProducts[] }) {
// 	const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

// 	const selectedCategory = categories.find((cat) => cat.slug === selectedSlug);

// 	return (
// 		<div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
// 			{/* breadcrum */}
// 			<div className="lg:px-4">
// 				<nav className="text-sm text-gray-600">
// 					<span>
// 						<Link href="/" className="hover:text-black">
// 							Home
// 						</Link>
// 					</span>
// 					<span className="mx-2">{">"}</span>
// 					{selectedCategory ? (
// 						<span className="font-medium text-gray-900">{selectedCategory.name}</span>
// 					) : (
// 						<span className="text-gray-700">All Products</span>
// 					)}
// 				</nav>
// 			</div>

// 			{/* all cateogires */}
// 			<div className="scrollbar-hide flex w-full gap-4 overflow-x-auto py-4 pl-4 sm:flex-wrap sm:justify-center sm:gap-2 sm:overflow-x-visible sm:py-0 sm:pl-0 md:gap-4 md:pl-0 lg:gap-8">
// 				{categories.map((category) => (
// 					<div
// 						key={category.id}
// 						onClick={() => setSelectedSlug(category.slug)}
// 						className={`rounded   ${selectedSlug === category.slug ? "bg-gree-600 text-whit" : "bg-whit"}`}
// 					>
// 						<div className="relative h-24 w-24 cursor-pointer  overflow-hidden rounded-full bg-gray-100 sm:my-1   md:my-2 lg:my-4 lg:h-32 lg:w-32">
// 							<div className="absolute inset-2">
// 								{category.backgroundImage?.url ? (
// 									<Image
// 										src={category.backgroundImage.url}
// 										alt={category.name}
// 										fill
// 										className="object-contain"
// 									/>
// 								) : (
// 									<div className="flex h-full items-center justify-center text-xs">No Image</div>
// 								)}
// 							</div>
// 						</div>
// 						<p className="mt-2 text-sm font-medium sm:text-lg">{category.name}</p>
// 					</div>
// 				))}
// 			</div>
// 			{/* category wise all products */}
// 			{selectedCategory ? (
// 				<div className="my-4  md:my-6 lg:my-12">
// 					<ProductList products={selectedCategory.products} />
// 				</div>
// 			) : (
// 				<p>ALL PRODUCTS</p>
// 			)}
// 		</div>
// 	);
// }
