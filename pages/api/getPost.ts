import type { NextApiRequest, NextApiResponse } from "next";
import { type PostType } from "../../types";

type Data = {
	post: PostType;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { postId } = req.query;

	const posts: PostType[] = [
		{
			id: "Y0UMBGTFkZkHChwO",
			username: "lando.jpg",
			profilePicture:
				"https://instagram.fmxp5-1.fna.fbcdn.net/v/t51.2885-19/309208260_3339276453019771_420219775776057144_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fmxp5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=DbsBLOdvGCEAX85cFMV&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AfCYxKZs--p2SkrqE7UqLC7HtS40ERW4JlowWnehjJ_n8g&oe=6367C8B2&_nc_sid=a9513d",
			story: false,
			subtitle: "Mexico City, Mexico",
			pictures: [
				"https://instagram.fmxp5-1.fna.fbcdn.net/v/t51.2885-15/313293299_152953663759988_3556335677256184687_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.fmxp5-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=9d7CXiVJfskAX9YXNWk&tn=tBtwCV-SkrKgpuDo&edm=AJ9x6zYBAAAA&ccb=7-5&ig_cache_key=Mjk2MTU0OTY2MTU2MzY4MDQyMQ%3D%3D.2-ccb7-5&oh=00_AfDjrNbho49f5suQdxWUc1rtBPlj2QfKVIQvaxwdQecBfA&oe=6367E1AB&_nc_sid=cff2a4",
				"https://instagram.fmxp5-1.fna.fbcdn.net/v/t51.2885-15/313835771_5914187551927114_1721295444413140180_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.fmxp5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=p0uMSAKvkjsAX8ELyEs&edm=AJ9x6zYBAAAA&ccb=7-5&ig_cache_key=Mjk2MTU0OTY2MTU2MzY5NzA2MA%3D%3D.2-ccb7-5&oh=00_AfDtgedUgvsocda_M4PabPJ8O7kLM-tFfjwm07SACvvHQw&oe=636800F3&_nc_sid=cff2a4",
			],
			likes: ["milovangudelj", "danielricciardo", "lewishamilton"],
			description: "Day 34. I <3 chicken quesadillas",
			when: "2 days ago",
			comments: [
				{
					id: "comm_01",
					author: "milovangudelj",
					content: "this is giving me corn kid vibes",
				},
			],
		},
		{
			id: "Y0UMBGTFkZkpsdwO",
			username: "redbullracing",
			profilePicture:
				"https://instagram.fmxp5-1.fna.fbcdn.net/v/t51.2885-19/312723605_1585391481915765_1448137240122953578_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fmxp5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=nokRp5SNr7AAX-ywYD7&tn=_H0talhtxyBb5mPQ&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AfCzYveg-Ila8j7ermpK_pIam2Oe24sgVLmiNS4PEIvdZw&oe=6368761B&_nc_sid=a9513d",
			story: true,
			subtitle: "Autódromo Hnos. Rodríguez",
			pictures: [
				"https://instagram.fmxp5-1.fna.fbcdn.net/v/t51.2885-15/314011795_1801073940274676_7995018485939553753_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.fmxp5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=VLttpLmyLrMAX9m_icO&edm=AJ9x6zYBAAAA&ccb=7-5&ig_cache_key=Mjk2MzM1NjMwMjU0NjQ4NzY1Nw%3D%3D.2-ccb7-5&oh=00_AfCSusNNZ3C4NYiQe0D2dT_DvyKf8FOb3_Xm5pM_5KTFFQ&oe=636866C0&_nc_sid=cff2a4",
				"https://instagram.fmxp5-1.fna.fbcdn.net/v/t51.2885-15/314083969_1103559977193058_3458179306277593231_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.fmxp5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=ExGPbrSmI9sAX8Ob4st&tn=_H0talhtxyBb5mPQ&edm=APU89FABAAAA&ccb=7-5&oh=00_AfB4re-y1bI2yzkffakuH0V_D-qd8vwN5SfyFnTvNPm8gw&oe=6368C4AA&_nc_sid=86f79a",
				"https://instagram.fmxp5-1.fna.fbcdn.net/v/t51.2885-15/313873532_1164914804409826_6341427394661089481_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.fmxp5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=xPhX1DE9z6IAX_d78SV&edm=APU89FABAAAA&ccb=7-5&oh=00_AfAaVMRAZwb8_c3uvqPwdVIw9opVICH3R2hLspglY67N9g&oe=636821EB&_nc_sid=86f79a",
				"https://instagram.fmxp5-1.fna.fbcdn.net/v/t51.2885-15/313873911_1666247297103415_3375604020889722576_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.fmxp5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=c2HEzNsFLZ0AX-0BKnF&edm=APU89FABAAAA&ccb=7-5&oh=00_AfDNpVecSHOuffqJpd_18JEcKz6cZzjHjtFjGCauDnf7Aw&oe=6369CDB2&_nc_sid=86f79a",
			],
			likes: ["milovangudelj", "danielricciardo", "lewishamilton"],
			description:
				"Through The Lens 📸 Returning from Mexico with a packed Camera Roll 🇲🇽",
			when: "5 hours ago",
			comments: [
				{
					id: "comm_01",
					author: "milovangudelj",
					content: "beautiful pictures!",
				},
			],
		},
	];

	const post = posts.find((post) => post.id === postId);

	if (post) res.status(200).json({ post });
};

export default handler;