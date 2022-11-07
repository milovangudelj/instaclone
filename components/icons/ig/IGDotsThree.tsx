import { twMerge } from "tailwind-merge";

import { IconProps } from "../../../types";

export const IGDotsThree = ({ size = 24, className }: IconProps) => {
	return (
		<svg
			aria-label="More options"
			className={twMerge("relative block text-dark-he", className)}
			fill="currentColor"
			height={size}
			role="img"
			viewBox="0 0 24 24"
			width={size}
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="12" cy="12" r="1.5"></circle>
			<circle cx="6" cy="12" r="1.5"></circle>
			<circle cx="18" cy="12" r="1.5"></circle>
		</svg>
	);
};
