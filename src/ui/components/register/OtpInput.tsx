"use client";

import { useState, useRef, useEffect } from "react";

type OtpInputProps = {
	digits?: number;
	onComplete?: (otp: string) => void;
};

export default function OtpInput({ digits = 5, onComplete }: OtpInputProps) {
	const [inputArr, setInputArr] = useState<string[]>(new Array(digits).fill(""));
	const refArr = useRef<HTMLInputElement[]>([]);

	useEffect(() => {
		refArr.current[0]?.focus();
	}, []);

	const handleChange = (value: string, index: number) => {
		if (isNaN(Number(value))) return;

		const trimmed = value.trim().slice(-1); // Only take the last digit
		const newArr = [...inputArr];
		newArr[index] = trimmed;
		setInputArr(newArr);

		if (trimmed && index < digits - 1) {
			refArr.current[index + 1]?.focus();
		}

		if (trimmed && index === digits - 1 && onComplete) {
			onComplete(newArr.join(""));
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
		if (e.key === "Backspace" && !inputArr[index] && index > 0) {
			refArr.current[index - 1]?.focus();
		}
	};

	return (
		<div className="flex flex-col items-center gap-4">
			<h1 className="text-2xl font-semibold text-gray-800">Validate OTP</h1>
			<div className="flex gap-3">
				{inputArr.map((value, index) => (
					<input
						key={index}
						type="text"
						inputMode="numeric"
						maxLength={1}
						value={value}
						ref={(el) => {
							if (el) refArr.current[index] = el;
						}}
						onChange={(e) => handleChange(e.target.value, index)}
						onKeyDown={(e) => handleKeyDown(e, index)}
						className="h-12 w-12 rounded border border-gray-300 text-center text-xl font-medium focus:border-green-700 focus:outline-none"
					/>
				))}
			</div>
		</div>
	);
}
