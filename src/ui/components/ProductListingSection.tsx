import { notFound } from "next/navigation";
import { ProductListPaginatedDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { Pagination } from "@/ui/components/Pagination";
import { ProductList } from "@/ui/components/ProductList";
import { ProductsPerPage } from "@/app/config";

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

	const newSearchParams = new URLSearchParams({
		...(products.pageInfo.endCursor && { cursor: products.pageInfo.endCursor }),
	});

	return (
		<section className="mx-auto max-w-7xl p-8 pb-16">
			<h2 className="sr-only">Product list</h2>
			<ProductList products={products.edges.map((e) => e.node)} />
			{/* <Pagination
				pageInfo={{
					...products.pageInfo,
					basePathname: `/`, // since it's on homepage now
					urlSearchParams: newSearchParams,
				}}
			/> */}
		</section>
	);
}
