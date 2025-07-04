import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense, type ReactNode } from "react";
import { type Metadata } from "next";
import { DraftModeNotification } from "@/ui/components/DraftModeNotification";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Saleor Storefront example",
	description: "Starter pack for building performant e-commerce experiences with Saleor.",
	metadataBase: process.env.NEXT_PUBLIC_STOREFRONT_URL
		? new URL(process.env.NEXT_PUBLIC_STOREFRONT_URL)
		: undefined,
};

export default function RootLayout(props: { children: ReactNode }) {
	const { children } = props;

	return (
		<html lang="en" className="min-h-dvh">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Konkhmer+Sleokchher&display=swap"
					rel="stylesheet"
				/>

				<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
				<link
					href="https://fonts.googleapis.com/css2?family=Amatica+SC:wght@700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className={`${inter.className} min-h-dvh`}>
				{children}
				<Suspense>
					<DraftModeNotification />
				</Suspense>
			</body>
		</html>
	);
}
