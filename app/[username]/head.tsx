import { getUser } from "../../utils/getUserQuery";
import { UserType } from "../../types";

const UserHead = async ({ params }: { params: { [key: string]: string } }) => {
	const { username } = params;
	const { user, error } = await getUser({
		username: username,
	});
	if (!user) return null;

	const { name } = user;

	const title = `${name} (@${username}) • Instagram photos and videos`;

	return (
		<>
			<title>{title}</title>
		</>
	);
};

export default UserHead;
