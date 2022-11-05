import { type PostType } from "../types";
import { Post } from "../components";
import { CANONICAL_URL } from "../utils/variables";

const getPosts = async () => {
	const res = await fetch(`${CANONICAL_URL}/api/getPosts`);

	return res.json();
};

export default async function Home() {
	const { posts }: { posts: PostType[] } = await getPosts();

	return (
		<div className="flex flex-col items-center pt-[26px]">
			{posts && posts.map((post) => <Post key={post.id} {...post} />)}
		</div>
	);
}
