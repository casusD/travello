import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://travello-seven.vercel.app';
	const languages = ['en', 'ru'];

	// Generate URLs for each language
	const languageUrls = languages.map(lang => ({
		url: `${baseUrl}/${lang}`,
		lastModified: new Date(),
		changeFrequency: 'weekly' as const,
		priority: 0.9,
	}));

	return [
		// Main page redirect
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		// Language-specific pages
		...languageUrls,
		// Add more pages as needed
		// Example additional pages:
		// {
		//   url: `${baseUrl}/en/destinations`,
		//   lastModified: new Date(),
		//   changeFrequency: 'weekly',
		//   priority: 0.8,
		// },
		// {
		//   url: `${baseUrl}/ru/destinations`,
		//   lastModified: new Date(),
		//   changeFrequency: 'weekly',
		//   priority: 0.8,
		// },
	];
}
