import { ProductElement } from "./ProductElement";
import { type ProductListItemFragment } from "@/gql/graphql";
import Image from "next/image";

export const ProductList = ({ products }: { products: readonly ProductListItemFragment[] }) => {
	return (
		<>
			<div className="flex justify-center  py-2 md:py-4">
				<div className="relative aspect-[16/5] w-full max-w-[450px] px-4">
					<Image src="/images/bestsellerimage.svg" alt="Kisan Basket" fill className="object-contain" />
				</div>
			</div>

			<ul
				role="list"
				data-testid="ProductList"
				className="mt-4 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-16"
			>
				{products.map((product, index) => (
					<ProductElement
						key={product.id}
						product={product}
						priority={index < 2}
						loading={index < 3 ? "eager" : "lazy"}
					/>
				))}
			</ul>
		</>
	);
};
