export type PostType = {
	id: string;
	author: string;
	pictures: string[];
	likes: string[];
	comments: string[];
	commentCount: number;
	description: string;
	subtitle?: string;
	when: string;
};
