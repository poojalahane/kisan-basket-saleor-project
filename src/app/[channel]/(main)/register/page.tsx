import { Suspense } from "react";
import { Loader } from "@/ui/atoms/Loader";
import { RegisterForm } from "@/ui/components/register/RegisterForm";

export default function RegisterPage() {
	return (
		<Suspense fallback={<Loader />}>
			<section className="mx-auto max-w-7xl p-8">
				<RegisterForm />
			</section>
		</Suspense>
	);
}
