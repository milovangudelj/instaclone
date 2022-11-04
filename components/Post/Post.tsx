import Image from "next/image";
import { ArrowCircleRight } from "../../components/icons";

import { type PostType } from "../../types";

export const Post = ({
	username,
	profilePicture,
	story,
	subtitle,
	pictures,
	description,
}: Omit<PostType, "id">) => {
	return (
		<article className="mb-3 w-[472px] rounded-lg border border-[#dbdbdb] bg-white">
			<header className="flex items-center border-b border-[#dbdbdb] py-2 pl-3 pr-1">
				<div
					className={`relative h-8 w-8 rounded-full ${
						story ? "ring-2 ring-rose-500" : ""
					} ring-offset-2`}
				>
					<Image
						src={profilePicture}
						width={32}
						height={32}
						alt={`${username}'s profile picture`}
						className="absolute inset-0 rounded-full object-cover"
					/>
					<div className="absolute inset-0 rounded-full border border-black/10"></div>
				</div>
				<div className="ml-2.5 flex flex-col text-[#262626]">
					<span className="relative top-px p-0.5 text-sm font-semibold leading-[18px]">
						{username}
					</span>
					<span className="relative bottom-px inline-block p-0.5 text-xs">
						{subtitle}
					</span>
				</div>
			</header>
			<div className="relative aspect-[4/5] w-full bg-white">
				<ul className="scrollbar-none flex h-full w-full snap-x snap-mandatory overflow-x-scroll">
					{pictures.map((picture, i) => (
						<li
							key={`pic_0${i}`}
							className="relative aspect-[4/5] w-[470px] snap-center"
						>
							<Image
								src={picture}
								width={470}
								height={(470 / 4) * 5}
								alt={``}
								className="absolute inset-0 object-cover"
								quality={100}
							/>
						</li>
					))}
				</ul>
				<span className="absolute top-[calc(50%-16px)] right-0 mr-2">
					<ArrowCircleRight
						size={30}
						weight="fill"
						className="text-white/80"
					/>
				</span>
			</div>
		</article>
	);
};
