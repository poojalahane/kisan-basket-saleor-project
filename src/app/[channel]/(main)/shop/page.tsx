import Image from "next/image";

import CategoryWiseProducts from "@/ui/components/product/CategoryWiseProducts";

export default async function ShopPage({
	params,
	searchParams,
}: {
	params: { channel: string };
	searchParams?: { cursor?: string };
}) {
	const channel = params.channel;
	return (
		<div
			className="h-auto min-h-[400px] w-full bg-[#F3F0F0]"
			style={{ boxShadow: "4px 4px 7.2px 0px #716B6B40" }}
		>
			{/* Hero Banner */}
			<div className="relative w-full md:h-[238px] lg:h-[289px]">
				{/* background image */}
				<Image
					src="/shoppageimages/shopbannerimage.png"
					alt="kisan basket image"
					fill
					className="object-cover"
				/>
				{/* clouds */}
				<Image
					src="/shoppageimages/cloud1.svg"
					alt="Cloud Top Left"
					width={80}
					height={150}
					className="absolute left-[100px] top-4 z-20 hidden md:block md:h-[120px] md:w-[80px] lg:h-[150px] lg:w-[100px]"
				/>
				<Image
					src="/shoppageimages/cloud2.svg"
					alt="Cloud Bottom Left"
					width={120}
					height={200}
					className="absolute left-[200px]  top-4 z-20 hidden md:block md:h-[140px] md:w-[100px] lg:h-[180px] lg:w-[130px]"
				/>{" "}
				<Image
					src="/shoppageimages/cloud3.svg"
					alt="Cloud Center Left"
					width={120}
					height={200}
					className="absolute left-[300px]   top-4 z-20 hidden -translate-y-1/2 md:block md:h-[120px] md:w-[100px] lg:h-[160px] lg:w-[130px]"
				/>
				<Image
					src="/shoppageimages/cloud4.svg"
					alt="Cloud Top Right"
					width={100}
					height={110}
					className="absolute  left-[400px] top-4 z-20 hidden md:block md:h-[110px] md:w-[100px] lg:h-[137px] lg:w-[128px]"
				/>
				<Image
					src="/shoppageimages/cloud5.svg"
					alt="Cloud Bottom Right"
					width={100}
					height={110}
					className="absolute left-[800px]  z-20 hidden md:block md:h-[110px] md:w-[100px] lg:h-[137px] lg:w-[128px]"
				/>
			</div>

			<div className="w-full ">
				{/* Category wise products*/}
				<CategoryWiseProducts channel={channel} />
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
