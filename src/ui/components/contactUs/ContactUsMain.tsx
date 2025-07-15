"use client";

import React, { useState } from "react";
import Image from "next/image";

const ContactUsMain = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		subject: "",
		message: "",
	});

	const [errors, setErrors] = useState<any>({});

	const validate = () => {
		const newErrors: any = {};
		if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
		if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Email is invalid";
		}
		if (!formData.subject.trim()) newErrors.subject = "Subject is required";
		if (!formData.message.trim()) newErrors.message = "Message is required";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: "" });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (validate()) {
			console.log("Form submitted:", formData);
			// TODO: Integrate with backend API when ready
		}
	};

	return (
		<div>
			{/* Hero Section for mobile and tab devices*/}
			<div className="relative h-[360px] w-full lg:hidden">
				<Image
					src="/contactimages/contactbackgroundimage.svg"
					alt="Hero Background"
					fill
					className="object-cover"
					priority
				/>
				<div className="relative z-10 text-white">
					<div className="flex flex-col-reverse items-center justify-between gap-6 px-4 py-8 lg:flex-row lg:px-16">
						<div className="flex w-full flex-col items-center justify-center  lg:w-1/2 lg:items-start">
							<h1 className="mt-6 text-[28px] font-semibold leading-[34px] tracking-normal text-white lg:mt-16 lg:text-[48px] lg:leading-[28px]">
								Contact Us
							</h1>
							<p className="mt-4 max-w-md text-center text-[16px] font-normal leading-[20px] tracking-[0.25px] text-[#E9E5E5BF] lg:text-left lg:text-[20px]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							</p>
							<div className="mt-8 flex gap-4">
								{["instagramicon", "facebookicon", "youtubeicon", "twittericon"].map((icon) => (
									<div key={icon} className="relative h-10 w-10">
										<Image
											src={`/contactimages/${icon}.svg`}
											alt={icon}
											fill
											className="object-cover"
											priority
										/>
									</div>
								))}
							</div>
						</div>
						<div className="relative w-full   lg:mt-20 lg:h-[430px] lg:w-[473px]">
							<Image
								src="/contactimages/contactpagemainimage.svg"
								alt="Main Visual"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
			{/* Hero section for desktop devices */}
			<div className="relative hidden h-[360px] w-full lg:block">
				<Image
					src="/contactimages/contactbackgroundimage.svg"
					alt="Hero Background"
					fill
					className="object-cover"
					priority
				/>
				{/* main content */}
				<div className="relative z-10  text-white">
					{/* content title */}
					<div className="flex w-full">
						<div className="w-[50%]">
							<div className="flex flex-col items-center justify-center lg:ml-8 lg:mt-4 ">
								<h1 className="mt-16 text-[48px] font-semibold leading-[28px] tracking-normal text-white">
									Contact Us
								</h1>
								<div className="max-w-[420px]">
									<p className="mt-8 text-center text-[20px] font-normal leading-[20px] tracking-[0.25px] text-[#E9E5E5BF]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									</p>
								</div>
								<div className="mt-10 flex gap-4">
									<div className="relative h-[40px] w-[40px]">
										<Image
											src="/contactimages/instagramicon.svg"
											alt="Hero Background"
											fill
											className="object-cover"
											priority
										/>
									</div>
									<div className="relative h-[40px] w-[40px]">
										<Image
											src="/contactimages/facebookicon.svg"
											alt="Hero Background"
											fill
											className="object-cover"
											priority
										/>
									</div>
									<div className="relative h-[40px] w-[40px]">
										<Image
											src="/contactimages/youtubeicon.svg"
											alt="Hero Background"
											fill
											className="object-cover"
											priority
										/>
									</div>
									<div className="relative h-[40px] w-[40px]">
										<Image
											src="/contactimages/twittericon.svg"
											alt="Hero Background"
											fill
											className="object-cover"
											priority
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="w-[50%]">
							{/* Image section */}
							<div className="z-20 flex items-end justify-end ">
								<div className="relative w-full lg:mx-24  lg:mt-20 lg:h-[430px] lg:w-[473px] ">
									<Image
										src="/contactimages/contactpagemainimage.svg"
										alt="Hero Background"
										fill
										className="object-cover"
										priority
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Form */}
			<div className="bg-white  md:py-6 lg:pb-12  lg:pt-40">
				<section className="mx-auto w-full max-w-7xl  px-8 md:px-1 lg:w-[750px]">
					<div className="relative mx-auto h-[70px] w-[220px] md:mb-4  md:w-[400px] lg:h-[80px] lg:w-[600px]">
						<Image
							src="/contactimages/getintoutchimage.svg"
							alt="Get in Touch"
							fill
							className="object-contain"
						/>
					</div>
					<p className="mb-4 text-center font-sourceSerif text-[16px] font-normal leading-[20px] tracking-[0.25px] text-[#000000BF] md:mb-8 lg:text-[20px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et
						dolore magna aliqua.
					</p>

					<form className="space-y-6 " onSubmit={handleSubmit}>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
							{[
								{ name: "firstName", placeholder: "First name" },
								{ name: "lastName", placeholder: "Last name" },
								{ name: "email", placeholder: "Email" },
								{ name: "subject", placeholder: "Subject" },
							]?.map(({ name, placeholder }) => (
								<div key={name}>
									<input
										type={name === "email" ? "email" : "text"}
										name={name}
										placeholder={placeholder}
										value={(formData as any)[name]}
										onChange={handleChange}
										className="w-full rounded-xl border border-black px-4 py-3 text-sm focus:outline-none"
									/>
									{errors[name] && <p className="mt-1 text-xs text-red-600">{errors[name]}</p>}
								</div>
							))}
						</div>

						<div>
							<textarea
								name="message"
								placeholder="Your message"
								rows={6}
								value={formData.message}
								onChange={handleChange}
								className="w-full rounded-xl border border-black px-4 py-3 text-sm focus:outline-none"
							></textarea>
							{errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
						</div>

						<div className="flex w-full justify-center rounded-[31px] bg-[#A9B243] text-white shadow-[4px_4px_4px_0px_#00000040] lg:h-[53px]">
							<button
								type="submit"
								className="px-12 py-3 font-lato text-[18px] font-bold leading-[100%] tracking-[3%] lg:text-[22px]"
							>
								Submit
							</button>
						</div>
					</form>
				</section>
			</div>

			{/* Map Section */}
			<section className="px-4 py-4 md:py-10 lg:py-16">
				<div className="mx-auto w-full max-w-[1210px] overflow-hidden rounded-[31px] shadow-md">
					<a
						href="https://www.google.com/maps/dir/?api=1&destination=Office+No.+302,+3rd+Floor,+74+Downtown,+Baner+Road,+Baner,+Pune-411045"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Open directions to our office on Google Maps"
					>
						<iframe
							title="Our Office Location on Google Maps"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.040620505529!2d73.78406367497604!3d18.568296367748404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf4c3e8eb59f%3A0x4e99420cb37e17c3!2s74%20Downtown%2C%20Baner%20Rd%2C%20Baner%2C%20Pune%2C%20Maharashtra%20411045!5e0!3m2!1sen!2sin!4v1688479575094!5m2!1sen!2sin"
							width="100%"
							height="399"
							className="h-[399px] w-full rounded-[31px] border-0"
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</a>
				</div>
			</section>
		</div>
	);
};

export default ContactUsMain;

// import React from "react";
// import Image from "next/image";
// const ContactUsMainComponent = () => {
// 	return (
// 		<div>
// 			{/* background image */}
// <div className="relative h-[360px] w-full">
// 	<Image
// 		src="/contactimages/contactbackgroundimage.svg"
// 		alt="Hero Background"
// 		fill
// 		className="object-cover"
// 		priority
// 	/>
// 	{/* main content */}
// 	<div className="relative z-10  text-white">
// 		{/* content title */}
// 		<div className="flex w-full">
// 			<div className="w-[50%]">
// 				<div className="flex flex-col items-center justify-center lg:ml-8 lg:mt-4 ">
// 					<h1 className="mt-16 text-[48px] font-semibold leading-[28px] tracking-normal text-white">
// 						Contact Us
// 					</h1>
// 					<div className="max-w-[420px]">
// 						<p className="mt-8 text-center text-[20px] font-normal leading-[20px] tracking-[0.25px] text-[#E9E5E5BF]">
// 							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// 						</p>
// 					</div>
// 					<div className="mt-10 flex gap-4">
// 						<div className="relative h-[40px] w-[40px]">
// 							<Image
// 								src="/contactimages/instagramicon.svg"
// 								alt="Hero Background"
// 								fill
// 								className="object-cover"
// 								priority
// 							/>
// 						</div>
// 						<div className="relative h-[40px] w-[40px]">
// 							<Image
// 								src="/contactimages/facebookicon.svg"
// 								alt="Hero Background"
// 								fill
// 								className="object-cover"
// 								priority
// 							/>
// 						</div>
// 						<div className="relative h-[40px] w-[40px]">
// 							<Image
// 								src="/contactimages/youtubeicon.svg"
// 								alt="Hero Background"
// 								fill
// 								className="object-cover"
// 								priority
// 							/>
// 						</div>
// 						<div className="relative h-[40px] w-[40px]">
// 							<Image
// 								src="/contactimages/twittericon.svg"
// 								alt="Hero Background"
// 								fill
// 								className="object-cover"
// 								priority
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="w-[50%]">
// 				{/* Image section */}
// 				<div className="z-20 flex items-end justify-end ">
// 					<div className="relative w-full lg:mx-24  lg:mt-20 lg:h-[430px] lg:w-[473px] ">
// 						<Image
// 							src="/contactimages/contactpagemainimage.svg"
// 							alt="Hero Background"
// 							fill
// 							className="object-cover"
// 							priority
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
// 			{/* form section */}
// 			<div className="h-auto bg-white">
// 				{/* contact form */}
// 				<div className="lg:mt-16 ">
// 					<section className="mx-auto max-w-3xl px-4 py-12 lg:w-[636px]">
// 						{/* title */}
// 						<div className="flex justify-center  py-2 md:py-4">
// 							<div className="relative  w-[220px] max-w-3xl px-4  md:w-[500px] lg:h-[80px] lg:w-[600px]">
// 								<Image
// 									src="/contactimages/getintoutchimage.svg"
// 									alt="Kisan Basket"
// 									fill
// 									className="object-contain"
// 								/>
// 							</div>
// 						</div>
// 						{/* Description Text */}
// 						<p className=" font-sourceSerif mx-2 mb-8 mt-2 text-center text-[20px] font-normal leading-[20px] tracking-[0.25px] text-[#000000BF]">
// 							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et
// 							dolore magna aliqua.
// 						</p>

// 						{/* Form */}
// 						<form className="space-y-6 ">
// 							{/* Grid Inputs */}
// 							<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
// 								<input
// 									type="text"
// 									placeholder="First name"
// 									className="w-full rounded-xl border border-black px-4 py-3 focus:outline-none"
// 								/>
// 								<input
// 									type="text"
// 									placeholder="Last name"
// 									className="w-full rounded-xl border border-black px-4 py-3 focus:outline-none"
// 								/>
// 								<input
// 									type="email"
// 									placeholder="Email"
// 									className="w-full rounded-xl border border-black px-4 py-3 focus:outline-none"
// 								/>
// 								<input
// 									type="text"
// 									placeholder="Subject"
// 									className="w-full rounded-xl border border-black px-4 py-3 focus:outline-none"
// 								/>
// 							</div>

// 							{/* Message Box */}
// 							<textarea
// 								placeholder="Your message"
// 								rows={6}
// 								className="w-full rounded-xl border border-black px-4 py-3 focus:outline-none"
// 							></textarea>

// 							{/* Submit Button */}
// 							<div
// 								className="flex w-full justify-center rounded-[31px] bg-[#A9B243] text-white lg:h-[53px]"
// 								style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
// 							>
// 								<button
// 									type="submit"
// 									className="   font-lato px-12 py-3 text-[22px] font-bold leading-[100%] tracking-[3%]"
// 								>
// 									Submit
// 								</button>
// 							</div>
// 						</form>
// 					</section>
// 				</div>
// 			</div>
// 			{/* map section */}
// 			<section className="px-4 py-10 md:py-16">
// 				<div className="mx-auto w-full max-w-[1210px] overflow-hidden rounded-[31px] shadow-md">
// 					<Image
// 						src="/contactimages/contactmapimage.svg"
// 						alt="Google Map"
// 						width={1210}
// 						height={399}
// 						className="h-auto w-full object-cover"
// 						priority
// 					/>
// 				</div>
// 			</section>
// 		</div>
// 	);
// };

// export default ContactUsMainComponent;
