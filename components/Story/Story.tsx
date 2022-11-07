import Image from "next/image";
import Link from "next/link";
import { StoryType } from "../../types";
import { ProfileImage } from "../ProfileImage";

export const Story = ({
	username,
	name,
	seen,
	image,
}: Omit<StoryType, "id">) => {
	return (
		<li className="flex items-center">
			<div className="mr-2.5 p-1.5">
				<ProfileImage
					src={image}
					alt={`${username}'s profile picture`}
					size={65}
					story={!seen}
					className="ig-ring-on-offwhite w-[65px]"
					ringSize="md"
				/>
			</div>
			<div className="flex flex-col pt-1 text-sm leading-[18px]">
				<Link
					href={`/user/${username}`}
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
