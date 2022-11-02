import Image from "next/image";

import { type PostType } from "../types";
import { Post } from "../components";

export default async function Home() {
	const {posts}:{posts:PostType[]} = await (await fetch('http://localhost:3000/api/getPosts')).json();

	return (
		<div className="">
			{posts && posts.map(({id,...postData}) => <Post key={id} data={postData}/>)}
		</div>
	);
}
