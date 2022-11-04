import type { NextApiRequest, NextApiResponse } from "next";
import { type PostType } from "../../types";
import posts from "../../data/posts.json";

type Data = {
	post: PostType;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { postId } = req.query;

	const post = posts.find((post) => post.id === postId);

	if (post) res.status(200).json({ post });
};

export default handler;