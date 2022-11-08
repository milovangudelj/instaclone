import type { NextApiRequest, NextApiResponse } from "next";
import { type UserType } from "../../types";

import users from "../../data/users.json";

const handler = (
	req: NextApiRequest,
	res: NextApiResponse<{ user: UserType | null; error: string | null }>
) => {
	const { username } = req.query;

	const user = users.find((entry) => entry.username === username);

	res.status(200).json({
		user: user ? user : null,
		error: user ? null : "User not found.",
	});
};

export default handler;
