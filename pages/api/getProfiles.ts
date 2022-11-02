import type { NextApiRequest, NextApiResponse } from 'next'
import { type ProfileType } from '../../types'

type Data = {
  profiles: ProfileType[]
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const profiles:ProfileType[] = [
		{
			id: "1",
			username: "figma",
			profilePicture: "#"
		},
		{
			id: "2",
			username: "milovangudelj",
			profilePicture: "#"
		}
	];

  res.status(200).json({ profiles })
}