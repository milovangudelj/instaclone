import { twMerge } from "tailwind-merge";

import { IconProps } from "../../../types";

export const IGChatCircle = ({ size = 24, className }: IconProps) => {
	return (
		<svg
			aria-label="Comment"
			className={twMerge("relative block text-dark-he", className)}
			fill="currentColor"
			height={size}
			role="img"
			viewBox="0 0 24 24"
			width={size}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="2"
			></path>
		</svg>
	);
};
