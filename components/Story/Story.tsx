import Link from "next/link";
import { StoryCircle } from "../StoryCircle";

export const Story = ({
	username,
	name,
	seen,
	image,
}: {
	username: string;
	name: string;
	image: string;
	seen: boolean;
}) => {
	return (
		<li className="flex items-center">
			<div className="mr-2.5 p-1.5">
				<StoryCircle
					src={image}
					alt={`${username}'s profile picture`}
					size={65}
					story={!seen}
					className="w-[65px]"
					ringSize="md"
					on="offwhite"
				/>
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
