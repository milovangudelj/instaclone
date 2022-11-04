import Image from "next/image";
import { ArrowCircleRight, HeartStraight } from "../../components/icons";

import { UserType, type PostType } from "../../types";
import asyncComponent from "../../utils/asyncComponent";
import { CANONICAL_URL } from "../../utils/variables";

export const Post = asyncComponent(
	async ({
		author,
		commentCount,
		comments,
		description,
		likes,
		pictures,
		when,
		subtitle,
	}: Omit<PostType, "id">) => {
		const { profilePicture, username, story }: UserType = await(
			await fetch(`${CANONICAL_URL}/api/getUser?id=${author}`)
		).json();

		return (
			<article className="mb-3 w-[472px] rounded-lg border border-[#dbdbdb] bg-white">
				<header className="flex items-center border-b border-[#dbdbdb] py-2 pl-3 pr-1">
					<div
						className={`relative my-1 h-8 w-8 rounded-full ${
							story ? "ring-2 ring-rose-500" : ""
						} ring-offset-2`}
					>
						<Image
							src={profilePicture}
							width={32}
							height={32}
							quality={100}
							alt={`${username}'s profile picture`}
							className="absolute inset-0 rounded-full object-cover"
						/>
						<div className="absolute inset-0 rounded-full border border-black/10"></div>
					</div>
					<div className="min-h-10 ml-2.5 flex flex-col text-[#262626]">
						<span className="relative top-px p-0.5 text-sm font-semibold leading-[18px]">
							{username}
						</span>
						<span className="relative bottom-px inline-block p-0.5 text-xs">
							{subtitle}
						</span>
					</div>
				</header>
				<div className="relative aspect-[4/5] w-full bg-gray-300">
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
				<div className="p-1">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<span className="p-2">
								<HeartStraight size={24} />
							</span>
							<span className="p-2">
								<HeartStraight size={24} />
							</span>
							<span className="p-2">
								<HeartStraight size={24} />
							</span>
						</div>
						<div>
							<span className="p-2">
								<HeartStraight size={24} />
							</span>
						</div>
					</div>
				</div>
			</article>
		);
	}
);
