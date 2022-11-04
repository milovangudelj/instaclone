import "../styles/globals.css";

import { Toolbar, Stories } from "../components";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<title>Instaclone</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className="relative flex min-h-screen bg-[rgb(250,250,250)] text-black">
				<Toolbar />
				<div className="h-full flex-1">{children}</div>
				<Stories />
			</body>
		</html>
	);
}
