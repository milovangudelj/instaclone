import { twMerge } from "tailwind-merge";

import { IconProps } from "../../../types";

export const IGPaperPlaneTilt = ({ size = 24, className }: IconProps) => {
	return (
		<svg
			aria-label="Direct"
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
				strokeLinejoin="round"
				strokeWidth="2"
				x1="22"
				x2="9.218"
				y1="3"
				y2="10.083"
			></line>
			<polygon
				fill="none"
				points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="2"
			></polygon>
		</svg>
	);
};
