import AllCategories from "@/ui/components/category/AllCategories";
import { ProductListingSection } from "@/ui/components/ProductListingSection";
import ProcessImagesComponent from "@/ui/components/ProcessImagesComponent";
import Carousel from "@/ui/components/Carousel";
import ShopPage from "@/ui/components/HomeContent/OutletSection";
import YouTubeShortsCarousel from "@/ui/components/HomeContent/YoutubeShortsSection";
import Image from "next/image";

import CustomerFeedback from "@/ui/components/HomeContent/CustomerFeedback";

export const metadata = {
	title: "Kisan Basket - Fresh Groceries Delivered to Your Doorstep",
	description:
		"Order fresh vegetables, fruits, and groceries online with Kisan Basket. India's trusted e-commerce platform for farm-fresh produce and daily essentials. Fast delivery, great deals!",
	keywords: [
		"Kisan Basket",
		"online grocery",
		"fresh vegetables",
		"farm fresh fruits",
		"grocery delivery India",
		"online fruits and vegetables",
		"Kisan grocery store",
		"ecommerce grocery India",
		"organic produce delivery",
	],
	authors: [{ name: "Kisan Basket Team", url: "https://kisanbasket.com" }],
	openGraph: {
		title: "Kisan Basket - Fresh Groceries Delivered to Your Doorstep",
		description:
			"Shop online at Kisan Basket for farm-fresh groceries and get them delivered fast. Quality fruits, vegetables, grains, and more—straight from farm to home.",
		url: "https://kisanbasket.com",
		siteName: "Kisan Basket",
		images: [
			{
				url: "https://kisanbasket.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Kisan Basket - Online Grocery Delivery",
			},
		],
		locale: "en_IN",
		type: "website",
	},

	metadataBase: new URL("https://kisanbasket.com"),
};

export default async function HomePage(props: { params: Promise<{ channel: string }> }) {
	const channel = (await props.params).channel;

	return (
		<section>
			<main className="  bg-[#F3F0F0]">
				<div className="hidden lg:block">
					<Carousel />
				</div>

				{/* Categories */}
				<div className="mx-auto flex w-full items-center justify-center p-2 py-2 md:p-4 md:py-4 lg:p-8">
					<AllCategories channel={channel} />
				</div>

				{/* Products */}
				<div className="mx-auto">
					<div className="flex justify-center  py-2 md:py-4">
						<div className="relative aspect-[16/5] w-[220px] px-4  md:w-[300px] lg:w-[450px]">
							<Image src="/images/bestsellerimage.svg" alt="Kisan Basket" fill className="object-contain" />
						</div>
					</div>
					<div className="">
						<ProductListingSection channel={channel} />
					</div>
				</div>

				<div>
					<YouTubeShortsCarousel />
				</div>

				{/* Process Steps */}
				<ProcessImagesComponent />
				<div className="">
					<ShopPage />
				</div>

				<div className="mt-4 md:mt-0 "></div>
				<CustomerFeedback />
			</main>
		</section>
	);
}

// import { ProductListByCollectionDocument } from "@/gql/graphql";
// import { executeGraphQL } from "@/lib/graphql";
// import { ProductList } from "@/ui/components/ProductList";

// export const metadata = {
// 	title: "ACME Storefront, powered by Saleor & Next.js",
// 	description:
// 		"Storefront Next.js Example for building performant e-commerce experiences with Saleor - the composable, headless commerce platform for global brands.",
// };

// export default async function Page(props: { params: Promise<{ channel: string }> }) {
// 	const params = await props.params;
// 	const data = await executeGraphQL(ProductListByCollectionDocument, {
// 		variables: {
// 			slug: "featured-products",
// 			channel: params.channel,
// 		},
// 		revalidate: 60,
// 	});

// 	if (!data.collection?.products) {
// 		return null;
// 	}

// 	const products = data.collection?.products.edges.map(({ node: product }) => product);

// 	return (
// 		<section className="mx-auto max-w-7xl p-8 pb-16 ">
// 			<h2 className="sr-only">Product list</h2>

// 			<ProductList products={products} />

// 		</section>
// 	);
// }
