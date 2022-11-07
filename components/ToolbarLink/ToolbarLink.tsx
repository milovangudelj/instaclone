"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type ToolbarLinkType = {
	id: string;
	label: string;
	href: string;
	icons: { active: JSX.Element; base: JSX.Element };
};

const ToolbarLink = ({ href, icons, label }: Omit<ToolbarLinkType, "id">) => {
	const pathname = usePathname();

	return (
		<li className="my-2 flex items-start rounded-full p-3">
			<div className="mr-4">
				{pathname === href ? icons.active : icons.base}
			</div>
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
