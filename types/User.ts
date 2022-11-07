export type UserType = {
	id: string;
	username: string;
	name: string;
	verified: boolean;
	profilePicture: string;
	description: string;
	followerCount: number;
	followCount: number;
	followers: string[];
	highlights: { cover: string; title: string; stories: string[] }[];
	postCount: number;
	link: string;
	story: boolean;
	posts: string[];
	comments: string[];
};
