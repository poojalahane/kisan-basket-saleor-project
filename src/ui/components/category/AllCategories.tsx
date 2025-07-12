import Image from "next/image";
import { executeGraphQL } from "@/lib/graphql";
import { CategoryListItemDocument } from "@/gql/graphql";
import Link from "next/link";

const AllCategories = async ({ channel }: { channel: string }) => {
	try {
		const { categories } = await executeGraphQL(CategoryListItemDocument, {
			variables: {
				first: 5,
				channel,
			},
			revalidate: 60,
		});

		const categoryList = categories?.edges.map((e) => e.node);
		//console.log(categoryList);
		//console.log("GraphQL Document:", CategoryListItemDocument?.toString?.());

		return (
			<div className="relative w-full">
				<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20  sm:hidden" />

				<div className="scrollbar-hide flex w-full gap-4 overflow-x-auto py-4 pl-4 sm:flex-wrap sm:justify-center sm:gap-2 sm:overflow-x-visible sm:py-0 sm:pl-0 md:gap-4 md:pl-0 lg:gap-8">
					{categoryList?.map((category) => (
						<Link
							href={`${channel}/categories/${category.slug}`}
							key={category.id}
							className="flex-shrink-0 text-center first:ml-4 sm:first:ml-0"
						>
							<div className="relative h-24 w-24   overflow-hidden rounded-full bg-gray-100 sm:my-1   md:my-2 lg:my-4 lg:h-32 lg:w-32">
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
							<p className="mt-2 text-sm font-medium sm:text-lg">{category.name}</p>
						</Link>
					))}
				</div>
			</div>
		);
	} catch (error) {
		console.error("Failed to fetch categories:", error);
		return <div className="p-4 text-red-500">Failed to load categories.</div>;
	}
};

export default AllCategories;

// import Image from "next/image";
// import { executeGraphQL } from "@/lib/graphql";
// import { CategoryListItemDocument } from "@/gql/graphql";
// import Link from "next/link";

// const AllCategories = async ({ channel }: { channel: string }) => {
// 	try {
// 		const { categories } = await executeGraphQL(CategoryListItemDocument, {
// 			variables: {
// 				first: 10,
// 				channel,
// 			},
// 			revalidate: 60,
// 		});

// 		const categoryList = categories?.edges.map((e) => e.node);
// 		const isScrollable = (categoryList?.length ?? 0) > 6;

// 		return (
// 			<div className="relative w-full">
// 				<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20  sm:hidden" />

// 				<div
// 					className={`scrollbar-hide flex w-full gap-4 py-4 pl-4
// 						${isScrollable ? "overflow-x-auto" : ""}
// 						${isScrollable ? "md:overflow-x-auto lg:overflow-x-auto" : "sm:flex-wrap sm:justify-center sm:gap-8 sm:overflow-x-visible"}
// 						sm:py-0 sm:pl-0`}
// 				>
// 					{categoryList?.map((category) => (
// 						<Link
// 							href={`/${channel}/categories/${category.slug}`}
// 							key={category.id}
// 							className="flex-shrink-0 text-center first:ml-4 sm:first:ml-0"
// 						>
// 							<div className="relative h-24 w-24 overflow-hidden rounded-full bg-gray-100 sm:my-1 md:my-2 lg:my-4 lg:h-32 lg:w-32">
// 								<div className="absolute inset-2">
// 									{category.backgroundImage?.url ? (
// 										<Image
// 											src={category.backgroundImage.url}
// 											alt={category.name}
// 											fill
// 											className="object-contain"
// 										/>
// 									) : (
// 										<div className="flex h-full items-center justify-center text-xs">No Image</div>
// 									)}
// 								</div>
// 							</div>
// 							<p className="mt-2 text-sm font-medium sm:text-lg">{category.name}</p>
// 						</Link>
// 					))}
// 				</div>
// 			</div>
// 		);
// 	} catch (error) {
// 		console.error("Failed to fetch categories:", error);
// 		return <div className="p-4 text-red-500">Failed to load categories.</div>;
// 	}
// };

// export default AllCategories;
