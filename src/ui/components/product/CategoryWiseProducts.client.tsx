

"use client";

import { ProductListFragment, CategoryListItemFragment } from "@/gql/graphql";
import { useState } from "react";
import { ProductList } from "@/ui/components/ProductList";

interface CategoryWithProducts extends CategoryListItemFragment {
	products: ProductListFragment[];
}

export default function CategoryWiseProductsClient({
	categories,
}: {
	categories: CategoryWithProducts[];
}) {
	const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

	const selectedCategory = categories.find((cat) => cat.slug === selectedSlug);

	return (
		<div className="max-w-7xl mx-auto px-4 py-8">
			<div className="flex flex-wrap gap-4 mb-6">
				{categories.map((category) => (
					<button
						key={category.id}
						onClick={() => setSelectedSlug(category.slug)}
						className={`px-4 py-2 border rounded ${
							selectedSlug === category.slug ? "bg-green-600 text-white" : "bg-white"
						}`}
					>
						{category.name}
					</button>
				))}
			</div>

			{selectedCategory ? (
				<div>
					<h2 className="text-2xl font-semibold mb-4">{selectedCategory.name}</h2>
					<ProductList products={selectedCategory.products} />
				</div>
			) : (
				<p className="text-gray-500">Please select a category to view products.</p>
			)}
		</div>
	);
}

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { ProductList } from "@/ui/components/ProductList";

// interface Category {
// 	id: string;
// 	name: string;
// 	slug: string;
// 	backgroundImage?: {
// 		url: string;
// 	};
// }

// const CategoryWiseProductsClient = ({ categories, channel }: { categories: Category[]; channel: string }) => {
// 	const [selectedSlug, setSelectedSlug] = useState<string>(categories[0]?.slug || "");
// 	const [selectedCategoryName, setSelectedCategoryName] = useState<string>(categories[0]?.name || "");
// 	const [products, setProducts] = useState<any[]>([]);
// 	const [loading, setLoading] = useState<boolean>(false);

// 	useEffect(() => {
// 		const fetchProducts = async () => {
// 			if (!selectedSlug) return;
// 			setLoading(true);
// 			try {
// 				const res = await fetch(`/api/product?slug=${selectedSlug}&channel=${channel}`);
// 				const data = await res.json();

// 				if (data?.category?.products?.edges) {
// 					setProducts(data.category.products.edges.map((e: any) => e.node));
// 				} else {
// 					setProducts([]);
// 				}
// 			} catch (error) {
// 				console.error("Client fetch error:", error);
// 				setProducts([]);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		fetchProducts();
// 	}, [selectedSlug, channel]);

// 	return (
// 		<div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center">
// 			{/* Category list */}
// 			<div className="scrollbar-hide flex w-full gap-4 overflow-x-auto py-4 pl-4 sm:flex-wrap sm:justify-center sm:gap-8 sm:overflow-x-visible sm:py-0 sm:pl-0">
// 				{categories.map((category) => (
// 					<button
// 						key={category.id}
// 						onClick={() => {
// 							setSelectedSlug(category.slug);
// 							setSelectedCategoryName(category.name);
// 						}}
// 						className={`flex-shrink-0 text-center focus:outline-none ${
// 							category.slug === selectedSlug ? "opacity-100" : "opacity-60"
// 						}`}
// 					>
// 						<div className="relative h-24 w-24 overflow-hidden rounded-full bg-gray-100 sm:h-32 sm:w-32">
// 							{category.backgroundImage?.url ? (
// 								<Image
// 									src={category.backgroundImage.url}
// 									alt={category.name}
// 									fill
// 									className="object-contain"
// 								/>
// 							) : (
// 								<div className="flex h-full items-center justify-center text-xs">No Image</div>
// 							)}
// 						</div>
// 						<p className="mt-2 text-sm font-medium sm:text-lg">{category.name}</p>
// 					</button>
// 				))}
// 			</div>

// 			{/* Product list */}
// 			{selectedSlug && (
// 				<div className="mx-auto w-full max-w-7xl p-6 pb-16">
// 					<h2 className="pb-6 text-lg font-semibold text-gray-800">
// 						{loading
// 							? "Loading..."
// 							: products.length > 0
// 								? `Products in ${selectedCategoryName}`
// 								: `No products found for ${selectedCategoryName}`}
// 					</h2>
// 					{!loading && products.length > 0 && <ProductList products={products} />}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default CategoryWiseProductsClient;

