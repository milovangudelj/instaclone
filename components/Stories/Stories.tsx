import { Story } from "../";

import { StoryType } from "../../types";
import asyncComponent from "../../utils/asyncComponent";
import { CANONICAL_URL } from "../../utils/variables";

export const Stories = asyncComponent(async () => {
	const { stories }: { stories: StoryType[] } = await (
		await fetch(`${CANONICAL_URL}/api/getStories`)
	).json();

	return (
		<div className="scrollbar-none sticky top-0 h-screen w-[300px] overflow-y-scroll overscroll-contain">
			<div className="flex flex-col pt-8 pr-8">
				<span className="inline-block pb-[11px] text-base font-semibold text-[#383838]">
					Stories
				</span>
				<div>
					<ul className="flex flex-col space-y-[14px] pb-[17px]">
						{stories.map(({ id, ...storyData }, i) => (
							<Story key={id} {...storyData} />
						))}
					</ul>
				</div>
			</div>
		</div>
	);
});
