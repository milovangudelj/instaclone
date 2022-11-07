import "../../styles/globals.css";

import { Toolbar, Stories } from "../../components";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex">
			<div className="flex flex-1 flex-col items-center pt-[26px]">
				{children}
			</div>
			<Stories />
		</div>
	);
}
