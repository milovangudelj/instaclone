export const colorizeText = (input: string): (string | JSX.Element)[] => {
	if (!input) return [];
	
	return input.split(/([#|@][a-z0-9_]+)/g).map((segment, i) =>
		segment.startsWith("#") || segment.startsWith("@") ? (
			<span key={`cs_0${i}`} className="text-link">
				{segment}
			</span>
		) : (
			segment
		)
	);
};
