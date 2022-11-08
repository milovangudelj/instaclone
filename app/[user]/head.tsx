import { getUser } from "../../utils/getUserQuery";
import { UserType } from "../../types";

const UserHead = async ({ params }: { params: { [key: string]: string } }) => {
	const { usernameSlug } = params;
	const { user, error } = await getUser({
		username: usernameSlug,
	});
	if (!user) return null;

	const { name, username } = user;

	const title = `${name} (@${username}) • Instagram photos and videos`;

	return (
		<>
			<title>{title}</title>
		</>
	);
};

export default UserHead;
