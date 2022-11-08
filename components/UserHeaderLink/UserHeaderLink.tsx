import Link from "next/link";

export const UserHeaderLink = ({ link }: { link: string }) => {
	return (
		<div>
			<Link
				href={link}
				target="_blank"
				rel="noreferrer noopener"
				className="font-semibold text-link hover:underline"
			>
				{link.replace(/(https?:\/\/)/g, "")}
			</Link>
		</div>
	);
};
