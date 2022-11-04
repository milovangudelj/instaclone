import Image from "next/image";

import { Story } from "../";

import { StoryType } from "../../types";
import asyncComponent from "../../utils/asyncComponent";
import { CANONICAL_URL } from "../../utils/variables";

export const Stories = asyncComponent(async () => {
	const { stories }: { stories: StoryType[] } = await (
		await fetch(`${CANONICAL_URL}/api/getStories`)
	).json();

	return (
		<div className="sticky top-0 min-h-screen w-[300px]">
			<div className="flex flex-col overflow-y-visible pt-8 pr-8">
				<span className="inline-block pb-[11px] text-base font-semibold text-[#383838]">
					Stories
				</span>
				<div>
					<ul className="flex flex-col space-y-[14px]">
						{stories.map(({ id, ...storyData }, i) => (
							<Story key={id} {...storyData} />
						))}
						{[...Array(20)].map((item, i) => (
							<Story
								key={i}
								username="dummyuser"
								name="Dummy"
								seen={false}
							/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
});
