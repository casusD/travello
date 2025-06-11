import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://travello.com';
	const lastModified = new Date();

	// Static pages for each language
	const staticRoutes = [
		{
			url: `${baseUrl}/en`,
			lastModified,
			changeFrequency: 'monthly' as const,
			priority: 1,
		},
		{
			url: `${baseUrl}/ru`,
			lastModified,
			changeFrequency: 'monthly' as const,
			priority: 1,
		},
	];

	// You can add dynamic routes here if needed
	// For example, if you have destination detail pages:
	// const destinationRoutes = destinations.map((destination) => ({
	//   url: `${baseUrl}/en/destinations/${destination.slug}`,
	//   lastModified,
	//   changeFrequency: 'weekly' as const,
	//   priority: 0.8,
	// }));

	return [
		{
			url: baseUrl,
			lastModified,
			changeFrequency: 'monthly',
			priority: 1,
		},
		...staticRoutes,
	];
}
