"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function FooterClient({ footerLinks, channels }: any) {
	const [email, setEmail] = useState("");

	return (
		<footer className="relative mt-12 border-t bg-gradient-to-br from-[#fef9f5] via-[#e1f5e2]/20 to-[#f5f5f5]">
			{/* Background Texture */}
			<div className="pointer-events-none absolute inset-0 bg-[url('/grain-texture.png')] opacity-20"></div>

			<div className="relative z-10 mx-auto max-w-7xl px-6 py-12 text-[#242424]">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
					{/* Logo & About */}
					<div>
						<div className="relative mb-4 h-[80px] w-[180px]">
							<Image
								src="/homepageimages/footerkisanbasketlogo.svg"
								alt="Kisan Basket Logo"
								fill
								className="object-contain"
							/>
						</div>
						<p className="mb-4 text-sm">
							Bringing fresh, quality produce directly from farmers to your doorstep.
						</p>
						<div className="flex space-x-4">
							<a href="#" aria-label="Facebook" className="hover:text-[#689f38]">
								<FaFacebookF className="h-5 w-5" />
							</a>
							<a
								href="https://www.instagram.com/kisan_basket?igsh=MThtcTh0eWx4Mmo3ZA=="
								aria-label="Instagram"
								className="hover:text-[#689f38]"
							>
								<FaInstagram className="h-5 w-5" />
							</a>
							<a href="#" aria-label="LinkedIn" className="hover:text-[#689f38]">
								<FaLinkedin className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="mb-4 text-lg font-bold">Quick Links</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="/about" className="hover:text-[#689f38]">
									About Us
								</a>
							</li>
							<li>
								<a href="/shop" className="hover:text-[#689f38]">
									Shop
								</a>
							</li>
							<li>
								<a href="/blog" className="hover:text-[#689f38]">
									Blog
								</a>
							</li>
							<li>
								<a href="/contact" className="hover:text-[#689f38]">
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="mb-4 text-lg font-bold">Contact Info</h3>
						<ul className="space-y-3 text-sm">
							<li className="flex items-start space-x-3">
								<FaMapMarkerAlt className="mt-1 text-[#5d4037]" />
								<span>Office No. 302, 3rd Floor, 74 Downtown, Baner Road, Baner, Pune-411045</span>
							</li>
							<li className="flex items-center space-x-3">
								<FaPhoneAlt className="text-[#5d4037]" />
								<span>+91 9730752125</span>
							</li>
							<li className="flex items-center space-x-3">
								<FaEnvelope className="text-[#5d4037]" />
								<span>info@kisanbasket.com</span>
							</li>
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className="mb-4 text-lg font-bold">Newsletter</h3>
						<p className="mb-3 text-sm">Subscribe to get updates on fresh produce and special offers.</p>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								alert(`Subscribed: ${email}`);
								setEmail("");
							}}
							className="flex"
						>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Your email"
								className="flex-grow rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
								required
							/>
							<button
								type="submit"
								className="rounded-r-md bg-[#689f38] px-4 py-2 text-sm text-white hover:bg-[#558b2f]"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-12 border-t pt-4 text-center text-sm text-[#242424]">
					<p>© {new Date().getFullYear()} Kisan Basket. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
