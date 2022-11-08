export const colorizeText = (input: string): (string | JSX.Element)[] => {
	return input.split(/([#|@][A-Za-z0-9_.]+)/g).map((segment, i) =>
		segment.startsWith("#") || segment.startsWith("@") ? (
			<span key={`cs_0${i}`} className="text-link">
				{segment}
			</span>
		) : (
			segment
		)
	);
};
