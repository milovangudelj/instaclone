import type { NextApiRequest, NextApiResponse } from "next";
import { type UserType } from "../../types";

import users from "../../data/users.json";
import { Either } from "../../types/utility";
import { CANONICAL_URL } from "../../utils/variables";

const handler = (
	req: NextApiRequest,
	res: NextApiResponse<UserType | { error: string }>
) => {
	const { id, username } = req.query;

	const user = users.find(
		(entry) => entry.id === id || entry.username === username
	);

	res.status(200).json(user ?? { error: "User not found." });
};

export const getUser = async ({
	id,
	username,
}: Either<{ id: string }, { username: string }>) => {
	const apiUrl =
		CANONICAL_URL +
		"/api/getUser" +
		(id ? `?id=${id}` : `?username=${username}`);
	const res = await fetch(apiUrl);

	// For test loading state
	setTimeout(() => {
		console.log("User loaded!");
	}, 2000);
	return res.json();
};

export default handler;
