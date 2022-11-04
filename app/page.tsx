import { type PostType } from "../types";
import { Post } from "../components";
import { CANONICAL_URL } from "../utils/variables";

export default async function Home() {
	// const { posts }: { posts: PostType[] } = await(
	// 	await fetch(`${CANONICAL_URL}/api/getPosts`)
	// ).json();

	return (
		<div className="flex flex-col items-center pt-[26px]">
			{/* {posts &&
				posts.map(({ id, ...postData }) => <Post key={id} {...postData} />)} */}
		</div>
	);
}
