"use client";

import { LuPlane } from "react-icons/lu";
import { RiExchangeFundsFill } from "react-icons/ri";
import { AiOutlineGift } from "react-icons/ai";

export default function MissionValues() {
	const values = [
		{
			icon: <LuPlane className="mb-4 text-4xl text-yellow-500" />,
			title: "Free Delivery",
			description: "Free delivery for orders over ₹750 for Pune people",
		},
		{
			icon: <RiExchangeFundsFill className="mb-4 text-4xl text-yellow-500" />,
			title: "Return & Exchange",
			description: "We have 7 days return policy and 100% exchange guarantee",
		},
		{
			icon: <AiOutlineGift className="mb-4 text-4xl text-yellow-500" />,
			title: "Payment Secure",
			description: "We ensure secure payment for your orders",
		},
	];

	return (
		<section className=" px-6 py-4 text-center md:py-8 lg:py-20">
			<div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-1 md:grid-cols-3">
				{values.map((val, index) => (
					<div
						key={index}
						className="cursor-pointer rounded-lg bg-green-50 p-6 shadow-md transition-shadow hover:shadow-lg"
					>
						<div className="flex justify-center"> {val.icon}</div>
						<h3 className="mb-2 text-lg font-semibold text-gray-800">{val.title}</h3>
						<p className="text-sm text-gray-600">{val.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}

// "use client";

// import { FaPlaneDeparture, FaExchangeAlt, FaGift } from "react-icons/fa";

// export default function DeliveryFeatures() {
//   const features = [
// {
//   icon: <FaPlaneDeparture className="text-yellow-500 text-4xl mb-4" />,
//   title: "Free Delivery",
//   description: "Free delivery for orders over ₹750 for Pune people",
// },
// {
//   icon: <FaExchangeAlt className="text-yellow-500 text-4xl mb-4" />,
//   title: "Return & Exchange",
//   description: "We have 7 days return policy and 100% exchange guarantee",
// },
// {
//   icon: <FaGift className="text-yellow-500 text-4xl mb-4" />,
//   title: "Payment Secure",
//   description: "We ensure secure payment for your orders",
// },
//   ];

//   return (
//     <section className="bg-white py-12 px-4">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
//         {features.map((item, index) => (
//           <div key={index}>
//             {item.icon}
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
//             <p className="text-sm text-gray-500">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
