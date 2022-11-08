import { abbreviateNumber } from "../../utils/abbreviateNum";

export const UserStats = ({
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
