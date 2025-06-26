"use client";

import { useState } from "react";

export const FilterSidebar = () => {
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(0);
	const [sort, setSort] = useState("Popularity");

	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [selectedRatings, setSelectedRatings] = useState<string[]>([]);

	const toggleCategory = (category: string) => {
		setSelectedCategories((prev) =>
			prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
		);
	};

	const toggleRating = (rating: string) => {
		setSelectedRatings((prev) =>
			prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating],
		);
	};

	return (
		<div className="rounded-lg border bg-white p-4">
			<h2 className="mb-4 text-lg font-semibold">Filters</h2>

			<div className="mb-6">
				<h3 className="mb-2 font-medium">Price Range</h3>
				<div className="flex items-center gap-2">
					<input
						type="number"
						placeholder="Min"
						value={min}
						onChange={(e) => setMin(Number(e.target.value))}
						className="w-1/2 rounded border p-1"
					/>
					<span>-</span>
					<input
						type="number"
						placeholder="Max"
						value={max}
						onChange={(e) => setMax(Number(e.target.value))}
						className="w-1/2 rounded border p-1"
					/>
				</div>
			</div>

			<div className="mb-6">
				<label className="mb-2 block font-medium">Sort By</label>
				<select className="w-full rounded border p-2" value={sort} onChange={(e) => setSort(e.target.value)}>
					<option>Popularity</option>
					<option>Price: Low to High</option>
					<option>Price: High to Low</option>
					<option>Rating</option>
				</select>
			</div>

			<div className="mb-6">
				<h3 className="mb-2 font-medium">Categories</h3>
				{[
					"Fresh Vegetables",
					"Fresh Fruits",
					"Dairy & Eggs",
					"Beverages",
					"Snacks",
					"Household",
					"Personal Care",
				].map((cat) => (
					<label key={cat} className="block">
						<input
							type="checkbox"
							className="mr-2"
							checked={selectedCategories.includes(cat)}
							onChange={() => toggleCategory(cat)}
						/>
						{cat}
					</label>
				))}
			</div>

			<div>
				<h3 className="mb-2 font-medium">Ratings</h3>
			{["4★ & Up", "3★ & Up", "2★ & Up", "1★ & Up"].map((rating) => (
  <label key={rating} className="block">
    <input
      type="checkbox"
      className="mr-2"
      checked={selectedRatings.includes(rating)}
      onChange={() => toggleRating(rating)}
    />
    {rating}
  </label>
))}
			</div>
		</div>
	);
};
