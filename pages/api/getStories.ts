import type { NextApiRequest, NextApiResponse } from "next";
import { type StoryType } from "../../types";

type Data = {
	stories: StoryType[];
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const stories: StoryType[] = [
		{
			id: "somerandomas",
			username: "artofplay",
			name: "Art of Play",
			image: "https://scontent.cdninstagram.com/v/t51.2885-19/297604568_725625098521008_7502754876986156766_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=BwpcZrjfWu8AX9WvVGv&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AfBazc7C7Q4KNrDzO-xdqUHIBOt2dANFgh7909hVwvsKnQ&oe=63681BCF&_nc_sid=022a36",
			seen: false,
		},
		{
			id: "samerandomas",
			username: "maya_hawke",
			name: "Maya Hawke",
			image: "https://scontent.cdninstagram.com/v/t51.2885-19/290356432_5175899549154916_2332590967010241781_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=-JfUOIhQ4fcAX-ikw33&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AfD40Wg-aMzTxr4NWrcCuO_e6bVMAAUATEkStITN2hIokQ&oe=63679675&_nc_sid=022a36",
			seen: false,
		},
		{
			id: "somedomranid",
			username: "mercolegin",
			name: "MercoleGin®",
			image: "https://scontent.cdninstagram.com/v/t51.2885-19/34079610_243180146436669_5481752929813659648_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=kqVMsf3gBxYAX9CMH5V&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AfCx7DX78KRVASSqUR79XwUfrQbQ3RRWD92ktSGTbbsBOg&oe=6367D661&_nc_sid=022a36",
			seen: false,
		},
		{
			id: "somerandomid",
			username: "celesalmo99",
			name: "Celeste",
			image: "https://scontent.cdninstagram.com/v/t51.2885-19/301645555_433238382109483_799997383571987454_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=RUpG30jEcYsAX-k6rx8&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AfDlFIxfkTD4lYyCo2aeD5IRyPIhiKcHX_KFt14QJStcug&oe=636952A3&_nc_sid=022a36",
			seen: true,
		},
	];

	res.status(200).json({ stories });
};

export default handler;
