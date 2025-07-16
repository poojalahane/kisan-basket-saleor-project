import React from "react";
import Image from "next/image";
import Link from "next/link";
const page = ({ slug }) => {
	return (
		<div>
			<div className="min-h-screen bg-white text-gray-800">
				{/* Header / Hero Section */}
				<section className="relative h-[300px] w-full overflow-hidden md:h-[400px] lg:h-[440px]">
					{/* background image */}
					<Image src="/blogimages/ghee-banner.svg" alt="kisan basket image" fill className="object-cover" />
					{/* <div className="absolute inset-0 flex items-center justify-center bg-black/40">
						<h1 className="max-w-3xl px-4 text-center text-3xl font-bold text-white md:text-5xl">
							The Future of Sustainable Farming: Insights and Innovation
						</h1>
					</div> */}
				</section>

				{/* Content Section */}
				<main className=" min-h-[400px] bg-[#EBE4E4]">
					{/* bredcrumb */}
					<div className="p-4">
						<nav className="text-[12px] text-gray-600">
							<span>
								<Link href="/" className="hover:text-black">
									Home
								</Link>
							</span>
							<span className="mx-2">{">"}</span>

							<span>
								<Link href="/blog" className="hover:text-black">
									Blogs
								</Link>
							</span>
							<span className="mx-2">{">"}</span>

							<span className="font-medium text-gray-900">Ghee</span>
						</nav>
					</div>
					<div className="mx-auto flex max-w-7xl items-center justify-center space-x-4 px-2 py-2 md:py-4 lg:py-8">
						<div>
							<div className="relative min-h-[200px] md:w-[480px] lg:h-[304px]">
								<Image src="/blogimages/ghee.svg" alt="blog image" fill className="object-cover" />
							</div>
						</div>
						<div className="flex flex-col px-4 py-8 md:px-8 lg:px-16">
							<h2 className="mb-4 text-2xl font-bold  md:text-3xl lg:text-4xl">
								Desi Ghee Benefits
							</h2>

							<ul className="space-y-4 text-base text-gray-700 md:text-lg">
								<li className="flex items-start">
									<span className="mr-3 mt-1 ">✔</span>
									<p>Boosts immunity and promotes healthy digestion.</p>
								</li>
								<li className="flex items-start">
									<span className="mr-3 mt-1 ">✔</span>
									<p>Rich source of healthy fats and fat-soluble vitamins (A, D, E, K).</p>
								</li>
								<li className="flex items-start">
									<span className="mr-3 mt-1 ">✔</span>
									<p>Enhances brain function and memory power.</p>
								</li>
								<li className="flex items-start">
									<span className="mr-3 mt-1 ">✔</span>
									<p>Improves skin health and gives natural glow.</p>
								</li>
								<li className="flex items-start">
									<span className="mr-3 mt-1 ">✔</span>
									<p>Lubricates joints and strengthens bones.</p>
								</li>
							</ul>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default page;
{
	/* <main className="mx-auto max-w-4xl bg-[#EBE4E4] px-4 py-12">
					<div className="mb-6 flex items-center justify-between text-sm text-gray-500">
						<p>
							By <span className="font-medium text-gray-700">Pooja Lahane</span>
						</p>
						<p>Published on July 16, 2025</p>
					</div>
				
					<article className="prose prose-lg max-w-none prose-headings:text-green-700 prose-a:text-green-600">
						<p>
							Sustainable farming is not just a trend—it's a necessity. With global population growth and
							climate challenges, farmers are turning to smarter, greener ways to produce food.
						</p>

						<h2>Why Sustainability Matters</h2>
						<p>
							Environmental concerns and resource scarcity demand more sustainable agriculture techniques.
							Reducing chemical usage and increasing biodiversity are essential steps toward a healthier
							planet.
						</p>

						<h2>Key Innovations</h2>
						<ul>
							<li>Precision Agriculture</li>
							<li>Vertical Farming</li>
							<li>Organic Pest Control</li>
							<li>Smart Irrigation Systems</li>
						</ul>

						<h2>Conclusion</h2>
						<p>
							By adopting sustainable practices today, we ensure a better tomorrow—for the farmers, consumers,
							and the Earth.
						</p>
					</article>
				</main> */
}

{
	/* Author & Date */
}
