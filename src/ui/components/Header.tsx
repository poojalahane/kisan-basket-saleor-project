"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";

export function Header({ channel }: { channel: string }) {
	const router = useRouter();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [cartCount] = useState(0);

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: `/${channel}/shop`, label: "Shop" },
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

					<nav className="hidden font-jua text-base text-[rgb(139,69,19)] md:flex md:items-center md:space-x-6 lg:space-x-10 lg:text-[22px]">
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

//! last version of code
// "use client";
// import { Logo } from "./Logo";
// import { Nav } from "./nav/Nav";
// import Image from "next/image";
// import React, { useState } from "react";
// import Link from "next/Link";
// import { useRouter } from "next/navigation";

// export function Header({ channel }: { channel: string }) {
// 	const router = useRouter();
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);
// 	const [showSearch, setShowSearch] = useState(false);
// 	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// 	const toggleMenu = () => setIsMenuOpen((prev) => !prev);
// 	return (
// 		<header className="sticky top-0 z-20 bg-neutral-100/50 bg-white">
// 			<div className="mx-auto max-w-7xl px-3 sm:px-8">
// 				<div className="flex h-16 justify-between gap-4 md:gap-8">
// 					<div
// 						onClick={() => router.push("/kisan-basket")}
// 						className="h-[50px] w-[120px]  cursor-pointer md:h-[64px] md:w-[150px]"
// 						style={{ position: "relative" }}
// 					>
// 						<Image
// 							src="/images/kisanbasketLogo.svg"
// 							alt="kisan basket image"
// 							fill
// 							style={{ objectFit: "contain" }}
// 						/>
// 					</div>
// 					<div className="hidden items-center justify-center text-center font-jua text-[16px] font-normal leading-[20px]  tracking-[0%] text-[#242424] md:flex md:space-x-4 lg:space-x-8 lg:text-[20px]">
// 						<Link href="/">Home</Link>
// 						{/* <Link href="/kisan-basket/about">About</Link> */}
// 						<Link href="/kisan-basket/shop">Shop</Link>
// 						{/* <div className="hidden lg:flex">
// 							<SearchBar channel={channel} />
// 						</div> */}

// 						<Link href="/kisan-basket/outlet">Outlet</Link>
// 						<Link href="/kisan-basket/contact">Contact</Link>
// 						<Link href="/kisan-basket/contact">Blog</Link>
// 					</div>
// 					<div className="hidden items-center md:flex ">
// 						{/* <FaSearch /> */}

// <div className="cursor-pointer " style={{ position: "relative", width: "60px", height: "34px" }}>
// 	<Image
// 		onClick={() => router.push("/kisan-basket/products")}
// 		src="/images/search.svg"
// 		alt="kisan basket image"
// 		fill
// 		style={{ objectFit: "contain" }}
// 	/>
// </div>
// 						<div
// 							onClick={() => router.push("/kisan-basket/cart")}
// 							className="cursor-pointer "
// 							style={{ position: "relative", width: "60px", height: "34px" }}
// 						>
// 							<Image src="/images/cart.svg" alt="kisan basket image" fill style={{ objectFit: "contain" }} />
// 						</div>
// 						<div
// 						// onClick={() => setIsDropdownOpen(!isDropdownOpen)}
// 						>
// 							<div
// 								className="cursor-pointer "
// 								style={{ position: "relative", width: "60px", height: "34px" }}
// 							>
// 								<Image
// 									onClick={() => router.push("/kisan-basket/login")}
// 									src="/images/profileicon.svg"
// 									alt="kisan basket image"
// 									fill
// 									style={{ objectFit: "contain" }}
// 								/>
// 							</div>
// 						</div>
// 					</div>
// 					{/* Mobile Menu Button */}
// 					<button
// 						className="text-headerTextColor rounded-md p-2 font-semibold hover:text-black md:hidden"
// 						onClick={toggleMenu}
// 						aria-label="Toggle Menu"
// 					>
// 						{isMenuOpen ? (
// 							<div className="h-[30px] w-[30px]">X</div>
// 						) : (
// 							<div className="" style={{ position: "relative", width: "30px", height: "32px" }}>
// 								<Image
// 									src="/images/menu.svg"
// 									alt="kisan basket image"
// 									fill
// 									style={{ objectFit: "contain" }}
// 								/>
// 							</div>
// 						)}
// 					</button>
// 					{/* <Nav channel={channel} /> */}
// 				</div>
// 				{/* Mobile Menu */}
// 				{isMenuOpen && (
// 					<nav className="text-headerTextColor space-y-2 bg-white px-4 pb-4 font-jua font-normal shadow-md md:hidden">
// 						<Link
// 							href="/"
// 							className="block py-1  transition hover:text-green-700"
// 							onClick={() => setIsMenuOpen(false)}
// 						>
// 							Home
// 						</Link>
// 						{/* <Link
// 							href="/kisan-basket/about"
// 							className="block py-1  transition hover:text-green-700"
// 							onClick={() => setIsMenuOpen(false)}
// 						>
// 							About
// 						</Link> */}
// 						<Link
// 							href="/kisan-basket/shop"
// 							className="block py-1  transition hover:text-green-700"
// 							onClick={() => setIsMenuOpen(false)}
// 						>
// 							Shop
// 						</Link>

// 						<Link
// 							href="/kisan-basket/outlet"
// 							className="block py-1  transition hover:text-green-700"
// 							onClick={() => setIsMenuOpen(false)}
// 						>
// 							Outlet
// 						</Link>
// 						<Link
// 							href="/kisan-basket/contact"
// 							className="block py-1  transition hover:text-green-700"
// 							onClick={() => setIsMenuOpen(false)}
// 						>
// 							Contact
// 						</Link>
// 						<Link
// 							href="/kisan-basket/blog"
// 							className="block py-1  transition hover:text-green-700"
// 							onClick={() => setIsMenuOpen(false)}
// 						>
// 							Blog
// 						</Link>

// 						<div className="block py-2  transition hover:text-green-700" onClick={() => setIsMenuOpen(false)}>
// 							{" "}
// 							Cart
// 							{/* Cart ({products.length}) */}
// 						</div>
// 						<div className="relative">
// 							<div className="">
// 								<div
// 									onClick={() => router.push("/kisan-basket/login")}
// 									// onClick={() => setIsDropdownOpen(!isDropdownOpen)}
// 									className="text-destructive-foreground block  cursor-pointer rounded-md bg-[#646A36] px-2 py-2 text-sm text-white shadow-sm "
// 								>
// 									Sign In
// 								</div>
// 								{/* <RiArrowDropDownLine className="h-6 w-6" /> */}
// 							</div>
// 							{isDropdownOpen && (
// 								<div className="absolute  z-50 mt-1 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
// 									<div
// 										onClick={() => {
// 											setIsMenuOpen(false);
// 											setIsDropdownOpen(false);
// 										}}
// 										className="block rounded-t-md px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
// 									>
// 										Sign Up
// 									</div>
// 									<Link
// 										href="kisan-basket/login"
// 										className="text-destructive-foreground ml-2  block cursor-pointer rounded-md bg-[#646A36] px-2 py-2 text-sm text-white shadow-sm "
// 									>
// 										Sign In
// 										{/* <RiArrowDropDownLine className="h-6 w-6" /> */}
// 									</Link>
// 								</div>
// 							)}
// 						</div>
// 						{/* <Link href="/login">
// 							<Button
// 							  variant="destructive"
// 							  className="px-2 py-2 text-white rounded-lg"
// 							>
// 							  Sign In
// 							</Button>
// 						  </Link> */}
// 					</nav>
// 				)}
// 			</div>
// 		</header>
// 	);
// }
//! original code
// import { Logo } from "./Logo";
// import { Nav } from "./nav/Nav";

// export function Header({ channel }: { channel: string }) {
// 	return (
// 		<header className="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
// 			<div className="mx-auto max-w-7xl px-3 sm:px-8">
// 				<div className="flex h-16 justify-between gap-4 md:gap-8">
// 					<Logo />
// 					<Nav channel={channel} />
// 				</div>
// 			</div>
// 		</header>
// 	);
// }
