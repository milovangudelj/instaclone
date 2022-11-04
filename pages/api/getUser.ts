import type { NextApiRequest, NextApiResponse } from "next";
import { type UserType } from "../../types";

import users from "../../data/users.json";

const handler = (
	req: NextApiRequest,
	res: NextApiResponse<UserType | { error: string }>
) => {
	const { id } = req.query;

	const user = users.find((entry) => entry.id === id);

	res.status(200).json(user ?? { error: "User not found." });
};

export default handler;
