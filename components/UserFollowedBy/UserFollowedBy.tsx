import { UserType } from "../../types";

export const UserFollowedBy = ({
	followers,
}: {
	followers: UserType["followers"];
}) => {
	return (
		<div className="mt-[12px] text-[12px] font-medium leading-[16px] text-dark-me">
			Followed by{" "}
			{followers.slice(0, 3).map((follower, i) => {
				if (i === followers.length - 1)
					return (
						<>
							{" "}
							and <span className="text-dark-he">{follower}</span>
						</>
					);
				if (i === 2 && followers.length > 3)
					return (
						<>
							<span className="text-dark-he">{follower}</span> +{" "}
							{followers.length - 3} more
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
	);
};
