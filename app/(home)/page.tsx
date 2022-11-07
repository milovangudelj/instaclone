import { type PostType } from "../../types";
import { Post, TitleUpdater } from "../../components";
import { CANONICAL_URL } from "../../utils/variables";

const getPosts = async () => {
	const res = await fetch(`${CANONICAL_URL}/api/getPosts`);

	return res.json();
};

export default async function Home() {
	const { posts }: { posts: PostType[] } = await getPosts();

	return (
		<>
			<TitleUpdater title="Instaclone" />
			<div>
				{posts && posts.map((post) => <Post key={post.id} {...post} />)}
			</div>
		</>
	);
}
