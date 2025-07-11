// pages/api/products.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { executeGraphQL } from "@/lib/graphql";
import { ProductListByCategoryDocument } from "@/gql/graphql";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { slug, channel } = req.query;

	if (!slug || !channel) {
		return res.status(400).json({ error: "Missing slug or channel" });
	}

	try {
		const { category } = await executeGraphQL(ProductListByCategoryDocument, {
			variables: {
				slug: String(slug),
				channel: String(channel),
			},
			revalidate: 60,
		});

		return res.status(200).json({ category });
	} catch (error) {
		console.error("API error:", error);
		return res.status(500).json({ error: "Failed to fetch products" });
	}
}
