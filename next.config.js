/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		fontLoaders: [
			{ loader: "@next/font/google", options: { subsets: ["latin"] } },
		],
	},
	images: {
		domains: ["scontent.cdninstagram.com", "instagram.fmxp5-1.fna.fbcdn.net"],
	},
};

module.exports = nextConfig;
