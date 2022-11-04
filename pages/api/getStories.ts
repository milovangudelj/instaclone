import type { NextApiRequest, NextApiResponse } from "next";
import { type StoryType } from "../../types";

import users from "../../data/users.json";

type Data = {
	stories: StoryType[];
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const stories: StoryType[] = users
		.filter(
			({ username, posts }) =>
				username !== "milovangudelj" && posts.length === 0
		)
		.map(({ id, username, name, profilePicture, story }) => ({
			id: `st_${id}`,
			username,
			name,
			image: profilePicture,
			seen: !story,
		}));

	res.status(200).json({ stories });
};

export default handler;
