"use client";
import React from "react";

interface CurvedTextProps {
	text: string;
	radius?: number;
}

const CurvedText: React.FC<CurvedTextProps> = ({ text, radius = 50 }) => {
	const characters = text.split("");
	const characterCount = characters.length;

	return (
		<div className="relative mx-auto mt-2 h-[100px] w-[120px]">
			{characters.map((char, i) => {
				const angle = (i / characterCount) * 180 - 90; // Spread from -90° to 90°
				return (
					<span
						key={i}
						className="absolute text-[12px] font-semibold text-black sm:text-[14px]"
						style={{
							left: "50%",
							top: "0%",
							transform: `
								rotate(${angle}deg)
								translateY(${radius}px)
								rotate(${-angle}deg)
							`,
							transformOrigin: "bottom center",
						}}
					>
						{char}
					</span>
				);
			})}
		</div>
	);
};

export default CurvedText;

// "use client";
// import React from "react";

// interface CurvedTextProps {
// 	text: string;
// 	radius?: number;
// }

// const CurvedText: React.FC<CurvedTextProps> = ({ text, radius = 70 }) => {
// 	const characters = text.split("");

// 	return (
// 		<div className="relative mx-auto h-[100px] w-[200px]">
// 			{characters.map((char, i) => {
// 				const angle = (i / characters.length) * 180 - 90;
// 				return (
// 					<span
// 						key={i}
// 						className="absolute text-[14px] font-bold text-black"
// 						style={{
// 							left: "50%",
// 							top: "50%",
// 							transform: `
//                 rotate(${angle}deg)
//                 translate(${radius}px)
//                 rotate(${-angle}deg)
//               `,
// 							transformOrigin: "center",
// 						}}
// 					>
// 						{char}
// 					</span>
// 				);
// 			})}
// 		</div>
// 	);
// };

// export default CurvedText;
