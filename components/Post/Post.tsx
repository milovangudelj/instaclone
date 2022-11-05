import Image from "next/image";
import Link from "next/link";
import {
	ArrowCircleRight,
	BookmarkSimple,
	ChatCircle,
	DotsThree,
	HeartStraight,
	PaperPlaneTilt,
	Smiley,
} from "../../components/icons";

import { CommentType, UserType, type PostType } from "../../types";
import asyncComponent from "../../utils/asyncComponent";
import { CANONICAL_URL } from "../../utils/variables";

const getUser = async (id: string) => {
	const res = await fetch(`${CANONICAL_URL}/api/getUser?id=${id}`);

	return res.json();
};

const getComments = async (postId: string) => {
	const res = await fetch(`${CANONICAL_URL}/api/getComments?postId=${postId}`);

	return res.json();
};

export const Post = asyncComponent(
	async ({
		id: postId,
		author,
		commentCount,
		commentIds,
		description,
		likes,
		pictures,
		when,
		subtitle,
	}: PostType) => {
		const { profilePicture, username, story }: UserType = await getUser(
			author
		);
		const { comments }: { comments: CommentType[] } = await getComments(
			postId
		);

		return (
			<article className="mb-3 w-[472px] rounded-lg border border-[#dbdbdb] bg-white">
				<div className="flex items-center border-b border-[#dbdbdb]">
					<header className="flex flex-1 items-center py-2 pr-1 pl-3">
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
						<div className="min-h-10 ml-2.5 flex flex-col text-dark-he">
							<span className="relative top-px p-0.5 text-sm font-semibold leading-[18px]">
								{username}
							</span>
							<span className="relative bottom-px inline-block p-0.5 text-xs">
								{subtitle}
							</span>
						</div>
					</header>
					<div className="mr-1 cursor-pointer p-2">
						<DotsThree size={24} />
					</div>
				</div>
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
				<div className="border-b border-[#dbdbdb] p-1">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-4 p-2 pb-3.5">
							<span>
								<HeartStraight size={24} />
							</span>
							<span>
								<ChatCircle size={24} />
							</span>
							<span>
								<PaperPlaneTilt size={24} />
							</span>
						</div>
						<div className="flex items-center p-2">
							<span className="">
								<BookmarkSimple size={24} />
							</span>
						</div>
					</div>
					<PostLikes likes={likes} />
					<PostDescription description={description} username={username} />
					<PostComments commentCount={commentCount} comments={comments} />
					<div className="mb-1 px-2 py-px">
						<Link href="#" className="">
							<span className="text-[10px] uppercase leading-[12px] tracking-[0.2px] text-dark-me">
								{when}
							</span>
						</Link>
					</div>
				</div>
				<div className="px-3 py-[11px]">
					<div className="flex items-center space-x-3 text-sm leading-[18px]">
						<span className="inline-block">
							<Smiley size={24} />
						</span>
						<span className="inline-block flex-1 text-dark-me">
							Add a comment...
						</span>
						<span className="inline-block p-1 font-semibold text-primary/30">
							Post
						</span>
					</div>
				</div>
			</article>
		);
	}
);

const PostLikes = ({ likes }: { likes: string[] }) => {
	return (
		<div className="mb-2 flex items-center px-2">
			<ul className="flex flex-row-reverse items-center justify-end">
				{likes.slice(0, 3).map((like, i) => (
					<li
						key={`lk_0${i}`}
						className="relative -ml-[9px] h-6 w-6 rounded-full border-2 border-white bg-gray-500 last-of-type:ml-0"
					>
						<div className="absolute inset-0 rounded-full border border-black/10"></div>
					</li>
				))}
			</ul>
			<div className="ml-1 text-sm leading-[18px] text-dark-he">
				Liked by <span className="font-semibold">{likes[0]}</span>
				{likes.length >= 2 && (
					<>
						{" "}
						and <span className="font-semibold">others</span>
					</>
				)}
			</div>
		</div>
	);
};

const PostDescription = ({
	description,
	username,
}: {
	description: string;
	username: string;
}) => {
	const desc = description
		.slice(0, 119)
		.concat(description.length > 120 ? "..." : "");
	let truncated = desc.length < description.length;

	return (
		<div className="mb-2 px-2 text-sm leading-[18px] text-dark-he">
			<p>
				<span className="font-semibold">{username}</span>{" "}
				{desc.split(/(#[a-z0-9_]+)/g).map((segment, i) =>
					segment.startsWith("#") ? (
						<span key={`at_0${i}`} className="text-link">
							{segment}
						</span>
					) : (
						segment
					)
				)}
				{truncated && <span className="text-dark-me"> more</span>}
			</p>
		</div>
	);
};

const PostComments = ({
	commentCount,
	comments,
}: {
	commentCount: number;
	comments: CommentType[];
}) => {
	return (
		<div className="px-2 text-sm leading-[18px]">
			<div className="mb-2">
				<span className="text-dark-me">
					View all {commentCount.toLocaleString()} comments
				</span>
			</div>
			<div className="text-dark-he">
				<ul className="mb-1 space-y-1">
					{comments.length >= 0 &&
						comments.map(({ id, author, content }) => (
							<li key={id} className="flex items-center">
								<p className="flex-1 text-sm leading-[18px]">
									<span className="font-semibold">{author}</span>{" "}
									{content.split(/(@[a-z0-9_]+)/g).map((segment, i) =>
										segment.startsWith("@") ? (
											<span key={`at_0${i}`} className="text-link">
												{segment}
											</span>
										) : (
											segment
										)
									)}
								</p>
								<span>
									<HeartStraight size={12} />
								</span>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};
