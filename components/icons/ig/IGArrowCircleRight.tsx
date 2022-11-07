import { twMerge } from "tailwind-merge";

import { IconProps } from "../../../types";

export const IGArrowCircleRight = ({ size = 24, className }: IconProps) => {
	return (
		<svg
			aria-label="Next"
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
				d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L15.2071 10.7929C15.5976 11.1834 15.5976 11.8166 15.2071 12.2071L10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L13.0858 11.5L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289Z"
				fill="currentColor"
			/>
		</svg>
	);
};
