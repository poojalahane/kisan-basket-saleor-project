// components/FooterClient.tsx
"use client";

import React, { useState } from "react";
import Image from "next/Image";
import { FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function FooterClient({ footerLinks, channels }: any) {
	const [email, setEmail] = useState("");

	return (
		<footer className="">
			<div
				className="md:lg-16 relative   w-full px-6 
		py-4 text-[#242424] md:pt-10 lg:h-[500px] lg:py-0 lg:pt-12 "
			>
				<Image
					src="/homepageimages/footerbackgroundimage.svg"
					alt="Hero Background"
					fill
					className="z-0 hidden  object-cover lg:block"
					priority
				/>

				<div className="relative z-10 ">
					<div className="mx-auto grid max-w-7xl grid-cols-1 text-[#242424] sm:grid-cols-2  md:grid-cols-4 lg:gap-10">
						{/* Logo & About */}
						<div className="">
							<div className="mb-1 flex items-center space-x-2 text-[#242424] ">
								<div className="relative h-[80px] w-[180px] md:h-[90px] md:w-[232px]">
									<Image src="/homepageimages/footerkisanbasketlogo.svg" alt="Banner" fill className="" />
								</div>
							</div>
							<p className="mb-4 text-sm text-black ">
								Bringing fresh, quality produce directly from farmers to your doorstep.
							</p>
							<div className="flex space-x-4 text-[#242424] ">
								<a href="#" className="hover:text-white">
									<FaFacebookF className="h-6 w-6" />
								</a>
								<a
									href="https://www.instagram.com/kisan_basket?igsh=MThtcTh0eWx4Mmo3ZA=="
									className="hover:text-white"
								>
									<FaInstagram className="h-6 w-6" />
								</a>
								<a href="#" className="hover:text-white">
									<FaLinkedin className="h-6 w-6" />
								</a>
							</div>
						</div>

						{/* Quick Links */}
						<div className="pt-4  text-black md:pt-[10px] lg:ml-16 lg:pl-[32px]">
							<h3 className="mb-4 text-lg font-bold lg:text-[22px] ">Quick Links</h3>
							<ul className="space-y-2 text-sm  lg:text-[16px]">
								<li>
									<a href="/about" className="hover:text-white">
										About Us
									</a>
								</li>
								<li>
									<a href="/shop" className="hover:text-white">
										Shop
									</a>
								</li>
								<li>
									<a href="/blog" className="hover:text-white">
										Blog
									</a>
								</li>
								<li>
									<a href="/contact" className="hover:text-white">
										Contact
									</a>
								</li>
							</ul>
						</div>

						{/* Contact Info */}
						<div className="pt-4 text-black md:pt-[10px]">
							<h3 className="mb-4 text-lg font-bold lg:text-[22px]">Contact Info</h3>
							<ul className="space-y-3 text-sm  lg:text-[16px]">
								<li className="flex items-start space-x-2">
									<FaMapMarkerAlt className="mt-1 h-6 w-6" />
									<span>Office No. 302, 3rd Floor, 74 Downtown, Baner Road, Baner, Pune-411045</span>
								</li>
								<li className="flex items-start space-x-2">
									<FaPhoneAlt className="mt-1 " />
									<span>+919730752125</span>
								</li>
								<li className="flex items-start space-x-2">
									<FaEnvelope className="mt-1 " />
									<span>info@kisanbasket.com</span>
								</li>
							</ul>
						</div>

						{/* Newsletter */}
						<div className="pt-4 text-black md:pt-[10px]">
							<h3 className="mb-4 text-lg font-bold lg:text-[22px]">Newsletter</h3>
							<p className="mb-4 text-sm lg:text-[16px] ">
								Subscribe to get updates on fresh produce and special offers.
							</p>
							{/* <form className="flex">
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Your email"
							className="w-full rounded-l-md px-3 py-2 text-sm text-black focus:outline-none"
							required
						/>
						<button type="submit" className="rounded-r-md bg-green-600 px-4 py-2 text-sm hover:bg-green-700">
							Subscribe
						</button>
					</form> */}
						</div>
					</div>

					<div className=" mt-2 md:mt-6 border-t border-gray-100  pt-2 text-center text-sm text-white lg:mt-52  ">
						<p className=" ">© {new Date().getFullYear()} Kisan Basket. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

// import Link from "next/link";
// import Image from "next/image";
// import { LinkWithChannel } from "../atoms/LinkWithChannel";
// import { ChannelSelect } from "./ChannelSelect";
// import { ChannelsListDocument, MenuGetBySlugDocument } from "@/gql/graphql";
// import { executeGraphQL } from "@/lib/graphql";

// export async function Footer({ channel }: { channel: string }) {
// 	const footerLinks = await executeGraphQL(MenuGetBySlugDocument, {
// 		variables: { slug: "footer", channel },
// 		revalidate: 60 * 60 * 24,
// 	});
// 	const channels = process.env.SALEOR_APP_TOKEN
// 		? await executeGraphQL(ChannelsListDocument, {
// 				withAuth: false, // disable cookie-based auth for this call
// 				headers: {
// 					// and use app token instead
// 					Authorization: `Bearer ${process.env.SALEOR_APP_TOKEN}`,
// 				},
// 		  })
// 		: null;
// 	const currentYear = new Date().getFullYear();

// 	return (
// 		<footer className="border-neutral-300 bg-neutral-50">
// 			<div className="mx-auto max-w-7xl px-4 lg:px-8">
// 				<div className="grid grid-cols-3 gap-8 py-16">
// 					{footerLinks.menu?.items?.map((item) => {
// 						return (
// 							<div key={item.id}>
// 								<h3 className="text-sm font-semibold text-neutral-900">{item.name}</h3>
// 								<ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
// 									{item.children?.map((child) => {
// 										if (child.category) {
// 											return (
// 												<li key={child.id} className="text-sm">
// 													<LinkWithChannel href={`/categories/${child.category.slug}`}>
// 														{child.category.name}
// 													</LinkWithChannel>
// 												</li>
// 											);
// 										}
// 										if (child.collection) {
// 											return (
// 												<li key={child.id} className="text-sm">
// 													<LinkWithChannel href={`/collections/${child.collection.slug}`}>
// 														{child.collection.name}
// 													</LinkWithChannel>
// 												</li>
// 											);
// 										}
// 										if (child.page) {
// 											return (
// 												<li key={child.id} className="text-sm">
// 													<LinkWithChannel href={`/pages/${child.page.slug}`}>
// 														{child.page.title}
// 													</LinkWithChannel>
// 												</li>
// 											);
// 										}
// 										if (child.url) {
// 											return (
// 												<li key={child.id} className="text-sm">
// 													<LinkWithChannel href={child.url}>{child.name}</LinkWithChannel>
// 												</li>
// 											);
// 										}
// 										return null;
// 									})}
// 								</ul>
// 							</div>
// 						);
// 					})}
// 				</div>

// 				{channels?.channels && (
// 					<div className="mb-4 text-neutral-500">
// 						<label>
// 							<span className="text-sm">Change currency:</span> <ChannelSelect channels={channels.channels} />
// 						</label>
// 					</div>
// 				)}

// 				<div className="flex flex-col justify-between border-t border-neutral-200 py-10 sm:flex-row">
// 					<p className="text-sm text-neutral-500">Copyright &copy; {currentYear} Your Store, Inc.</p>
// 					<p className="flex gap-1 text-sm text-neutral-500">
// 						Powered by{" "}
// 						<Link target={"_blank"} href={"https://saleor.io/"}>
// 							Saleor
// 						</Link>{" "}
// 						<Link href={"https://github.com/saleor/saleor"} target={"_blank"} className={"opacity-30"}>
// 							<Image alt="Saleor github repository" height={20} width={20} src={"/github-mark.svg"} />
// 						</Link>
// 					</p>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }
