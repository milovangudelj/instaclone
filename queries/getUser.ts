import { UserType } from "../types";
import { Either } from "../types/utility";
import { CANONICAL_URL } from "../utils/variables";

export const getUser = async ({
	username,
}: {
	username: string;
}): Promise<{
	user: UserType | null;
	error: string | null;
}> => {
	const res = await fetch(`${CANONICAL_URL}/api/getUser?username=${username}`);

	return res.json();
};
