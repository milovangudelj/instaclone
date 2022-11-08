// A necessary wrapper if we want to use async components along with Typescript

export const asyncComponent = <T, R>(
	fn: (arg: T) => Promise<R>
): ((arg: T) => R) => {
	return fn as (arg: T) => R;
};

export default asyncComponent;
