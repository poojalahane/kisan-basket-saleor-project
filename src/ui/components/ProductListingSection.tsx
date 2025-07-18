import { notFound } from "next/navigation";
import { ProductListPaginatedDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { ProductList } from "@/ui/components/ProductList";
import { ProductsPerPage } from "@/app/config";
import { LinkWithChannel } from "../atoms/LinkWithChannel";

// interface Props {
// 	channel: string;
// 	cursor?: string | null;
// }

// export async function ProductListingSection({ channel, cursor }: Props) {
// 	const { products } = await executeGraphQL(ProductListPaginatedDocument, {
// 		variables: {
// 			first: ProductsPerPage,
// 			after: cursor ?? null,
// 			channel,
// 		},
// 		revalidate: 60,
// 	});

// 	if (!products) notFound();

// 	const newSearchParams = new URLSearchParams({
// 		...(products.pageInfo.endCursor && { cursor: products.pageInfo.endCursor }),
// 	});

// 	return (
// 		<section className="max-w-7xl md:mx-auto md:p-4  md:pb-8 lg:p-8 lg:pb-16">
// 			<div className="mb-12 text-center">
// 				<h2
// 					className="mb-4 text-3xl font-bold md:text-4xl"
// 					style={{
// 						color: "#8B4513",
// 					}}
// 				>
// 					Best Sellers
// 				</h2>
// 				<p className="mx-auto max-w-2xl text-xl text-gray-600">Our most loved products by customers</p>
// 			</div>
// 			<ProductList products={products.edges.map((e) => e.node)} />
// 		</section>
// 	);
// }

interface Props {
	channel: string;
	cursor?: string | null;
}

export async function ProductListingSection({ channel, cursor }: Props) {
	const { products } = await executeGraphQL(ProductListPaginatedDocument, {
		variables: {
			first: ProductsPerPage,
			after: cursor ?? null,
			channel,
		},
		revalidate: 60,
	});

	if (!products) notFound();

	const topProducts = products.edges.slice(0, 8).map((e) => e.node);

	return (
		<section className="bg-[#FFFBEF] py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold text-[#8B4513] md:text-4xl">Best Sellers</h2>
					<p className="mx-auto max-w-2xl text-xl text-gray-600">Our most loved products by customers</p>
				</div>

				{/* <ProductList products={products.edges.map((e) => e.node)} /> */}
				<ProductList products={topProducts} />
			</div>
			<div className="mt-12 text-center">
				<LinkWithChannel href="/shop">
					<button
						className="px-8 py-4 hover:bg-[#DAA520]"
						style={{ backgroundColor: "#8B4513", color: "#fff" }}
					>
						View All Products
						{/* <ArrowRight className="ml-2 h-5 w-5" /> */}
					</button>
				</LinkWithChannel>
			</div>
		</section>
	);
}
