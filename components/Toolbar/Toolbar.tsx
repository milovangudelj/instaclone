import { Logo } from "../Logo";

export const Toolbar = () => {
	return (
		<div className="flex h-full w-[244px] flex-col border-r border-[rgb(219,_219,_219)] bg-white py-2 px-3">
			<div className="mb-[19px] px-3 pt-[25px] pb-[16px]">
				<div className="mt-[7px]">
					<Logo />
				</div>
			</div>
			<div className="flex-1">items</div>
			<div>more</div>
		</div>
	);
};
