import { executeGraphQL } from "@/lib/graphql";
import { GetCategoriesDocument } from "@/gql/graphql"; // make sure this is NOT undefined

export default async function Page() {
	try {
		const { categories } = await executeGraphQL(GetCategoriesDocument, {
			variables: {
				first: 10,
			},
			revalidate: 60,
		});

		const categoryList = categories?.edges.map((e) => e.node);
		console.log("Categories:", categoryList);

		return (
			<div className="p-4">
				<h2 className="mb-4 text-xl font-bold">Categories</h2>
				<ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
					{categoryList?.map((cat) => (
						<li key={cat.id} className="rounded bg-white p-4 shadow">
							<p className="font-semibold">{cat.name}</p>
							{cat.backgroundImage?.url && (
								<img
									src={cat.backgroundImage.url}
									alt={cat.name}
									className="mt-2 h-32 w-full rounded object-cover"
								/>
							)}
						</li>
					))}
				</ul>
			</div>
		);
	} catch (error) {
		console.error("Failed to fetch categories:", error);
		return <div>Error loading categories.</div>;
	}
}

// "use client";

// import { useEffect, useState } from "react";
// import { executeGraphQL } from "@/lib/graphql";
// import { GET_CATEGORIES } from "@/lib/getCategories";

// type Category = {
// 	id: string;
// 	name: string;
// 	slug: string;
// 	backgroundImage?: { url: string } | null;
// };

// export default function CategoryPage() {
// 	const [categories, setCategories] = useState<Category[]>([]);

// 	useEffect(() => {
// 		(async () => {
// 			try {
// 				const data = await executeGraphQL<{ categories: { edges: { node: Category }[] } }, {}>(
// 					GET_CATEGORIES,
// 					{ withAuth: false },
// 				);
// 				setCategories(data.categories.edges.map((edge) => edge.node));
// 				console.log(categories);
// 			} catch (error) {
// 				console.error("Error loading categories", error);
// 			}
// 		})();
// 	}, []);
// console.log(categories);
// 	return (
// 		<div className="grid grid-cols-2 gap-4 p-4">
// 			{categories.map((category) => (
// 				<div key={category.id} className="rounded border p-4 shadow">
// 					{category.backgroundImage?.url ? (
// 						<img
// 							src={category.backgroundImage.url}
// 							alt={category.name}
// 							className="mb-2 h-32 w-full rounded object-cover"
// 						/>
// 					) : null}
// 					<h2 className="text-xl font-semibold">{category.name}</h2>
// 				</div>
// 			))}
// 		</div>
// 	);
// }

// "use client";
// import { Suspense } from "react";
// import { Loader } from "@/ui/atoms/Loader";
// import AllCategories from "@/ui/components/category/AllCategories";

// import Image from "next/image";
// export default function HomePage() {
// 	return (
// 		<Suspense fallback={<Loader />}>
// 			<main className="mx-auto max-w-7xl p-8">
// 				<AllCategories />
// 				<div className="flex justify-center">
// 					<div className="relative h-64 w-64 lg:h-[110px] lg:w-[450px]">
// 						<Image src="/images/bestsellerimage.svg" alt="Kisan Basket" fill className="object-contain" />
// 					</div>
// 				</div>
// 			</main>
// 		</Suspense>
// 	);
// }
