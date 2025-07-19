import { notFound } from "next/navigation";
import { ProductListPaginatedDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { Pagination } from "@/ui/components/Pagination";
import { ProductList } from "@/ui/components/ProductList";
import { ProductsPerPage } from "@/app/config";
import Image from "next/image";

import CategoryWiseProducts from "@/ui/components/product/CategoryWiseProducts";

export const metadata = {
	title: "Products · Saleor Storefront example",
	description: "All products in Saleor Storefront example",
};

export default async function Page(props: {
	params: Promise<{ channel: string }>;
	searchParams: Promise<{
		cursor: string | string[] | undefined;
	}>;
}) {
	const searchParams = await props.searchParams;
	const params = await props.params;
	const cursor = typeof searchParams.cursor === "string" ? searchParams.cursor : null;

	const { products } = await executeGraphQL(ProductListPaginatedDocument, {
		variables: {
			first: ProductsPerPage,
			after: cursor,
			channel: params.channel,
		},
		revalidate: 60,
	});
	console.log(products);

	if (!products) {
		notFound();
	}

	const newSearchParams = new URLSearchParams({
		...(products.pageInfo.endCursor && { cursor: products.pageInfo.endCursor }),
	});

	return (
		<div
			className="h-auto min-h-[400px] w-full bg-[#F3F0F0]"
			style={{ boxShadow: "4px 4px 7.2px 0px #716B6B40" }}
		>
			<div className="relative w-full md:h-[238px] lg:h-[289px]">
				<Image
					src="/shoppageimages/shoppageherosectionimage.svg"
					alt="kisan basket image"
					fill
					className="object-cover"
				/>
			</div>

			<div className="w-full ">
				<CategoryWiseProducts channel={params.channel} />
			</div>

			<section className="mx-auto max-w-7xl pb-16">
				<h2 className="sr-only">Product list</h2>
				<ProductList products={products.edges.map((e) => e.node)} />
				<Pagination
					pageInfo={{
						...products.pageInfo,
						basePathname: `/products`,
						urlSearchParams: newSearchParams,
					}}
				/>
			</section>
		</div>
	);
}
