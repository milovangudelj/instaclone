import type { NextApiRequest, NextApiResponse } from "next";

import { type HighlightType } from "../../types";
import highlights from "../../data/highlights.json";

type Data = {
	highlights: HighlightType[] | null;
	error: string | null;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { user } = req.query;

	const result = highlights.filter((highlight) => highlight.author === user);

	res.status(200).json({
		highlights: result.length > 0 ? result : null,
		error: result.length > 0 ? null : "Highlights not found.",
	});
};

export default handler;
