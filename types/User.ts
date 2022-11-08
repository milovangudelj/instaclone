export interface UserType {
	id?: string;
	username: string;
	name: string;
	verified: boolean;
	profilePicture: string;
	description: string;
	followerCount: number;
	followCount: number;
	followers: string[];
	highlights: string[];
	postCount: number;
	link: string;
	story: boolean;
	posts: string[];
	comments: string[];
}
