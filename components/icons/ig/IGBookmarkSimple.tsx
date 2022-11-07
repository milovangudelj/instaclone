import { twMerge } from "tailwind-merge";

import { IconProps } from "../../../types";

export const IGBookmarkSimple = ({ size = 24, className }: IconProps) => {
	return (
		<svg
			aria-label="Save"
			className={twMerge("relative block text-dark-he", className)}
			fill="currentColor"
			height={size}
			role="img"
			viewBox="0 0 24 24"
			width={size}
			xmlns="http://www.w3.org/2000/svg"
		>
			<polygon
				fill="none"
				points="20 21 12 13.44 4 21 4 3 20 3 20 21"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			></polygon>
		</svg>
	);
};
