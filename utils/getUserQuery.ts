import { UserType } from "../types";
import { Either } from "../types/utility";
import { CANONICAL_URL } from "./variables";

export const getUser = async ({
	id,
	username,
}: Either<{ id: string }, { username: string }>): Promise<{
	user: UserType | null;
	error: string | null;
}> => {
	const apiUrl =
		CANONICAL_URL +
		"/api/getUser" +
		(id ? `?id=${id}` : `?username=${username}`);
	const res = await fetch(apiUrl);

	return res.json();
};
