import { twMerge } from "tailwind-merge";

import { IconProps } from "../../../types";

export const IGMagnifyingGlass = ({ size = 24, className }: IconProps) => {
	return (
		<svg
			aria-label="Search"
			className={twMerge("relative block text-dark-he", className)}
			fill="currentColor"
			height={size}
			role="img"
			viewBox="0 0 24 24"
			width={size}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			></path>
			<line
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				x1="16.511"
				x2="22"
				y1="16.511"
				y2="22"
			></line>
		</svg>
	);
};
