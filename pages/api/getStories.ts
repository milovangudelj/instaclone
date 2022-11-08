import type { NextApiRequest, NextApiResponse } from "next";
import { type StoryType } from "../../types";

import users from "../../data/users.json";

type Data = {
	stories: {
		id: string;
		username: string;
		name: string;
		image: string;
		seen: boolean;
	}[];
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const stories = users
		.filter(
			({ username, posts }) =>
				username !== "milovangudelj" && posts.length === 0
		)
		.map(({ username, name, profilePicture, story }, i) => ({
			id: `st_${i}`,
			username,
			name,
			image: profilePicture,
			seen: !story,
		}));

	res.status(200).json({ stories });
};

export default handler;
