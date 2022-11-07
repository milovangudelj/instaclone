import Image from "next/image";
import { twMerge } from "tailwind-merge";

const ringSizes = {
	sm: {
		unseen: "-inset-[4px] border-[2px] p-[2px]",
		seen: "",
	},
	md: {
		unseen: "-inset-[5px] border-[2px] p-[3px]",
		seen: "ring-[1px] ring-offset-[3px]",
	},
	lg: {
		unseen: "-inset-[8px] border-[3px] p-[5px]",
		seen: "ring-[2px] ring-offset-[5px]",
	},
};

export const ProfileImage = ({
	alt,
	className,
	size,
	src,
	story,
	ringSize = "md",
}: {
	src?: string;
	size: number;
	className?: string;
	alt: string;
	story: boolean;
	ringSize?: "sm" | "md" | "lg";
}) => {
	const ringClasses =
		(story
			? "ig-ring ig-ring-on-white ring-rose-500 "
			: "inset-0 ring-black/10 ") +
		ringSizes[ringSize][story ? "unseen" : "seen"];

	return (
		<div className={twMerge(`aspect-square w-[150px]`, className)}>
			<div className="relative h-full w-full">
				{src && (
					<Image
						src={src}
						width={size}
						height={size}
						quality={100}
						alt={alt}
						className="relative z-[1] rounded-full"
					/>
				)}
				<div className="absolute inset-0 z-[2] rounded-full border border-black/10"></div>
				<div className={`absolute z-[0] rounded-full ${ringClasses}`}></div>
			</div>
		</div>
	);
};
