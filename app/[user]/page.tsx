import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ProfileImage, TitleUpdater } from "../../components";
import {
	IGDotsThree,
	IGDownChevron,
	IGFollowing,
	IGHeartStraight,
} from "../../components/icons";
import { getUser } from "../../pages/api/getUser";
import { UserType } from "../../types";
import { abbreviateNumber } from "../../utils/abbreviateNum";
import { colorizeText } from "../../utils/colorizeText";
import { CANONICAL_URL } from "../../utils/variables";

const getUsernames = async () => {
	const { users }: { users: UserType[] } = await (
		await fetch(`${CANONICAL_URL}/api/getUsers`)
	).json();

	return users.map((user) => user.username);
};

export const generateStaticParams = async () => {
	const users = await getUsernames();

	return users.map((user) => ({
		user,
	}));
};

type UserPageProps = { params: { [key: string]: string } };

const UserPage = async ({ params }: UserPageProps) => {
	const { user } = params;
	const {
		profilePicture,
		username,
		name,
		story,
		verified,
		followerCount,
		followers,
		followCount,
		postCount,
		description,
		link,
	}: UserType = await getUser({
		username: user,
	});

	const title = `${name} (@${username}) • Instagram photos and videos`;

	return (
		<>
			<TitleUpdater title={title} />
			<main className="px-[20px] pt-[30px]">
				<div className="mx-auto flex max-w-[935px]">
					<div className="mr-[30px] flex flex-[1_0_0px] items-center justify-center">
						<ProfileImage
							src={profilePicture}
							alt={`${username}'s profile picture`}
							size={150}
							story={story}
							className="ig-ring-on-offwhite"
							ringSize="lg"
						/>
					</div>
					<div className="flex-[2_1_30px]">
						<div className="flex items-center">
							<div className="flex items-center">
								<span className="max-w-[21ch] overflow-hidden text-ellipsis text-[28px] font-light leading-[32px]">
									{username}
								</span>
								{verified && (
									<span
										className="ml-2 block h-[18px] w-[18px] overflow-hidden whitespace-nowrap bg-[url(https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png)] bg-no-repeat indent-[110%] align-baseline [background-position:0_-369px]"
										title="Verified"
									>
										Verified
									</span>
								)}
							</div>
							<div className="ml-[28px] flex h-min items-center space-x-2">
								<Button>Message</Button>
								<Button>
									<div className="flex h-[18px] items-center px-4">
										<IGFollowing size={15} />
									</div>
								</Button>
								<Button>
									<div className="flex h-[18px] items-center px-px">
										<IGDownChevron size={12} className="rotate-180" />
									</div>
								</Button>
							</div>
							<div className="ml-[5px] flex">
								<div className="p-2">
									<IGDotsThree size={32} />
								</div>
							</div>
						</div>
						<BaseStats
							followers={followerCount}
							follows={followCount}
							posts={postCount}
						/>
						<div>
							<div className="font-semibold">{name}</div>
							<p>{colorizeText(description)}</p>
						</div>
						<div>
							<Link
								href={link}
								className="font-semibold text-link hover:underline"
							>
								{link ? link.replace(/(https?:\/\/)/g, "") : link}
							</Link>
						</div>
						<div className="mt-[12px] text-[12px] font-medium leading-[16px] text-dark-me">
							Followed by{" "}
							{followers.slice(0, 3).map((follower, i) => {
								if (i === followers.length - 1)
									return (
										<>
											{" "}
											and{" "}
											<span className="text-dark-he">
												{follower}
											</span>
										</>
									);
								if (i === 2 && followers.length > 3)
									return (
										<>
											<span className="text-dark-he">
												{follower}
											</span>{" "}
											+ {followers.length - 3} more
										</>
									);
								return (
									<>
										{i !== 0 && ", "}
										<span className="text-dark-he">{follower}</span>
									</>
								);
							})}
						</div>
					</div>
				</div>
				<div>
					{[...Array(50)].map((item, i) => (
						<div key={`lorem_0${i}`}>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing
								elit. Accusamus reprehenderit id quo iste ducimus
								numquam alias nemo beatae incidunt magni inventore, odio
								sint consequuntur nam ad maxime accusantium modi neque.
							</p>
						</div>
					))}
				</div>
			</main>
		</>
	);
};

export default UserPage;

const Button = ({ children }: { children: ReactNode }) => {
	return (
		<span className="block h-min cursor-pointer rounded border border-stroke py-[5px] px-[9px] text-center text-sm font-semibold leading-[18px] text-button-secondary">
			{children}
		</span>
	);
};

const BaseStats = ({
	followers,
	follows,
	posts,
}: {
	followers: number;
	follows: number;
	posts: number;
}) => {
	return (
		<div className="my-5 flex space-x-10">
			<div>
				<span className="font-semibold">{abbreviateNumber(posts)}</span>{" "}
				posts
			</div>
			<div>
				<span className="font-semibold">{abbreviateNumber(followers)}</span>{" "}
				followers
			</div>
			<div>
				<span className="font-semibold">{abbreviateNumber(follows)}</span>{" "}
				following
			</div>
		</div>
	);
};
