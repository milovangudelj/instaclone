import { twMerge } from "tailwind-merge";

import { IconProps } from "../../../types";

export const IGArrowCircleLeft = ({ size = 24, className }: IconProps) => {
	return (
		<svg
			aria-label="Go Back"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			role="img"
			className="relative block text-white/70 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289L8.79289 10.7929C8.40237 11.1834 8.40237 11.8166 8.79289 12.2071L13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929L10.9142 11.5L14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289Z"
				fill="currentColor"
			/>
		</svg>
	);
};
