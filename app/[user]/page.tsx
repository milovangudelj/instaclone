import { TitleUpdater, UserNotFound, UserHeader } from "../../components";
import { getUser } from "../../utils/getUserQuery";
import { UserType } from "../../types";
import { CANONICAL_URL } from "../../utils/variables";

const getUsernames = async () => {
	const { users }: { users: UserType[] } = await (
		await fetch(`${CANONICAL_URL}/api/getUsers`)
	).json();

	return users.map((user) => user.username);
};

export const generateStaticParams = async () => {
	const users = await getUsernames();

	return users.map((user) => ({
		user,
	}));
};

const UserPage = async ({ params }: { params: { [key: string]: string } }) => {
	const { usernameSlug } = params;
	const { user, error } = await getUser({
		username: usernameSlug,
	});

	if (!user) return <UserNotFound />;

	const { id, name, username } = user;

	const title = `${name} (@${username}) • Instagram photos and videos`;

	return (
		<>
			<TitleUpdater title={title} />
			<main className="px-[20px] pt-[30px]">
				<UserHeader userId={id} />
				<div>
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
