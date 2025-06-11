interface StructuredDataProps {
	lang: string;
}

export default function StructuredData({ lang }: StructuredDataProps) {
	const isRussian = lang === 'ru';

	// Organization structured data
	const organizationData = {
		'@context': 'https://schema.org',
		'@type': 'TravelAgency',
		name: 'Travello',
		description: isRussian
			? 'Туристическое агентство Travello предлагает лучшие путешествия по всему миру'
			: 'Travello travel agency offers the best travel experiences around the world',
		url: 'https://travello.com',
		logo: 'https://travello.com/logo.svg',
		sameAs: [
			'https://facebook.com/travello',
			'https://twitter.com/travello',
			'https://instagram.com/travello',
		],
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'customer service',
			availableLanguage: ['English', 'Russian'],
		},
		areaServed: {
			'@type': 'Country',
			name: ['Italy', 'United Kingdom', 'Europe'],
		},
		serviceType: [
			'Flight Booking',
			'Hotel Booking',
			'Travel Planning',
			'Local Events',
			'Weather Information',
		],
	};

	// Website structured data
	const websiteData = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Travello',
		url: 'https://travello.com',
		potentialAction: {
			'@type': 'SearchAction',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: 'https://travello.com/search?q={search_term_string}',
			},
			'query-input': 'required name=search_term_string',
		},
		inLanguage: [
			{
				'@type': 'Language',
				name: 'English',
				alternateName: 'en',
			},
			{
				'@type': 'Language',
				name: 'Russian',
				alternateName: 'ru',
			},
		],
	};

	// Service structured data
	const serviceData = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: isRussian
			? 'Услуги путешествий Travello'
			: 'Travello Travel Services',
		provider: {
			'@type': 'TravelAgency',
			name: 'Travello',
		},
		serviceType: 'Travel Planning',
		description: isRussian
			? 'Планирование путешествий, бронирование рейсов, отелей и организация местных мероприятий'
			: 'Travel planning, flight booking, hotel reservations, and local events organization',
		areaServed: 'Worldwide',
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: isRussian ? 'Туристические пакеты' : 'Travel Packages',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Trip',
						name: 'Rome, Italy',
						description: '10 Days Trip',
					},
					price: '5420',
					priceCurrency: 'USD',
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Trip',
						name: 'London, UK',
						description: '12 Days Trip',
					},
					price: '4200',
					priceCurrency: 'USD',
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Trip',
						name: 'Full Europe',
						description: '28 Days Trip',
					},
					price: '15000',
					priceCurrency: 'USD',
				},
			],
		},
	};

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(organizationData),
				}}
			/>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(websiteData),
				}}
			/>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(serviceData),
				}}
			/>
		</>
	);
}
