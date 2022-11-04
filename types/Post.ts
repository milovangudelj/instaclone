import { CommentType } from "./Comment";

export type PostType = {
	id: string;
	username: string;
	profilePicture: string;
	story: boolean;
	subtitle: string;
	pictures: string[];
	likes: string[];
	description: string;
	when: string;
	comments: CommentType[];
};
