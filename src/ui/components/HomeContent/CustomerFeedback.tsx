import Image from "next/image";

export default function CustomerFeedback() {
	// customer-feeback-backgroundimage.png
	return (
		<div className="relative w-full overflow-hidden bg-[#E9D2AC] px-4 py-6 md:px-6 lg:px-12 lg:py-10">
			{/* background image */}
			<Image
				src="/customer-feedbackimages/customerFeedbaclBackgroundimage.png"
				alt="Hero Background"
				fill
				className="object-cover opacity-70"
				priority
			/>
			<div className="mx-auto flex  max-w-7xl flex-col-reverse  items-center  gap-6 md:justify-center lg:flex-row ">
				{/* Right Section (Image with decorations) */}
				<div className="relative flex justify-center md:w-[440px] lg:w-[490px]">
					{/* Decorative Fruits */}
					<Image
						src="/customer-feedbackimages/oilimage.svg"
						alt="Top Left"
						width={50}
						height={80}
						className="absolute -left-3 -top-3 z-20 hidden md:block md:h-[150px] md:w-[80px] lg:h-[193px] lg:w-[101px]"
					/>
					<Image
						src="/customer-feedbackimages/aataimage.svg"
						alt="Decoration Bottom Left"
						width={60}
						height={60}
						className="absolute -bottom-6 -left-6 z-20 hidden md:block md:h-[200px] md:w-[120px] lg:h-[237px] lg:w-[158px]"
					/>{" "}
					<Image
						src="/customer-feedbackimages/aataimage.svg"
						alt="Bottom Left"
						width={90}
						height={100}
						className="absolute -bottom-3 -left-3 z-20 hidden md:h-[200px] md:w-[120px] lg:h-[237px] lg:w-[158px]"
					/>
					{/* <Image
						src="/customer-feedbackimages/capsicumimage.svg"
						alt="Bottom Far Left"
						width={120}
						height={120}
						className="-left-34 absolute -bottom-16 z-20 hidden md:block  md:h-[180px] md:w-[180px] lg:h-[226px] lg:w-[226px]"
					/> */}
					<Image
						src="/customer-feedbackimages/mangoimage.svg"
						alt="Top Right"
						width={80}
						height={80}
						className="absolute -right-3 -top-3 z-20 hidden md:block md:h-[100px] md:w-[100px] lg:h-[142px] lg:w-[142px]"
					/>
					<Image
						src="/customer-feedbackimages/tomatoimage.svg"
						alt="Bottom Right"
						width={90}
						height={90}
						className="absolute -bottom-3 -right-3 z-20 hidden md:block md:h-[110px] md:w-[100px] lg:h-[137px] lg:w-[128px]"
					/>
					{/* Main Image */}
					<div>
						<Image
							src="/customer-feedbackimages/customerfeebackimag1.png"
							alt="Customer"
							width={320}
							height={200}
							className="relative z-10 w-[300px] md:w-[320px]"
						/>
					</div>
				</div>

				{/* Left Section (Text + Box) */}
				<div className="relative flex flex-col justify-center text-center lg:text-left">
					{/* Watermelon Decoration */}
					<Image
						src="/customer-feedbackimages/watermelonimage.svg"
						alt="Watermelon"
						width={120}
						height={100}
						className="absolute -right-4 hidden md:-bottom-2 md:h-[156px] md:w-[183px] lg:-bottom-2"
					/>

					<div className="flex flex-col items-center justify-center text-center lg:w-[519px]">
						{/* Heading */}
						<h2 className="mb-2 font-konkhmer text-[32px] font-normal leading-[44px] text-[#34532D] sm:text-[40px] sm:leading-[56px] md:text-[48px] md:leading-[64px] lg:mb-4 lg:text-[64px] lg:leading-[91px]">
							CUSTOMER FEEDBACK
						</h2>

						{/* Stars */}
						<div className="mb-10 flex justify-center sm:mb-12 md:mb-8 lg:mb-8 lg:justify-start">
							<div className="flex space-x-1 text-[#314F2B]">
								{Array.from({ length: 5 }).map((_, i) => (
									<Image
										key={i}
										src="/customer-feedbackimages/stariconcustomerfeedback.svg"
										alt="Star"
										width={24}
										height={24}
										className="h-[34px] w-[40px]"
									/>
								))}
							</div>
						</div>
					</div>

					{/* Feedback Box */}
					<div className="mx-auto hidden w-full max-w-md rounded-[16px] bg-[#FFF1E1] px-4 py-4 sm:max-w-lg md:block md:max-w-md lg:w-[519.45px]  lg:rounded-[25px] lg:px-6 lg:py-4">
						<p className="font-inter text-[14px] font-medium leading-[22px] text-[#335537] sm:text-[15px] sm:leading-[24px] md:text-[18px] md:leading-[28px] lg:text-[28px] lg:leading-[38px] ">
							Every product from Kisan Basket reflects our promise of purity, freshness, and honesty — and
							that’s why our users keep coming back.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

//! original code
// import Image from "next/image";

// export default function CustomerFeedback() {
// 	return (
// 		<div className="w-full  bg-[#E9D2AC] px-4 py-12 md:px-8 lg:px-16">
// 			<div className="mx-auto grid max-w-7xl  grid-cols-1 items-center gap-10 lg:h-[800px] lg:grid-cols-2">
// 				{/* right section */}
// 				<div className="relative flex justify-center bg-blue-400   md:w-[480px] lg:w-[520px]">
// 					{/* Decorative fruits */}
// 					<Image
// 						src="/customer-feedbackimages/oilimage.svg"
// 						alt="Decoration Top Left"
// 						width={60}
// 						height={60}
// 						className="absolute -left-6 -top-6 z-20 hidden md:block md:h-[150px] md:w-[80px] lg:h-[193px] lg:w-[101px]"
// 					/>
// <Image
// 	src="/customer-feedbackimages/aataimage.svg"
// 	alt="Decoration Bottom Left"
// 	width={60}
// 	height={60}
// 	className="absolute -bottom-6 -left-6 z-20 hidden md:block md:h-[200px] md:w-[120px] lg:h-[237px] lg:w-[158px]"
// />
// 					<Image
// 						src="/customer-feedbackimages/capsicumimage.svg"
// 						alt="Decoration Bottom Left"
// 						width={60}
// 						height={60}
// 						className="-left-42 absolute  -bottom-24 z-20 hidden md:block md:h-[180px] md:w-[180px] lg:h-[226px] lg:w-[226px]"
// 					/>
// 					<Image
// 						src="/customer-feedbackimages/mangoimage.svg"
// 						alt="Decoration Top Right"
// 						width={60}
// 						height={60}
// 						className="absolute -right-6 -top-6 z-20 hidden md:block md:h-[100px] md:w-[100px] lg:h-[142px] lg:w-[142px]"
// 					/>
// 					<Image
// 						src="/customer-feedbackimages/tomatoimage.svg"
// 						alt="Decoration Bottom Right"
// 						width={60}
// 						height={60}
// 						className="absolute -bottom-6 -right-6 z-20 hidden md:block md:h-[110px] md:w-[100px] lg:h-[137px] lg:w-[128px]"
// 					/>
// 					<div>
// 						<Image
// 							src="/customer-feedbackimages/customerfeebackimag1.png"
// 							alt="Mobile Frame"
// 							width={412}
// 							height={250}
// 							className=" relative z-10 w-[403px]"
// 						/>
// 					</div>
// 				</div>

// 				{/* left section  */}
// 				<div className="relative  bg-red-300 text-center lg:text-left">
// 					<Image
// 						src="/customer-feedbackimages/watermelonimage.svg"
// 						alt="Decoration Bottom Right"
// 						width={60}
// 						height={60}
// 						className="absolute -right-6 hidden md:-bottom-6 md:block md:h-[156px] md:w-[183px] lg:-bottom-2"
// 					/>
// 					{/* Heading and stars section */}
// 					<div className="flex flex-col items-center justify-center text-center ">
// <h2 className="mb-4 font-konkhmer text-[32px] font-normal leading-[44px] text-[#34532D] sm:text-[40px] sm:leading-[56px] md:text-[48px] md:leading-[64px] lg:text-[64px] lg:leading-[91px]">
// 	CUSTOMER FEEDBACK
// </h2>

// 						{/* Stars */}
// <div className="mb-10 flex justify-center sm:mb-12 md:mb-14 lg:mb-16 lg:justify-start">
// 	<div className="flex space-x-1 text-[#314F2B]">
// 		{Array.from({ length: 5 }).map((_, i) => (
// 			<Image
// 				key={i}
// 				src="/customer-feedbackimages/stariconcustomerfeedback.svg"
// 				alt="Star"
// 				width={24}
// 				height={24}
// 				className="h-[34px] w-[40px]"
// 			/>
// 		))}
// 	</div>
// </div>
// 					</div>

// 					{/* Feedback box */}
// 					<div className="mx-auto  w-full max-w-md rounded-[20px] bg-[#FFF1E1] px-4 py-6 sm:max-w-lg sm:px-6 sm:py-8 md:max-w-xl md:px-8 md:py-10 lg:min-h-[432.75px] lg:w-[519.45px] lg:rounded-[25px] lg:p-8">
// 						<p className="font-inter text-[18px] font-medium leading-[28px] text-[#335537] sm:text-[20px] sm:leading-[32px] md:text-[24px] md:leading-[40px] lg:text-[36px] lg:leading-[56.52px]">
// 							Every product from Kisan Basket reflects our promise of purity, freshness, and honesty — and
// 							that’s why our users keep coming back.
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
