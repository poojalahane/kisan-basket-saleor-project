import Image from "next/image";

export default function CustomerFeedback() {
	return (
		<div className="w-full  bg-[#E9D2AC] px-4 py-12 md:px-8 lg:px-16">
			<div className="mx-auto grid max-w-7xl  grid-cols-1 items-center gap-10 lg:grid-cols-2">
				{/* right section */}
				<div className="relative flex bg-orange-200 lg:justify-end ">
					{/* Decorative fruits */}
					<Image
						src="/customer-feedbackimages/oilimage.svg"
						alt="Decoration Top Left"
						width={60}
						height={60}
						className="absolute -left-6 -top-6 hidden md:block md:h-[150px] md:w-[80px] lg:h-[193px] lg:w-[101px]"
					/>
					<Image
						src="/customer-feedbackimages/aataimage.svg"
						alt="Decoration Bottom Left"
						width={60}
						height={60}
						className="absolute -bottom-6 -left-6 hidden md:block"
					/>
					<Image
						src="/customer-feedbackimages/mangoimage.svg"
						alt="Decoration Top Right"
						width={60}
						height={60}
						className="absolute -right-6 -top-6 hidden md:block"
					/>
					<Image
						src="/customer-feedbackimages/tomatoimage.svg"
						alt="Decoration Bottom Right"
						width={60}
						height={60}
						className="absolute -bottom-6 -right-6 hidden md:block"
					/>

					{/* Mobile frame and chat overlay */}
					<div className="relative  mb-20 flex w-full items-center justify-end overflow-hidden rounded-3xl ">
						{/* Screen content (chatting image) positioned first so it's behind */}
						{/* <Image
							src="/customer-feedbackimages/customerchattingimage1.svg"
							alt="Chat Screenshot"
							width={328}
							height={714}
							className="absolute top-[48px] object-cover  lg:left-[245px] "
						/> */}

						{/* Phone frame on top */}
						<Image
							src="/customer-feedbackimages/oilimage.svg"
							alt="Decoration Top Left"
							width={60}
							height={60}
							className="absolute -left-6 -top-6 hidden md:block md:h-[150px] md:w-[80px] lg:h-[193px] lg:w-[101px]"
						/>
						<Image
							src="/customer-feedbackimages/mobilescreeimage.png"
							alt="Mobile Frame"
							width={412}
							height={250}
							className=" relative z-10 w-[403px]"
						/>
					</div>
				</div>

				{/* left section  */}
				<div className="relative  text-center lg:text-left">
					<Image
						src="/customer-feedbackimages/watermelonimage.svg"
						alt="Decoration Bottom Right"
						width={60}
						height={60}
						className="absolute -right-6 hidden md:-bottom-6 md:block md:h-[156px] md:w-[183px] lg:-bottom-2"
					/>
					{/* Heading and stars section */}
					<div className="flex flex-col items-center justify-center text-center ">
						<h2 className="mb-4 font-konkhmer text-[32px] font-normal leading-[44px] text-[#34532D] sm:text-[40px] sm:leading-[56px] md:text-[48px] md:leading-[64px] lg:text-[64px] lg:leading-[91px]">
							CUSTOMER FEEDBACK
						</h2>

						{/* Stars */}
						<div className="mb-10 flex justify-center sm:mb-12 md:mb-14 lg:mb-16 lg:justify-start">
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

					{/* Feedback box */}
					<div className="mx-auto  w-full max-w-md rounded-[20px] bg-[#FFF1E1] px-4 py-6 sm:max-w-lg sm:px-6 sm:py-8 md:max-w-xl md:px-8 md:py-10 lg:min-h-[432.75px] lg:w-[519.45px] lg:rounded-[25px] lg:p-8">
						<p className="font-inter text-[18px] font-medium leading-[28px] text-[#335537] sm:text-[20px] sm:leading-[32px] md:text-[24px] md:leading-[40px] lg:text-[36px] lg:leading-[56.52px]">
							Every product from Kisan Basket reflects our promise of purity, freshness, and honesty — and
							that’s why our users keep coming back.
						</p>
					</div>
				</div>

				{/* <div className="text-center lg:text-left">
					<div className="flex flex-col items-center justify-center text-center">
						<h2 className="mb-4  font-konkhmer text-2xl text-[64px] font-normal leading-[91px] text-[#34532D]">
							CUSTOMER FEEDBACK
						</h2>
						<div className="mb-16 flex justify-center lg:justify-start">
							<div className="flex space-x-1 text-[#314F2B]">
								{Array.from({ length: 5 }).map((_, i) => (
									<Image
										key={i}
										src="/customer-feedbackimages/stariconcustomerfeedback.svg"
										alt="Star"
										width={24}
										height={24}
										className="h-6 w-6"
									/>
								))}
							</div>
						</div>
					</div>
					<div className="flex min-h-[432.75px] w-[519.45px] items-center  rounded-[25px] bg-[#FFF1E1] opacity-100  lg:p-8">
						<p className="font-inter max-w-xl text-[36px] text-base font-medium leading-[56.52px] text-[#335537]">
							Every product from Kisan Basket reflects our promise of purity, freshness, and honesty — and
							that’s why our users keep coming back.
						</p>
					</div>
				</div> */}
			</div>
		</div>
	);
}

// import Image from "next/image";

// export default function CustomerFeedback() {
// 	return (
// 		<div className="w-full  bg-[#E9D2AC] px-4 py-12 md:px-8 lg:px-16">
// 			<div className="mx-auto grid max-w-7xl  grid-cols-1 items-center gap-10 lg:grid-cols-2">
// 				{/* Phone UI with decorative elements */}
// 				<div className="relative flex justify-center ">
// 					{/* Decorative fruits */}
// 					<Image
// 						src="/customer-feedbackimages/oilimage.svg"
// 						alt="Decoration Top Left"
// 						width={60}
// 						height={60}
// 						className="absolute -left-6 -top-6 hidden md:block"
// 					/>
// 					<Image
// 						src="/customer-feedbackimages/aataimage.svg"
// 						alt="Decoration Bottom Left"
// 						width={60}
// 						height={60}
// 						className="absolute -bottom-6 -left-6 hidden md:block"
// 					/>
// 					<Image
// 						src="/customer-feedbackimages/mangoimage.svg"
// 						alt="Decoration Top Right"
// 						width={60}
// 						height={60}
// 						className="absolute -right-6 -top-6 hidden md:block"
// 					/>
// 					<Image
// 						src="/customer-feedbackimages/tomatoimage.svg"
// 						alt="Decoration Bottom Right"
// 						width={60}
// 						height={60}
// 						className="absolute -bottom-6 -right-6 hidden md:block"
// 					/>

// 					{/* Mobile frame and chat overlay */}
// 					<div className="relative  mb-20 w-full overflow-hidden rounded-3xl  ">
// 						{/* Screen content (chatting image) positioned first so it's behind */}
// 						<Image
// 							src="/customer-feedbackimages/customerchattingimage1.svg"
// 							alt="Chat Screenshot"
// 							width={328}
// 							height={714}
// 							className="absolute left-[40px] top-[48px]  object-cover "
// 						/>

// 						{/* Phone frame on top */}
// 						<Image
// 							src="/customer-feedbackimages/mobilescreenimage.svg"
// 							alt="Mobile Frame"
// 							width={412}
// 							height={250}
// 							className=" relative z-10 w-[403px]"
// 						/>
// 					</div>
// 				</div>

// 				{/* Feedback Text stariconcustomerfeedback.svg */}
// 				<div className="text-center lg:text-left">
// 					<div className="flex flex-col items-center justify-center text-center">
// 						<h2 className="mb-4  font-konkhmer text-2xl text-[64px] font-normal leading-[91px] text-[#34532D]">
// 							CUSTOMER FEEDBACK
// 						</h2>
// 						<div className="mb-16 flex justify-center lg:justify-start">
// 							<div className="flex space-x-1 text-[#314F2B]">
// 								{Array.from({ length: 5 }).map((_, i) => (
// 									<Image
// 										key={i}
// 										src="/customer-feedbackimages/stariconcustomerfeedback.svg"
// 										alt="Star"
// 										width={24}
// 										height={24}
// 										className="h-6 w-6"
// 									/>
// 								))}
// 							</div>
// 						</div>
// 					</div>
// 					<div className="flex min-h-[432.75px] w-[519.45px] items-center  rounded-[25px] bg-[#FFF1E1] opacity-100  lg:p-8">
// 						<p className="font-inter max-w-xl text-[36px] text-base font-medium leading-[56.52px] text-[#335537]">
// 							Every product from Kisan Basket reflects our promise of purity, freshness, and honesty — and
// 							that’s why our users keep coming back.
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
