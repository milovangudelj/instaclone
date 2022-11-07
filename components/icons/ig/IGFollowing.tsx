import { twMerge } from "tailwind-merge";

import { IconProps } from "../../../types";

export const IGFollowing = ({ size = 24, className }: IconProps) => {
	return (
		<svg
			aria-label="Following"
			className={twMerge("relative block text-dark-he", className)}
			fill="currentColor"
			height={size}
			width={(size / 3) * 4}
			role="img"
			viewBox="0 0 95.28 70.03"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M64.23 69.98c-8.66 0-17.32-.09-26 0-3.58.06-5.07-1.23-5.12-4.94-.16-11.7 8.31-20.83 20-21.06 7.32-.15 14.65-.14 22 0 11.75.22 20.24 9.28 20.1 21 0 3.63-1.38 5.08-5 5-8.62-.1-17.28 0-25.98 0Zm19-50.8A19 19 0 1 1 64.32 0a19.05 19.05 0 0 1 18.91 19.18ZM14.76 50.01a5 5 0 0 1-3.37-1.31L.81 39.09a2.5 2.5 0 0 1-.16-3.52l3.39-3.7a2.49 2.49 0 0 1 3.52-.16l7.07 6.38 15.73-15.51a2.48 2.48 0 0 1 3.52 0l3.53 3.58a2.49 2.49 0 0 1 0 3.52L18.23 48.57a5 5 0 0 1-3.47 1.44Z"></path>
		</svg>
	);
};
