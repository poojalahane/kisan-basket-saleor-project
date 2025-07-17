"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { REGISTER_IMAGE } from "@/assets/imageResources";
import OtpInput from "@/ui/components/register/OtpInput";

export function RegisterForm() {
	const [formValues, setFormValues] = useState({
		firstName: "",
		lastName: "",
		mobile: "",
		email: "",
		address: "",
	});

	const [errors, setErrors] = useState({
		firstName: "",
		lastName: "",
		mobile: "",
		email: "",
		address: "",
	});

	const [message, setMessage] = useState("");
	const [showOtpModal, setShowOtpModal] = useState(false);
	const [isClient, setIsClient] = useState(false);

	if (formValues.mobile && !errors.mobile) {
	}

	useEffect(() => {
		setIsClient(true); // Ensure client-only components like modals render after hydration
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		let updatedValue = value;
		let error = "";

		// Mobile number validation
		if (name === "mobile") {
			if (!/^\d*$/.test(value)) return;
			if (value.length > 10) return;

			if (value.length > 0 && value.length < 10) {
				error = "Mobile number must be 10 digits.";
			} else if (value.length === 10 && !/^\d{10}$/.test(value)) {
				error = "Invalid mobile number.";
			}
		}

		// Email validation
		else if (name === "email") {
			if (value && !/\S+@\S+\.\S+/.test(value)) {
				error = "Invalid email address.";
			}
		}

		// Required fields
		else if (!value.trim()) {
			error = `${name[0].toUpperCase() + name.slice(1)} is required.`;
		}

		setFormValues((prev) => ({ ...prev, [name]: updatedValue }));
		setErrors((prev) => ({ ...prev, [name]: error }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { firstName, lastName, mobile, email, address } = formValues;

		const newErrors = {
			firstName: firstName ? "" : "First name is required.",
			lastName: lastName ? "" : "Last name is required.",
			mobile: /^\d{10}$/.test(mobile) ? "" : "Mobile number must be 10 digits.",
			email: /\S+@\S+\.\S+/.test(email) ? "" : "Invalid email address.",
			address: address ? "" : "Address is required.",
		};

		setErrors(newErrors);

		const hasErrors = Object.values(newErrors).some((err) => err !== "");
		if (hasErrors) {
			alert("Please correct the errors before submitting.");
			return;
		}

		setMessage("");
		setFormValues({
			firstName: "",
			lastName: "",
			mobile: "",
			email: "",
			address: "",
		});
		alert("User registerd successfully..");
		console.log(formValues);
	};

	const handleVerifyClick = () => {
		if (formValues.mobile && !errors.mobile) {
			setShowOtpModal(true);
		}
	};

	const handleOtpComplete = (otp: string) => {
		console.log("Entered OTP:", otp);
		// Add your OTP verification logic here
	};

	return (
		<div className="mx-auto mt-4 w-full max-w-lg shadow-lg">
			<form className="rounded border px-8 pb-6 shadow-md" onSubmit={handleSubmit}>
				<Image
					src={REGISTER_IMAGE}
					alt="Register"
					width={400}
					height={200}
					className="mb-6 h-32 w-full object-contain"
				/>

				{/* First Name */}
				<div className="mb-4">
					<input
						type="text"
						name="firstName"
						value={formValues.firstName}
						onChange={handleChange}
						placeholder="First Name"
						className="w-full rounded border bg-neutral-50 px-4 py-2"
					/>
					{errors.firstName && <p className="text-sm text-red-600">{errors.firstName}</p>}
				</div>

				{/* Last Name */}
				<div className="mb-4">
					<input
						type="text"
						name="lastName"
						value={formValues.lastName}
						onChange={handleChange}
						placeholder="Last Name"
						className="w-full rounded border bg-neutral-50 px-4 py-2"
					/>
					{errors.lastName && <p className="text-sm text-red-600">{errors.lastName}</p>}
				</div>

				{/* Mobile Number */}
				<div className="mb-4">
					<input
						type="text"
						name="mobile"
						inputMode="numeric"
						maxLength={10}
						value={formValues.mobile}
						onChange={handleChange}
						placeholder="Mobile Number"
						className="w-full rounded border bg-neutral-50 px-4 py-2"
					/>
					{errors.mobile && <p className="text-sm text-red-600">{errors.mobile}</p>}
				</div>

				{/* Verify OTP Button */}
				{formValues.mobile && !errors.mobile && (
					<div className="mb-4">
						<button
							type="button"
							onClick={handleVerifyClick}
							className="w-full rounded-md bg-green-900 px-4 py-2 text-sm font-semibold text-white"
						>
							Verify OTP
						</button>
					</div>
				)}

				{/* OTP Modal - only show on client */}
				{isClient && showOtpModal && (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
						<div className="w-full max-w-md rounded-md bg-white p-6 shadow-lg">
							<h3 className="mb-4 text-center text-lg font-semibold text-gray-800">Enter OTP</h3>
							<p className="mb-2 text-center text-sm text-gray-600">
								Enter the 5-digit OTP sent to your mobile number
							</p>

							<div className="mb-4 flex justify-center">
								<OtpInput digits={5} onComplete={handleOtpComplete} />
							</div>

							<div className="flex flex-col items-center gap-2">
								<button type="button" className="text-sm hover:underline">
									Resend OTP
								</button>

								<button
									type="button"
									onClick={() => setShowOtpModal(false)}
									className="w-full rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
								>
									Submit OTP
								</button>

								<button
									type="button"
									onClick={() => setShowOtpModal(false)}
									className="mt-2 text-sm text-gray-500 hover:underline"
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				)}

				{/* Email */}
				<div className="mb-4">
					<input
						type="email"
						name="email"
						value={formValues.email}
						onChange={handleChange}
						placeholder="Email"
						className="w-full rounded border bg-neutral-50 px-4 py-2"
					/>
					{errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
				</div>

				{/* Address */}
				<div className="mb-4">
					<textarea
						name="address"
						value={formValues.address}
						onChange={handleChange}
						placeholder="Address"
						rows={3}
						className="w-full rounded border bg-neutral-50 px-4 py-2"
					/>
					{errors.address && <p className="text-sm text-red-600">{errors.address}</p>}
				</div>

				{/* Message */}
				{message && <p className="mb-4 text-center text-sm text-red-600">{message}</p>}

				<div className="flex w-full items-center justify-center">
					<button
						className="w-full rounded bg-[#646A36] px-4 py-2 text-neutral-200 hover:bg-neutral-700"
						type="submit"
					>
						Register
					</button>
				</div>
			</form>
		</div>
	);
}
// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { REGISTER_IMAGE } from "@/assets/imageResources";
// import OtpInput from "@/ui/components/register/OtpInput";

// export function RegisterForm() {

// 	const [message, setMessage] = useState("");
// 	const [showOtpModal, setShowOtpModal] = useState(false);
// 	const [formValues, setFormValues] = useState({
// 		firstName: "",
// 		lastName: "",
// 		mobile: "",
// 		email: "",
// 		address: "",
// 	});

// 	const [errors, setErrors] = useState({
// 		firstName: "",
// 		lastName: "",
// 		mobile: "",
// 		email: "",
// 		address: "",
// 	});

// 	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// 		const { name, value } = e.target;

// 		let updatedValue = value;
// 		let error = "";

// 		// Mobile validation
// 		if (name === "mobile") {
// 			// Allow only numbers
// 			if (!/^\d*$/.test(value)) return;

// 			// Limit to 10 digits
// 			if (value.length > 10) return;

// 			if (value.length > 0 && value.length < 10) {
// 				error = "Mobile number must be 10 digits.";
// 			} else if (value.length === 10 && !/^\d{10}$/.test(value)) {
// 				error = "Invalid mobile number.";
// 			}
// 		}

// 		// Email validation
// 		else if (name === "email") {
// 			if (value && !/\S+@\S+\.\S+/.test(value)) {
// 				error = "Invalid email address.";
// 			}
// 		}

// 		// Required field validation
// 		else if (!value.trim()) {
// 			error = `${name[0].toUpperCase() + name.slice(1)} is required.`;
// 		}

// 		setFormValues((prev) => ({
// 			...prev,
// 			[name]: updatedValue,
// 		}));

// 		setErrors((prev) => ({
// 			...prev,
// 			[name]: error,
// 		}));
// 	};

// 	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		const { firstName, lastName, mobile, email, address } = formValues;

// 		const newErrors = {
// 			firstName: firstName ? "" : "First name is required.",
// 			lastName: lastName ? "" : "Last name is required.",
// 			mobile: /^\d{10}$/.test(mobile) ? "" : "Mobile number must be 10 digits.",
// 			email: /\S+@\S+\.\S+/.test(email) ? "" : "Invalid email address.",
// 			address: address ? "" : "Address is required.",
// 		};

// 		setErrors(newErrors);

// 		const hasErrors = Object.values(newErrors).some((err) => err !== "");
// 		if (hasErrors) {
// 			alert("Please correct the errors before submitting.");
// 			// setMessage("Please correct the errors before submitting.");
// 			return;
// 		}

// 		setMessage("");
// 		console.log(formValues);
// 	};

// 	const handleVerifyClick = () => {
// 		if (formValues.mobile && !errors.mobile) {
// 			setShowOtpModal(true);
// 		}
// 	};
// 	const handleOtpComplete = (otp: string) => {
// 		console.log("Entered OTP:", otp);
// 		// Add your verification logic here
// 	};

// 	return (
// 		<div className="mx-auto mt-4 w-full max-w-lg shadow-lg">
// 			<form className="rounded border px-8 pb-6 shadow-md" onSubmit={handleSubmit}>
// 				<Image
// 					src={REGISTER_IMAGE}
// 					alt="Register"
// 					width={400}
// 					height={200}
// 					className="mb-26 h-32 w-full object-contain"
// 				/>

// 				{/* First Name */}
// 				<div className="mb-4">
// 					<input
// 						type="text"
// 						name="firstName"
// 						value={formValues.firstName}
// 						onChange={handleChange}
// 						placeholder="First Name"
// 						className="w-full rounded border bg-neutral-50 px-4 py-2"
// 					/>
// 					{errors.firstName && <p className="text-sm text-red-600">{errors.firstName}</p>}
// 				</div>

// 				{/* Last Name */}
// 				<div className="mb-4">
// 					<input
// 						type="text"
// 						name="lastName"
// 						value={formValues.lastName}
// 						onChange={handleChange}
// 						placeholder="Last Name"
// 						className="w-full rounded border bg-neutral-50 px-4 py-2"
// 					/>
// 					{errors.lastName && <p className="text-sm text-red-600">{errors.lastName}</p>}
// 				</div>

// 				{/* Mobile Number */}
// 				<>
// 					<div className="mb-4">
// 						<input
// 							type="text"
// 							name="mobile"
// 							inputMode="numeric"
// 							pattern="\d{10}"
// 							maxLength={10}
// 							value={formValues.mobile}
// 							onChange={handleChange}
// 							placeholder="Mobile Number"
// 							className="w-full rounded border bg-neutral-50 px-4 py-2"
// 						/>
// 						{errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>}
// 					</div>

// 					{/* Verify OTP Button */}
// 					{formValues.mobile && !errors.mobile && (
// 						<div className="mb-4">
// 							<button
// 								type="button"
// 								onClick={handleVerifyClick}
// 								className="w-full rounded-md  bg-green-900 px-4 py-2 text-sm font-semibold text-white"
// 							>
// 								Verify OTP
// 							</button>
// 						</div>
// 					)}

// 					{/* OTP Modal */}
// 					{showOtpModal && (
// 						<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
// 							<div className="w-full max-w-md rounded-md bg-white p-6 shadow-lg">
// 								<h3 className="mb-4 text-center text-lg font-semibold text-gray-800">Enter OTP</h3>
// 								<p className="mb-2 text-center text-sm text-gray-600">
// 									Enter the 5-digit OTP sent to your mobile number
// 								</p>

// 								{/* OTP Inputs */}
// 								<div className="mb-4 flex justify-center">
// 									<OtpInput digits={5} onComplete={handleOtpComplete} />
// 								</div>

// 								{/* Resend + Confirm Buttons */}
// 								<div className="flex flex-col items-center gap-2">
// 									<button
// 										type="button"
// 										// onClick={handleResendOtp}
// 										className="text-sm  hover:underline"
// 									>
// 										Resend OTP
// 									</button>

// 									<button
// 										type="button"
// 										onClick={() => setShowOtpModal(false)}
// 										className="w-full rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
// 									>
// 										Submit OTP
// 									</button>

// 									<button
// 										type="button"
// 										onClick={() => setShowOtpModal(false)}
// 										className="mt-2 text-sm text-gray-500 hover:underline"
// 									>
// 										Cancel
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					)}
// 				</>

// 				{/* Email */}
// 				<div className="mb-4">
// 					<input
// 						type="email"
// 						name="email"
// 						value={formValues.email}
// 						onChange={handleChange}
// 						placeholder="Email"
// 						className="w-full rounded border bg-neutral-50 px-4 py-2"
// 					/>
// 					{errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
// 				</div>

// 				{/* Address */}
// 				<div className="mb-4">
// 					<textarea
// 						name="address"
// 						value={formValues.address}
// 						onChange={handleChange}
// 						placeholder="Address"
// 						rows={3}
// 						className="w-full rounded border bg-neutral-50 px-4 py-2"
// 					/>
// 					{errors.address && <p className="text-sm text-red-600">{errors.address}</p>}
// 				</div>

// 				{/* General Error Message */}
// 				{message && <p className="mb-4 text-center text-sm text-red-600">{message}</p>}

// 				<div className="flex w-full items-center justify-center">
// 					<button
// 						className="w-full rounded bg-[#646A36] px-4 py-2 text-neutral-200 hover:bg-neutral-700"
// 						type="submit"
// 					>
// 						Register
// 					</button>
// 				</div>
// 			</form>
// 		</div>
// 	);
// }
