import type { NextApiRequest, NextApiResponse } from "next";
import { type PostType } from "../../types";

type Data = {
	post: PostType;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { postId } = req.query;

	const posts: PostType[] = [
		{
			id: "Y0UMBGTFkZkHChwO",
			profile: "1",
			where: "some place",
			when: "some time ago",
			description: "a description",
			likes: ["2"],
			comments: ["1"],
		},
	];

	const post = posts.find((post) => post.id === postId);

	if (post) res.status(200).json({ post });
};

export default handler;