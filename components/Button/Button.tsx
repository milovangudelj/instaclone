import { ReactNode } from "react";

export const Button = ({ children }: { children: ReactNode }) => {
	return (
		<button className="block h-min cursor-pointer rounded border border-stroke py-[5px] px-[9px] text-center text-sm font-semibold leading-[18px] text-button-secondary">
			{children}
		</button>
	);
};
