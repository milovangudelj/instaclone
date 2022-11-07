import Link from "next/link";

import { Logo } from "../Logo";
import {
	IGMagnifyingGlass,
	IGHouse,
	IGCompass,
	IGPaperPlaneTilt,
	IGHeartStraight,
	IGPlusSquare,
	IGList,
} from "../icons";
import { ToolbarLink, ToolbarLinkType } from "../ToolbarLink";
import Image from "next/image";

const links: ToolbarLinkType[] = [
	{
		id: "li_01",
		label: "Home",
		href: "/",
		icons: {
			active: <IGHouse weight="fill" size={24} />,
			base: <IGHouse size={24} />,
		},
	},
	{
		id: "li_02",
		label: "Search",
		href: "/search",
		icons: {
			active: <IGMagnifyingGlass weight="fill" size={24} />,
			base: <IGMagnifyingGlass size={24} />,
		},
	},
	{
		id: "li_03",
		label: "Explore",
		href: "/explore",
		icons: {
			active: <IGCompass weight="fill" size={24} />,
			base: <IGCompass size={24} />,
		},
	},
	{
		id: "li_04",
		label: "Messages",
		href: "/messages",
		icons: {
			active: <IGPaperPlaneTilt weight="fill" size={24} />,
			base: <IGPaperPlaneTilt size={24} />,
		},
	},
	{
		id: "li_05",
		label: "Notifications",
		href: "/notifications",
		icons: {
			active: <IGHeartStraight weight="fill" size={24} />,
			base: <IGHeartStraight size={24} />,
		},
	},
	{
		id: "li_06",
		label: "Create",
		href: "/create",
		icons: {
			active: <IGPlusSquare weight="fill" size={24} />,
			base: <IGPlusSquare size={24} />,
		},
	},
	{
		id: "li_07",
		label: "Profile",
		href: "/profile",
		icons: {
			active: (
				<span className="relative inline-block h-6 w-6 rounded-full bg-white">
					<Image
						src={
							"https://scontent.cdninstagram.com/v/t51.2885-19/182772699_954506405304022_4126284193549414847_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=Xp9g39jXgxEAX9Lbbnr&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCRH0mvWZ4v9sL8vG3Rt-EWPVx0asd7SWolj5vNiT9Tiw&oe=63696416&_nc_sid=978cb9"
						}
						width={24}
						height={24}
						alt="Your ptofile picture"
						className="absolute inset-0 rounded-full object-cover"
					/>
					<div className="absolute inset-0 rounded-full border border-black/10"></div>
				</span>
			),
			base: (
				<span className="relative inline-block h-6 w-6 rounded-full bg-white">
					<Image
						src={
							"https://scontent.cdninstagram.com/v/t51.2885-19/182772699_954506405304022_4126284193549414847_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=Xp9g39jXgxEAX9Lbbnr&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCRH0mvWZ4v9sL8vG3Rt-EWPVx0asd7SWolj5vNiT9Tiw&oe=63696416&_nc_sid=978cb9"
						}
						width={24}
						height={24}
						alt="Your ptofile picture"
						className="absolute inset-0 rounded-full object-cover"
					/>
					<div className="absolute inset-0 rounded-full border border-black/10"></div>
				</span>
			),
		},
	},
];

export const Toolbar = () => {
	return (
		<div className="sticky top-0 flex h-screen w-[245px] flex-col border-r border-stroke bg-white px-3 pt-2 pb-[20px]">
			<div className="mb-[19px] px-3 pt-[25px] pb-[15px]">
				<div className="mt-[7px] h-[26px]">
					<Logo />
				</div>
			</div>
			<ul className="flex flex-1 flex-col">
				{links.map(({ id, ...linkData }) => (
					<ToolbarLink key={id} {...linkData} />
				))}
			</ul>
			<div>
				<ToolbarLink
					href="/more"
					icons={{
						active: <IGList weight="fill" size={24} />,
						base: <IGList size={24} />,
					}}
					label="More"
				/>
			</div>
		</div>
	);
};
