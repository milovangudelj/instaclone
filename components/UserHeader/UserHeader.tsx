import { getUser } from "../../utils/getUserQuery";
import { asyncComponent, colorizeText } from "../../utils";
import {
	StoryCircle,
	UserFollowedBy,
	UserHeaderLink,
	UserStats,
	UserNotFound,
	Button,
} from "../";
import { IGDotsThree, IGDownChevron, IGFollowing } from "../icons";

export const UserHeader = asyncComponent(
	async ({ username }: { username: string }) => {
		const { user } = await getUser({ username });

		if (!user) return <UserNotFound />;

		const {
			profilePicture,
			story,
			verified,
			followerCount,
			followCount,
			postCount,
			name,
			description,
			link,
			followers,
		} = user;

		return (
			<div className="mx-auto mb-[44px] flex max-w-[935px]">
				<div className="mr-[30px] flex flex-[1_0_0px] items-center justify-center">
					<StoryCircle
						src={profilePicture}
						alt={`${username}'s profile picture`}
						size={150}
						story={story ?? false}
						on="offwhite"
						ringSize="lg"
					/>
				</div>
				<div className="flex-[2_1_30px]">
					<div className="flex items-center">
						<div className="flex items-center">
							<h2 className="max-w-[21ch] overflow-hidden text-ellipsis text-[28px] font-light leading-[32px]">
								{username}
							</h2>
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
					<UserStats
						followers={followerCount}
						follows={followCount}
						posts={postCount}
					/>
					<div>
						<h1 className="font-semibold">{name}</h1>
						<p className="whitespace-pre-line">
							{colorizeText(description)}
						</p>
					</div>
					<UserHeaderLink link={link} />
					<UserFollowedBy followers={followers} />
				</div>
			</div>
		);
	}
);
