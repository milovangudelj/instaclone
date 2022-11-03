import type { NextApiRequest, NextApiResponse } from "next";
import { type PostType } from "../../types";

type Data = {
	posts: PostType[];
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
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

	res.status(200).json({ posts });
};

export default handler;