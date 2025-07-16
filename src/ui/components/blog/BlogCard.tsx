import Image from "next/image";
import Link from "next/link";
type BlogCardProps = {
	title: string;
	description: string;
	imageUrl: string;
	author: string;
	date: string;
	channel: string;
};

export default function BlogCard({ title, channel, description, imageUrl, author, date }: BlogCardProps) {
	return (
		<Link href={`/${channel}/blog/${title}`}>
			<div className="borde flex cursor-pointer flex-col overflow-hidden rounded-lg border-gray-200 shadow-md  md:w-[480px]">
				<div className="relative  min-h-[200px] md:w-[480px] lg:h-[304px]">
					<Image src={imageUrl} alt={title} fill className="object-cover" />
				</div>
				<div className="flex   flex-col justify-between p-4">
					<h2 className="text-xl font-medium lg:text-[28px]">{title}</h2>
					<p className="mt-2 text-sm text-[#362323] lg:text-[18px] lg:leading-[24px]">{description}</p>
					<div className="mt-1 flex flex-col justify-between md:mt-2 md:flex-row lg:mt-4">
						<div className=" mt-2  text-xs text-gray-500">
							By {author} • {date}
						</div>
						<div className="flex items-center  space-x-2 ">
							<p className="text-sm font-medium text-black">Read More</p>
							<div className="relative h-[40px] w-[40px] cursor-pointer">
								<Image
									src="/blogimages/eyeicon.svg"
									alt="kisan basket image"
									fill
									className="object-contain"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
