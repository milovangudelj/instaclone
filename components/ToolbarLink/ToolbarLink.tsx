"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type ToolbarLinkType = {
	id: string;
	label: string;
	href: string;
	icon: JSX.Element;
};

const ToolbarLink = ({ href, icon, label }: Omit<ToolbarLinkType, "id">) => {
	const pathname = usePathname();

	return (
		<li className="my-2 flex items-start rounded-full p-3">
			<div className="mr-4">{icon}</div>
			<Link
				href={href}
				className={`${pathname === href ? "font-semibold" : ""}`}
			>
				{label}
			</Link>
		</li>
	);
};

export default ToolbarLink;
