import { Inter } from '@next/font/google';
import "../styles/globals.css";

import { Toolbar, Stories } from '../components';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter();

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<title>Instaclone</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className="text-black bg-[rgb(250,250,250)] h-screen flex">
				<Toolbar/>
				<div className='flex-1 h-full'>
				{children}
				</div>
				<Stories/>
				</body>
		</html>
	);
}
