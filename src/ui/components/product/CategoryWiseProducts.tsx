import { executeGraphQL } from "@/lib/graphql";
import { CategoryListItemDocument, ProductListByCategoryDocument } from "@/gql/graphql";
import CategoryWiseProductsClient from "./CategoryWiseProducts.client";

const CategoryWiseProducts = async ({ channel }: { channel: string }) => {
	const { categories } = await executeGraphQL(CategoryListItemDocument, {
		variables: { first: 10, channel },
		revalidate: 60,
	});

	const categoryList = categories?.edges.map((e) => e.node) || [];

	// Fetch products for each category
	const categoriesWithProducts = await Promise.all(
		categoryList.map(async (category) => {
			const { category: categoryData } = await executeGraphQL(ProductListByCategoryDocument, {
				variables: { slug: category.slug, channel },
				revalidate: 60,
			});

			return {
				...category,
				products: categoryData?.products?.edges.map((e) => e.node) || [],
			};
		}),
	);

	return <CategoryWiseProductsClient channel={channel} categories={categoriesWithProducts} />;
};

export default CategoryWiseProducts;

// import { executeGraphQL } from "@/lib/graphql";
// import { CategoryListItemDocument } from "@/gql/graphql";
// import CategoryWiseProductsClient from "./CategoryWiseProducts.client";

// const CategoryWiseProducts = async ({ channel }: { channel: string }) => {
// 	const { categories } = await executeGraphQL(CategoryListItemDocument, {
// 		variables: { first: 10, channel },
// 		revalidate: 60,
// 	});

// 	const categoryList = categories?.edges.map((e) => e.node) || [];

// 	return <CategoryWiseProductsClient categories={categoryList} channel={channel} />;
// };

// export default CategoryWiseProducts;
