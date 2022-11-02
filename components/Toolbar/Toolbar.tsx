import { Logo } from "../Logo"

export const Toolbar = () => {
	return <div className="w-[244px] h-full flex flex-col py-2 px-3 bg-white border-r border-[rgb(219,_219,_219)]">
		<div className="px-3 pt-[25px] pb-[16px] mb-[19px]">
			<div className="mt-[7px]">
		<Logo/></div></div>
		<div className="flex-1">
			items
		</div>
		<div>
			more
		</div>
	</div>
}