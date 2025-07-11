import Image from "next/image";

import { ProductListingSection } from "@/ui/components/ProductListingSection";

import AllCategories from "@/ui/components/category/AllCategories";
import CategoryWiseProducts from "@/ui/components/product/CategoryWiseProducts";

export default async function ShopPage({
	params,
	searchParams,
}: {
	params: { channel: string };
	searchParams?: { cursor?: string };
}) {
	return (
		<div
			className="h-auto min-h-[400px] w-full bg-[#F3F0F0]"
			style={{ boxShadow: "4px 4px 7.2px 0px #716B6B40" }}
		>
			{/* Hero Banner */}
			<div className="relative h-[100px] w-full md:h-[238px]">
				<Image src="/images/shopimage.svg" alt="kisan basket image" fill style={{ objectFit: "cover" }} />
			</div>

			<div className="w-full ">
				{/* Category wise products*/}
				{/* <CategoryWiseProducts channel={params.channel} /> */}
			</div>
		</div>
	);
}

// import Image from "next/image";

// import { ProductListingSection } from "@/ui/components/ProductListingSection";

// import AllCategories from "@/ui/components/category/AllCategories";

// export default async function ShopPage({
// 	params,
// 	searchParams,
// }: {
// 	params: { channel: string };
// 	searchParams?: { cursor?: string };
// }) {
// 	return (
// 		<div
// 			className="h-auto min-h-[400px] w-full bg-[#F3F0F0]"
// 			style={{ boxShadow: "4px 4px 7.2px 0px #716B6B40" }}
// 		>
// 			{/* Hero Banner */}
// 			<div className="relative h-[100px] w-full md:h-[238px]">
// 				<Image src="/images/shopimage.svg" alt="kisan basket image" fill style={{ objectFit: "cover" }} />
// 			</div>

// 			<div className="w-full ">
// 				{/* Categories */}
// 				<div className="flex w-full items-center justify-center px-2 lg:pt-8 ">
// 					<AllCategories channel={params.channel} />
// 				</div>

// 				<div>
// 					<ProductListingSection
// 						channel={params.channel}
// 						cursor={typeof searchParams?.cursor === "string" ? searchParams.cursor : null}
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
