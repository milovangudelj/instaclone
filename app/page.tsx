import { type PostType } from "../types";
import { Post } from "../components";
import { CANONICAL_URL } from "../utils/variables";

export default async function Home() {
	// const { posts }: { posts: PostType[] } = await (
	// 	await fetch(`${CANONICAL_URL}/api/getPosts`)
	// ).json();
	const posts: PostType[] = [];

	return (
		<div className="">
			{posts &&
				posts.map(({ id, ...postData }) => (
					<Post key={id} data={postData} />
				))}
		</div>
	);
}
