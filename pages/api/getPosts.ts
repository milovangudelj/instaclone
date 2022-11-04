import type { NextApiRequest, NextApiResponse } from "next";
import { type PostType } from "../../types";
import posts from "../../data/posts.json";

type Data = {
	posts: PostType[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	res.status(200).json({ posts });
};

export default handler;
