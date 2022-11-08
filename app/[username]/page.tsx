import {
	TitleUpdater,
	UserNotFound,
	UserHeader,
	UserHighlights,
} from "../../components";
import { getUser } from "../../queries/getUser";
import { UserType } from "../../types";
import { CANONICAL_URL } from "../../utils/variables";

const getUsernames = async () => {
	const { users }: { users: UserType[] } = await (
		await fetch(`${CANONICAL_URL}/api/getUsers`)
	).json();

	return users.map((user) => user.username);
};

export const generateStaticParams = async () => {
	const usernames = await getUsernames();

	return usernames.map((username) => ({
		username,
	}));
};

const UserPage = async ({ params }: { params: { [key: string]: string } }) => {
	const { username } = params;
	const { user, error } = await getUser({
		username: username,
	});

	if (!user) return <UserNotFound />;

	const { name } = user;

	const title = `${name} (@${username}) • Instagram photos and videos`;

	return (
		<>
			<TitleUpdater title={title} />
			<main className="px-[20px] pt-[30px]">
				<UserHeader username={username} />
				<UserHighlights user={username} />
				<div className="mt-8">
					{[...Array(50)].map((item, i) => (
						<div key={`lorem_0${i}`}>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing
								elit. Accusamus reprehenderit id quo iste ducimus
								numquam alias nemo beatae incidunt magni inventore, odio
								sint consequuntur nam ad maxime accusantium modi neque.
							</p>
						</div>
					))}
				</div>
			</main>
		</>
	);
};

export default UserPage;
