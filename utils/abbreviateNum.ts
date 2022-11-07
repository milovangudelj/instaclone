export const abbreviateNumber = (value: number) => {
	if (!value) return "0";
	
	let newValue: string = value.toString();
	if (value >= 1000) {
		const suffixes = ["", "K", "M", "B", "T"];
		const suffixNum = Math.floor(("" + value).length / 3);
		let shortValue: string = "";
		for (var precision = 2; precision >= 1; precision--) {
			shortValue = parseFloat(
				(suffixNum != 0
					? value / Math.pow(1000, suffixNum)
					: value
				).toPrecision(precision)
			).toString();
			var dotLessShortValue = (shortValue + "").replace(
				/[^a-zA-Z 0-9]+/g,
				""
			);
			if (dotLessShortValue.length <= 2) {
				break;
			}
		}
		if (parseFloat(shortValue) % 1 != 0)
			shortValue = parseFloat(shortValue).toFixed(1);
		newValue = shortValue + suffixes[suffixNum];
	}
	return newValue;
};
