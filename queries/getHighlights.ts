import { HighlightType } from "../types";
import { CANONICAL_URL } from "../utils/variables";

export const getHighlights = async (
	user: string
): Promise<{ highlights: HighlightType[] }> => {
	const res = await fetch(`${CANONICAL_URL}/api/getHighlights?user=${user}`);

	return res.json();
};
