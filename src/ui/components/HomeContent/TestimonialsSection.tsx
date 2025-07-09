import TestimonialCard from "./TestimonialCard";

const testimonials = [
	{
		name: "Aarti M.",
		location: "Pune",
		image: "/homepageimages/profile1.svg",
		text: `I recently switched to this Kisan Basket cold-pressed sunflower oil for everyday cooking, and I couldn't be happier. The oil has a light texture, a pleasant natural aroma, and doesn’t overpower the flavor of the food. What I love most is that it’s chemical-free and retains nutrients.`,
	},
	{
		name: "Parekh",
		location: "Pune",
		image: "/homepageimages/profile1.svg",
		text: `I recently switched to this Kisan Basket cold-pressed sunflower oil for everyday cooking, and I couldn't be happier. The oil has a light texture, a pleasant natural aroma, and doesn’t overpower the flavor of the food. What I love most is that it’s chemical-free and retains nutrients.`,
	},
];

const TestimonialsSection = () => {
	return (
		<section className="mt-4 bg-[#D5D7C5] px-4 py-10 md:px-10 lg:px-20 lg:py-24">
			{/* Single column layout for mobile/tablet */}
			<div className="flex flex-col items-center gap-6 md:gap-8 lg:hidden">
				{testimonials.map((testimonial, idx) => (
					<TestimonialCard key={idx} {...testimonial} />
				))}
			</div>
			<div className="mx-auto hidden max-w-7xl grid-cols-1 gap-6 md:grid-cols-1 lg:grid lg:grid-cols-2">
				{testimonials.map((testimonial, idx) => (
					<TestimonialCard key={idx} {...testimonial} />
				))}
			</div>
		</section>
	);
};

export default TestimonialsSection;
