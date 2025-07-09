/** @type {import('next').NextConfig} */
const config = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "8000",
				pathname: "/media/**",
			},
			{
				protocol: "http",
				hostname: "192.168.1.37",
				port: "8000",
				pathname: "/media/**",
			},
		],
	},
	experimental: {
		typedRoutes: false,
	},
	async redirects() {
		return [
			{
				source: "/",
				destination: "/kisan-basket",
				permanent: false,
			},
		];
	},
	// used in the Dockerfile
	output:
		process.env.NEXT_OUTPUT === "standalone"
			? "standalone"
			: process.env.NEXT_OUTPUT === "export"
				? "export"
				: undefined,
};

export default config;
