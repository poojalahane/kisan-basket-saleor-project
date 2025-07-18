"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OtpInput from "@/ui/components/register/OtpInput";
export function LoginForm() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [otp, setOtp] = useState("");
	const [loginMethod, setLoginMethod] = useState<"emailPassword" | "emailOtp" | "mobileOtp">("emailPassword");
	const [isOtpSent, setIsOtpSent] = useState(false);
	const [errors, setErrors] = useState({
		email: "",
		password: "",
		mobileNumber: "",
		otp: "",
	});

	const validateEmail = (email: string) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	};

	const validateMobileNumber = (number: string) => {
		const re = /^[0-9]{10}$/;
		return re.test(number);
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setEmail(value);
		setErrors((prev) => ({ ...prev, email: "" }));
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
		setErrors((prev) => ({ ...prev, password: "" }));
	};

	const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/\D/g, "");
		setMobileNumber(value);
		setErrors((prev) => ({ ...prev, mobileNumber: "" }));
	};

	const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/\D/g, "");
		setOtp(value);
		setErrors((prev) => ({ ...prev, otp: "" }));
	};

	const handleSendOtp = () => {
		if (loginMethod === "emailOtp") {
			if (!email) {
				setErrors((prev) => ({ ...prev, email: "Email is required" }));
				return;
			}
			if (!validateEmail(email)) {
				setErrors((prev) => ({ ...prev, email: "Please enter a valid email" }));
				return;
			}
			console.log("OTP sent to email:", email);
		} else if (loginMethod === "mobileOtp") {
			if (!mobileNumber) {
				setErrors((prev) => ({ ...prev, mobileNumber: "Mobile number is required" }));
				return;
			}
			if (!validateMobileNumber(mobileNumber)) {
				setErrors((prev) => ({ ...prev, mobileNumber: "Please enter a valid 10-digit number" }));
				return;
			}
			console.log("OTP sent to mobile:", mobileNumber);
		}
		setIsOtpSent(true);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (loginMethod === "emailPassword") {
			if (!email) {
				setErrors((prev) => ({ ...prev, email: "Email is required" }));
				return;
			}
			if (!validateEmail(email)) {
				setErrors((prev) => ({ ...prev, email: "Please enter a valid email" }));
				return;
			}
			if (!password) {
				setErrors((prev) => ({ ...prev, password: "Password is required" }));
				return;
			}
			console.log("Login with email/password:", { email, password });
		} else if (loginMethod === "emailOtp" || loginMethod === "mobileOtp") {
			if (!otp) {
				setErrors((prev) => ({ ...prev, otp: "OTP is required" }));
				return;
			}
			if (loginMethod === "emailOtp") {
				console.log("Verify OTP for email:", email, otp);
			} else {
				console.log("Verify OTP for mobile:", mobileNumber, otp);
			}
		}
	};

	const handleForgotPassword = () => {
		router.push("/forgot-password");
	};

	const switchToEmailOtp = () => {
		setLoginMethod("emailOtp");
		setIsOtpSent(false);
		setErrors({ email: "", password: "", mobileNumber: "", otp: "" });
	};

	const switchToMobileOtp = () => {
		setLoginMethod("mobileOtp");
		setIsOtpSent(false);
		setErrors({ email: "", password: "", mobileNumber: "", otp: "" });
	};

	const switchToEmailPassword = () => {
		setLoginMethod("emailPassword");
		setIsOtpSent(false);
		setErrors({ email: "", password: "", mobileNumber: "", otp: "" });
	};

	return (
		<div className="grid grid-cols-1 font-sans md:grid-cols-2">
			{/* Left - Image Section */}
			<div className="relative hidden max-h-[1200px] md:block" style={{ height: "600px" }}>
				<Image
					src="/loginpageimages/loginimage.svg"
					alt="Travel"
					fill
					className="object-cover brightness-90"
				/>
			</div>

			{/* Right - Form Section */}
			<div className="flex max-w-2xl flex-col justify-center px-10 py-4 pb-12 lg:ml-28">
				<div className="flex max-w-[400px] flex-col items-center justify-center">
					<h2 className="text-4xl font-bold text-green-700">Welcome</h2>
					<p className="mb-4 mt-1 text-gray-600">
						{loginMethod === "mobileOtp"
							? "Login with Mobile OTP"
							: loginMethod === "emailOtp"
								? "Login with Email OTP"
								: "Login with Email and Password"}
					</p>
				</div>

				<form className="max-w-[400px] space-y-5" onSubmit={handleSubmit}>
					{/* Email Field - shown in emailPassword and emailOtp views */}
					{(loginMethod === "emailPassword" || loginMethod === "emailOtp") && (
						<div>
							<label htmlFor="email" className="mb-1 block text-sm">
								Email Id
							</label>
							<div className="flex items-center rounded-[10px] border border-gray-300 px-3 py-0 focus-within:ring-2 focus-within:ring-green-700">
								<div className="relative mr-3 h-5 w-5">
									<Image
										src="/loginpageimages/emailicon.svg"
										alt="email icon"
										fill
										className="object-contain"
									/>
								</div>
								<input
									id="email"
									type="email"
									className="w-full border-none bg-white outline-none focus:outline-none focus:ring-0"
									placeholder="Enter your email"
									value={email}
									onChange={handleEmailChange}
									disabled={loginMethod === "emailOtp" && isOtpSent}
								/>
							</div>
							{errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
						</div>
					)}

					{/* Password Field - shown only in emailPassword view */}
					{loginMethod === "emailPassword" && (
						<div>
							<label htmlFor="password" className="mb-1 block text-sm">
								Password
							</label>
							<div className="flex items-center rounded-[10px] border border-gray-300 px-3 py-0 focus-within:ring-2 focus-within:ring-green-700">
								<div className="relative mr-3 h-5 w-5">
									<Image
										src="/loginpageimages/passwordicon.svg"
										alt="password icon"
										fill
										className="object-contain"
									/>
								</div>
								<input
									id="password"
									type="password"
									className="w-full border-none bg-white outline-none focus:outline-none focus:ring-0"
									placeholder="••••••••"
									value={password}
									onChange={handlePasswordChange}
								/>
							</div>
							<p
								className="mt-1 cursor-pointer text-right text-xs text-gray-500 hover:underline"
								onClick={handleForgotPassword}
							>
								Forgot your password?
							</p>
							{errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
						</div>
					)}

					{/* Mobile Number Field - shown only in mobileOtp view */}
					{loginMethod === "mobileOtp" && (
						<div>
							<label htmlFor="mobile" className="mb-1 block text-sm">
								Mobile Number
							</label>
							<div className="flex items-center rounded-[10px] border border-gray-300 px-3 py-0 focus-within:ring-2 focus-within:ring-green-700">
								<div className="relative mr-3 h-5 w-5">
									<Image
										src="/loginpageimages/mobileicon.svg"
										alt="mobile icon"
										fill
										className="object-contain"
									/>
								</div>
								<input
									id="mobile"
									type="tel"
									className="w-full border-none bg-white outline-none focus:outline-none focus:ring-0"
									placeholder="Enter mobile number"
									value={mobileNumber}
									onChange={handleMobileChange}
									maxLength={10}
									disabled={isOtpSent}
								/>
							</div>
							{errors.mobileNumber && <p className="mt-1 text-xs text-red-500">{errors.mobileNumber}</p>}
						</div>
					)}

					{/* OTP Field - shown after OTP is sent in OTP views */}
					{(loginMethod === "emailOtp" || loginMethod === "mobileOtp") && isOtpSent && (
						<div>
							
							<div className="mb-4 flex justify-center">
								<OtpInput digits={5} />
							</div>
							<div className="flex items-center rounded-[10px] border border-gray-300 px-3 py-0 focus-within:ring-2 focus-within:ring-green-700">
								<div className="relative mr-3 h-5 w-5">
									<Image src="/loginpageimages/otpicon.svg" alt="otp icon" fill className="object-contain" />
								</div>
								<input
									id="otp"
									type="tel"
									className="w-full border-none bg-white outline-none focus:outline-none focus:ring-0"
									placeholder="Enter 6-digit OTP"
									value={otp}
									onChange={handleOtpChange}
									maxLength={6}
								/>
							</div>
							{errors.otp && <p className="mt-1 text-xs text-red-500">{errors.otp}</p>}
							<p className="mt-1 text-right text-xs text-gray-500">
								Didn't receive OTP?{" "}
								<span className="cursor-pointer text-green-700 hover:underline" onClick={handleSendOtp}>
									Resend
								</span>
							</p>
						</div>
					)}

					{/* Action Buttons */}
					<div className="space-y-3">
						{(loginMethod === "emailOtp" || loginMethod === "mobileOtp") && !isOtpSent ? (
							<button
								type="button"
								className="w-full rounded bg-green-700 py-2 text-white shadow transition hover:bg-green-800"
								onClick={handleSendOtp}
							>
								SEND OTP
							</button>
						) : (
							<button
								type="submit"
								className="w-full rounded bg-green-700 py-2 text-white shadow transition hover:bg-green-800"
							>
								{loginMethod === "emailPassword" ? "LOGIN" : "VERIFY OTP"}
							</button>
						)}

						{/* Switch between login methods */}
						{/* {loginMethod === "emailPassword" && (
							<div className="flex space-x-2">
								<button
									type="button"
									className="flex-1 rounded border border-green-700 py-2 text-green-700 transition hover:bg-green-50"
									onClick={switchToEmailOtp}
								>
									Login with Email OTP
								</button>
								<button
									type="button"
									className="flex-1 rounded border border-green-700 py-2 text-green-700 transition hover:bg-green-50"
									onClick={switchToMobileOtp}
								>
									Login with Mobile OTP
								</button>
							</div>
						)} */}

						{loginMethod !== "emailPassword" && (
							<button
								type="button"
								className="w-full rounded border  py-2  transition hover:bg-green-50"
								onClick={switchToEmailPassword}
							>
								go Back
							</button>
						)}
					</div>
				</form>

				{/* OR Divider - only shown in emailPassword view */}
				{loginMethod === "emailPassword" && (
					<>
						<div className="my-2 flex max-w-[400px] items-center">
							<div className="h-px flex-grow bg-gray-300" />
							<span className="mx-2 text-gray-400">OR</span>
							<div className="h-px flex-grow bg-gray-300" />
						</div>

						<p className="mt-6 max-w-[400px] text-center text-sm">
							Login With{" "}
							<span
								className="cursor-pointer font-semibold text-green-700 hover:underline"
								onClick={switchToMobileOtp}
							>
								Mobile OTP
							</span>{" "}
							or{" "}
							<span
								className="cursor-pointer font-semibold text-green-700 hover:underline"
								onClick={switchToEmailOtp}
							>
								Email OTP
							</span>
						</p>
					</>
				)}
			</div>
		</div>
	);
}

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { REGISTER_IMAGE } from "@/assets/imageResources";
// import OtpInput from "@/ui/components/register/OtpInput";

// export function LoginForm() {
// 	const [formValues, setFormValues] = useState({
// 		email: "",
// 		password: "",
// 		mobile: "",
// 	});

// 	const [errors, setErrors] = useState({
// 		email: "",
// 		password: "",
// 		mobile: "",
// 	});

// 	const [message, setMessage] = useState("");
// 	const [showOtpModal, setShowOtpModal] = useState(false);
// 	const [isClient, setIsClient] = useState(false);

// 	useEffect(() => {
// 		setIsClient(true);
// 	}, []);

// 	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		const { name, value } = e.target;
// 		let error = "";

// 		// Mobile number validation
// 		if (name === "mobile") {
// 			if (!/^\d*$/.test(value)) return;
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
// 		// Password validation
// 		else if (name === "password") {
// 			if (value && value.length < 6) {
// 				error = "Password must be at least 6 characters.";
// 			}
// 		}

// 		setFormValues((prev) => ({ ...prev, [name]: value }));
// 		setErrors((prev) => ({ ...prev, [name]: error }));
// 	};

// 	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();

// 		const newErrors = {
// 			email: /\S+@\S+\.\S+/.test(formValues.email) ? "" : "Valid email is required.",
// 			password: formValues.password.length >= 6 ? "" : "Password must be at least 6 characters.",
// 			mobile: /^\d{10}$/.test(formValues.mobile) ? "" : "Valid mobile number is required.",
// 		};

// 		setErrors(newErrors);

// 		const hasErrors = Object.values(newErrors).some((err) => err !== "");
// 		if (hasErrors) {
// 			alert("Please correct the errors before submitting.");
// 			return;
// 		}

// 		setMessage("");
// 		console.log("Login form submitted:", formValues);
// 		alert("Login successful!");
// 	};

// 	const handleVerifyClick = () => {
// 		if (formValues.mobile && !errors.mobile) {
// 			setShowOtpModal(true);
// 		}
// 	};

// 	const handleOtpComplete = (otp: string) => {
// 		console.log("Entered OTP:", otp);
// 		// Add your OTP verification logic here
// 	};

// 	return (
// 		<div className="mx-auto mt-4 w-full max-w-lg shadow-lg">
// 			<form className="rounded border px-8 pb-6 shadow-md" onSubmit={handleSubmit}>
// 				<Image
// 					src={REGISTER_IMAGE}
// 					alt="Login"
// 					width={400}
// 					height={200}
// 					className="mb-6 h-32 w-full object-contain"
// 				/>

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

// 				{/* Password */}
// 				<div className="mb-4">
// 					<input
// 						type="password"
// 						name="password"
// 						value={formValues.password}
// 						onChange={handleChange}
// 						placeholder="Password"
// 						className="w-full rounded border bg-neutral-50 px-4 py-2"
// 					/>
// 					{errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
// 				</div>

// 				{/* Mobile Number */}
// 				<div className="mb-4">
// 					<input
// 						type="text"
// 						name="mobile"
// 						inputMode="numeric"
// 						maxLength={10}
// 						value={formValues.mobile}
// 						onChange={handleChange}
// 						placeholder="Mobile Number"
// 						className="w-full rounded border bg-neutral-50 px-4 py-2"
// 					/>
// 					{errors.mobile && <p className="text-sm text-red-600">{errors.mobile}</p>}
// 				</div>

// 				{/* Verify OTP Button */}
// 				{formValues.mobile && !errors.mobile && (
// 					<div className="mb-4">
// 						<button
// 							type="button"
// 							onClick={handleVerifyClick}
// 							className="w-full rounded-md bg-green-900 px-4 py-2 text-sm font-semibold text-white"
// 						>
// 							Verify OTP
// 						</button>
// 					</div>
// 				)}

// 				{/* OTP Modal */}
// 				{isClient && showOtpModal && (
// 					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
// 						<div className="w-full max-w-md rounded-md bg-white p-6 shadow-lg">
// 							<h3 className="mb-4 text-center text-lg font-semibold text-gray-800">Enter OTP</h3>
// 							<p className="mb-2 text-center text-sm text-gray-600">
// 								Enter the 5-digit OTP sent to your mobile number
// 							</p>

// 							<div className="mb-4 flex justify-center">
// 								<OtpInput digits={5} onComplete={handleOtpComplete} />
// 							</div>

// 							<div className="flex flex-col items-center gap-2">
// 								<button type="button" className="text-sm hover:underline">
// 									Resend OTP
// 								</button>

// 								<button
// 									type="button"
// 									onClick={() => setShowOtpModal(false)}
// 									className="w-full rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
// 								>
// 									Submit OTP
// 								</button>

// 								<button
// 									type="button"
// 									onClick={() => setShowOtpModal(false)}
// 									className="mt-2 text-sm text-gray-500 hover:underline"
// 								>
// 									Cancel
// 								</button>
// 							</div>
// 						</div>
// 					</div>
// 				)}

// 				{/* Message */}
// 				{message && <p className="mb-4 text-center text-sm text-red-600">{message}</p>}

// 				<div className="flex w-full items-center justify-center">
// 					<button
// 						className="w-full rounded bg-[#646A36] px-4 py-2 text-neutral-200 hover:bg-neutral-700"
// 						type="submit"
// 					>
// 						Login
// 					</button>
// 				</div>
// 			</form>
// 		</div>
// 	);
// }
