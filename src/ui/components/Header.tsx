"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";

export function Header({ channel, cartCount }: { channel: string; cartCount: number }) {
	const router = useRouter();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: `/${channel}/products`, label: "Products" },
		{ href: `/${channel}/outlet`, label: "Outlet" },
		{ href: `/${channel}/contact`, label: "Contact" },
		{ href: `/${channel}/blog`, label: "Blog" },
	];

	return (
		<header className="sticky top-0 z-50 w-full bg-white shadow-md">
			<div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div
						onClick={() => router.push(`/${channel}`)}
						className="relative h-12 w-32 cursor-pointer md:h-16 md:w-40"
					>
						<Image
							src="/images/kisanbasketLogo.svg"
							alt="Kisan Basket Logo"
							fill
							className="object-contain"
							priority
						/>
					</div>

					<nav className="hidden text-base  font-semibold  text-[rgb(139,69,19)] md:flex md:items-center md:space-x-6 lg:space-x-10 lg:text-[20px]">
						{navLinks.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								className="transition-colors duration-200 hover:text-[rgb(139,195,74)]"
							>
								{label}
							</Link>
						))}
					</nav>

					<div className="hidden text-3xl text-[rgb(139,69,19)] md:flex md:items-center md:space-x-5">
						<button onClick={() => router.push(`/${channel}/products`)}>
							<CiSearch className="transition hover:text-[rgb(139,195,74)]" />
						</button>

						<button onClick={() => router.push(`/${channel}/cart`)}>
							<div className="relative">
								<CiShoppingCart className="transition hover:text-[rgb(139,195,74)]" />
								<span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[rgb(139,195,74)] text-xs text-white">
									{cartCount}
								</span>
								{/* <CartNavItem channel={channel} /> */}
							</div>
						</button>

						<button onClick={() => router.push(`/${channel}/login`)}>
							<CiUser className="transition hover:text-[rgb(139,195,74)]" />
						</button>
					</div>

					<button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
						<div className="relative h-8 w-8">
							{isMenuOpen ? (
								<span className="text-2xl font-bold">×</span>
							) : (
								<Image src="/images/menu.svg" alt="Menu" fill className="object-contain" />
							)}
						</div>
					</button>
				</div>

				{isMenuOpen && (
					<div className="font-poppins mt-2 space-y-2 rounded-md bg-white p-4 text-[rgb(139,69,19)] shadow-md md:hidden">
						{navLinks.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								className="block py-2 text-base transition hover:text-[rgb(139,195,74)]"
								onClick={() => setIsMenuOpen(false)}
							>
								{label}
							</Link>
						))}

						<button
							onClick={() => {
								router.push(`/${channel}/cart`);
								setIsMenuOpen(false);
							}}
							className="w-full py-2 text-left transition hover:text-[rgb(139,195,74)]"
						>
							Cart ({cartCount})
						</button>

						<button
							onClick={() => {
								router.push(`/${channel}/login`);
								setIsMenuOpen(false);
							}}
							className="mt-4 w-full rounded-md bg-[#646A36] px-4 py-2 text-sm text-white shadow"
						>
							Sign In
						</button>
					</div>
				)}
			</div>
		</header>
	);
}
