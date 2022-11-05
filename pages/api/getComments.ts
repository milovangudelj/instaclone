import type { NextApiRequest, NextApiResponse } from "next";
import { type CommentType } from "../../types";
import comments from "../../data/comments.json";

type Data = {
	comments: CommentType[];
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { postId } = req.query;

	const data = comments.filter((comment) => comment.onPost === postId);

	res.status(200).json({ comments: data });
};

export default handler;