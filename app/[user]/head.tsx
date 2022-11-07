import { getUser } from "../../pages/api/getUser";
import { UserType } from "../../types";

const UserHead = async ({ params }: { params: { [key: string]: string } }) => {
	const { user } = params;
	const { name, username }: UserType = await getUser({
		username: user,
	});

	const title = `${name} (@${username}) • Instagram photos and videos`;

	return (
		<>
			<title>{title}</title>
		</>
	);
};

export default UserHead;
