"use client";

import React from "react";
import { Play } from "lucide-react";

const shorts = [
	{
		id: "short1",
		title: "Wear it everyday",
		videoId: "ypeCMPvjB1w",
		duration: "0:36",
	},
	{
		id: "short2",
		title: "Elegant Dress",
		videoId: "ifxuWU7zClA",
		duration: "0:54",
	},
	{
		id: "short3",
		title: "Behind the Scenes",
		videoId: "6B7qMSmuFjE",
		duration: "1:02",
	},
	{
		id: "short4",
		title: "Glam Fashion",
		videoId: "Z_kpY5fIkC4",
		duration: "0:49",
	},
	{
		id: "short5",
		title: "Stylish Looks",
		videoId: "Z_kpY5fIkC4",
		duration: "0:50",
	},
];

export default function YouTubeShortsScroll() {
	return (
		<section className="bg-white py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold text-[#6B3E26] md:text-4xl">Farming Videos</h2>
					<p className="mx-auto max-w-2xl text-xl text-gray-600">Watch our latest YouTube Shorts</p>
				</div>

				<div className="overflow-x-auto">
					<div
						className="flex gap-6 px-1"
						style={{
							scrollSnapType: "x mandatory",
							WebkitOverflowScrolling: "touch",
						}}
					>
						{shorts.map((video) => (
							<div
								key={video.id}
								className="relative flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-black shadow-lg"
								style={{
									width: "calc(100%/3.2)",
									aspectRatio: "9 / 16",
									scrollSnapAlign: "start",
								}}
							>
								<iframe
									className="h-full w-full"
									src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${video.videoId}`}
									title={video.title}
									frameBorder="0"
									allow="autoplay; encrypted-media"
									allowFullScreen
								></iframe>

								{/* Overlay Text */}
								<div className="absolute bottom-4 left-4 z-10">
									<h3 className="font-medium text-white">{video.title}</h3>
									<p className="text-sm text-white/80">{video.duration}</p>
								</div>

								{/* Optional dim background */}
								<div className="absolute inset-0 bg-black/20" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
