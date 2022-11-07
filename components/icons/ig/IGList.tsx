import { twMerge } from "tailwind-merge";

import { IconProps } from "../../../types";

export const IGList = ({ size = 24, className }: IconProps) => {
	return (
		<svg
			aria-label="Settings"
			className={twMerge("relative block text-dark-he", className)}
			fill="currentColor"
			height={size}
			role="img"
			viewBox="0 0 24 24"
			width={size}
			xmlns="http://www.w3.org/2000/svg"
		>
			<line
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				x1="3"
				x2="21"
				y1="4"
				y2="4"
			></line>
			<line
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				x1="3"
				x2="21"
				y1="12"
				y2="12"
			></line>
			<line
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				x1="3"
				x2="21"
				y1="20"
				y2="20"
			></line>
		</svg>
	);
};
