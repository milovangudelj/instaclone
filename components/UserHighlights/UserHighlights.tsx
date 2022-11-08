import { HighlightType } from "../../types";
import { asyncComponent } from "../../utils";
import { CANONICAL_URL } from "../../utils/variables";
import { StoryCircle } from "../StoryCircle";

const getHighlights = async (
	user: string
): Promise<{ highlights: HighlightType[] }> => {
	const res = await fetch(`${CANONICAL_URL}/api/getHighlights?user=${user}`);

	return res.json();
};

export const UserHighlights = asyncComponent(
	async ({ user }: { user: string }) => {
		const { highlights } = await getHighlights(user);

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
