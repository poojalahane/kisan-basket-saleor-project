import Image from "next/image";
import { FC } from "react";

interface Testimonial {
	name: string;
	location: string;
	text: string;
	image: string;
}

const TestimonialCard: FC<Testimonial> = ({ name, location, text, image }) => {
	return (
		<div
			style={{ boxShadow: "9px 4px 41px 0px #1E1D1D40" }}
			className="flex max-w-[591px] flex-col justify-between rounded-xl bg-[#F6DCAB] px-2 pb-6 shadow-md md:px-6 lg:h-[408px]"
		>
			{/* Top: Quote + Text + Image */}
			<div className="mt-4 w-full items-start justify-between gap-4 px-1 pb-4 md:flex md:px-8">
				{/* Left: Quote + Text */}
				<div className="flex-1">
					<Image
						src="/homepageimages/quotesicon.svg"
						alt="Quote Icon"
						width={69}
						height={69}
						className="mb-2 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-[69px] lg:w-[69px]"
					/>
					<p className="mb-4 max-w-[328px] text-[16px] font-normal leading-[100%] tracking-normal text-black md:text-[18px] lg:text-[20px]">
						{text}
					</p>
				</div>

				{/* Right: Image */}
				<div className="mt-2 shrink-0 md:mt-8">
					<div className=" s shado overflow-hidden rounded-md ">
						<Image
							src={image}
							alt={name}
							width={144}
							height={132}
							className="h-[100px] w-[100px] object-cover object-center sm:h-[120px] sm:w-[120px] md:h-[132px] md:w-[144px]"
						/>
					</div>
				</div>
			</div>

			{/* Bottom: Name */}
			<div className="mx-8 mt-2 flex justify-end text-[16px] font-normal leading-[100%] tracking-normal text-black md:mt-4 md:text-[20px]">
				— {name}, {location}
			</div>
		</div>
	);
};

export default TestimonialCard;

// import Image from "next/image";
// import { FC } from "react";

// interface Testimonial {
// 	name: string;
// 	location: string;
// 	text: string;
// 	image: string;
// }

// const TestimonialCard: FC<Testimonial> = ({ name, location, text, image }) => {
// 	return (
// 		<div className="w-full max-w-[591px] rounded-xl bg-[#F6DCAB] p-4 shadow-[9px_4px_41px_0px_#1E1D1D40] md:p-6 lg:h-[408px] lg:px-6 lg:pb-6">
// 			{/* Top: Quote + Text + Image */}
// 			<div className="flex flex-col items-start gap-4 md:flex-row md:px-4 lg:mt-4 lg:px-8 lg:pb-4">
// 				{/* Left: Quote + Text */}
// 				<div className="flex-1">
// 					<Image
// 						src="/homepageimages/quotesicon.svg"
// 						alt="Quote Icon"
// 						width={69}
// 						height={69}
// 						className="mb-2 h-[40px] w-[40px] md:h-[50px] md:w-[50px] lg:h-[69px] lg:w-[69px]"
// 					/>
// 					<p className="mb-4 text-base leading-normal text-black md:text-lg lg:max-w-[328px] lg:text-[20px]">
// 						{text}
// 					</p>
// 				</div>

// 				{/* Right: Image */}
// 				<div className="w-full md:mt-8 md:w-auto md:shrink-0">
// 					<div className="relative mx-auto aspect-square w-[150px] overflow-hidden rounded-md  shadow-md md:w-[150px] lg:w-[150px]">
// 						<Image
// 							src={image}
// 							alt={name}
// 							fill
// 							className="object-cover object-center"
// 							sizes="(max-width: 768px) 128px, (max-width: 1024px) 144px, 132px"
// 						/>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Bottom: Name */}
// 			<div className="mt-4 text-end text-base font-normal leading-normal text-black md:text-lg lg:mx-8 lg:text-[20px]">
// 				— {name}, {location}
// 			</div>
// 		</div>
// 	);
// };

// export default TestimonialCard;
