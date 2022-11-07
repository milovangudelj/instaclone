import Image from "next/image";
import Link from "next/link";
import { StoryType } from "../../types";

export const Story = ({
	username,
	name,
	seen,
	image,
}: Omit<StoryType, "id">) => {
	return (
		<li className="flex items-center">
			<div className="mr-2.5 p-1.5">
				<div
					className={`relative h-[65px] w-[65px] rounded-full bg-white ${
						seen ? "ring-1 ring-black/10" : "ring-2 ring-rose-500"
					} ring-offset-[3px]`}
				>
					{image && (
						<Image
							src={image}
							width={65}
							height={65}
							alt={`${username}'s profile picture`}
							className="absolute inset-0 rounded-full object-cover"
						/>
					)}
					<div className="absolute inset-0 rounded-full border border-black/10"></div>
				</div>
			</div>
			<div className="flex flex-col pt-1 text-sm leading-[18px]">
				<Link
					href={`/${username}`}
					className="max-w-[22ch] overflow-hidden text-ellipsis font-semibold text-dark-he"
				>
					{username}
				</Link>
				<span className="max-w-[22ch] overflow-hidden text-ellipsis text-dark-me">
					{name}
				</span>
			</div>
		</li>
	);
};
