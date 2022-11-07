import { TitleUpdater } from "../../components";

const HomeHead = async ({
	params,
}: {
	params: { [key: string]: string };
}): Promise<JSX.Element | string> => {
	const title = "Instaclone";

	return (
		<>
			<title>{title}</title>
		</>
	);
};

export default HomeHead;
