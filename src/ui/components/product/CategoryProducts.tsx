

"use client";

import React from "react";

const CategoryProducts = ({ slug }: { slug: string }) => {
	return (
		<div className="mt-8 text-center text-xl font-semibold text-green-700">
			Products for category: <span className="text-orange-600">{slug}</span>
		</div>
	);
};

export default CategoryProducts;
