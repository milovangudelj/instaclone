import type { NextApiRequest, NextApiResponse } from "next";

import { type HighlightType } from "../../types";
import highlights from "../../data/highlights.json";

type Data = {
	highlights: HighlightType[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { user } = req.query;

	const result = highlights.filter((highlight) => highlight.author === user);

	res.status(200).json({ highlights: result });
};

export default handler;
