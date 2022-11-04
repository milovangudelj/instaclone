import type { NextApiRequest, NextApiResponse } from "next";
import { type ProfileType } from "../../types";

type Data = {
	profiles: ProfileType[];
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const profiles: ProfileType[] = [
		{
			id: "1",
			username: "figma",
			profilePicture: "#",
		},
		{
			id: "2",
			username: "milovangudelj",
			profilePicture:
				"https://scontent.cdninstagram.com/v/t51.2885-19/182772699_954506405304022_4126284193549414847_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=Xp9g39jXgxEAX9Lbbnr&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCRH0mvWZ4v9sL8vG3Rt-EWPVx0asd7SWolj5vNiT9Tiw&oe=63696416&_nc_sid=978cb9",
		},
	];

	res.status(200).json({ profiles });
};

export default handler;