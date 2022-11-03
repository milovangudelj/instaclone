import type { NextApiRequest, NextApiResponse } from "next";
import { type CommentType } from "../../types";

type Data = {
	comments: CommentType[];
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const comments: CommentType[] = [
		{
			id: "1",
			author: "2",
			content: "So cool!",
		},
	];

	res.status(200).json({ comments });
};

export default handler;