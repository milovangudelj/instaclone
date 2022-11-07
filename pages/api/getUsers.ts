import type { NextApiRequest, NextApiResponse } from "next";
import { type UserType } from "../../types";

import users from "../../data/users.json";

type Data = { users: UserType[] };

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
	res.status(200).json({ users });
};

export default handler;
