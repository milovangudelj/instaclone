import { getHighlights } from "../../queries";
import { HighlightType } from "../../types";
import { asyncComponent } from "../../utils";
import { StoryCircle } from "../StoryCircle";

export const UserHighlights = asyncComponent(
	async ({ user }: { user: string }) => {
		const { highlights, error } = await getHighlights(user);

		if (!highlights) return <></>;

		return (
			<div className="mb-[44px]">
				<ul className="mx-auto flex max-w-[935px] space-x-[25px] px-[32px]">
					{highlights.map((highlight) => (
						<Highlight key={highlight.id} {...highlight} />
					))}
				</ul>
			</div>
		);
	}
);

const Highlight = ({ title, cover }: HighlightType) => {
	return (
		<li className="flex flex-col items-center px-[15px] py-[7px]">
			<StoryCircle
				src={cover}
				story={false}
				alt={`${title} highlights cover image`}
				size={77}
				className="mb-[15px] h-[77px] w-[77px]"
				on="offwhite"
				ringSize="md"
				withInnerShadow={false}
			/>
			<span className="inline-block max-w-[77px] overflow-hidden truncate text-[14px] font-semibold leading-[18px]">
				{title}
			</span>
		</li>
	);
};
