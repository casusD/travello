export const seoConfig = {
	defaultTitle: 'Travello - Best Travel Destinations Around the World',
	titleTemplate: '%s | Travello',
	defaultDescription:
		'Discover amazing travel destinations with Travello. Book your dream trip with best flights, hotels and local events.',
	siteUrl: 'https://travello.com',
	socialHandle: '@travello',
	supportedLanguages: ['en', 'ru'],
	defaultLanguage: 'en',
};

export const getCanonicalUrl = (path: string, lang?: string): string => {
	const cleanPath = path.startsWith('/') ? path.slice(1) : path;
	const langPrefix =
		lang && lang !== seoConfig.defaultLanguage ? `/${lang}` : '';
	return `${seoConfig.siteUrl}${langPrefix}${cleanPath ? `/${cleanPath}` : ''}`;
};

export const getAlternateUrls = (path: string) => {
	const alternates: Record<string, string> = {};

	seoConfig.supportedLanguages.forEach(lang => {
		alternates[lang] = getCanonicalUrl(path, lang);
	});

	alternates['x-default'] = getCanonicalUrl(path, seoConfig.defaultLanguage);

	return alternates;
};

export const generateHreflang = (path: string) => {
	return seoConfig.supportedLanguages.map(lang => ({
		hreflang: lang,
		href: getCanonicalUrl(path, lang),
	}));
};

// Helper function to get SEO-friendly page titles
export const getPageTitle = (pageTitle: string, lang: string): string => {
	const isRussian = lang === 'ru';

	const pageTitles: Record<string, { en: string; ru: string }> = {
		home: {
			en: 'Best Travel Destinations Around the World',
			ru: 'Лучшие туристические направления по всему миру',
		},
		destinations: {
			en: 'Top Travel Destinations',
			ru: 'Лучшие туристические направления',
		},
		services: {
			en: 'Travel Services & Planning',
			ru: 'Туристические услуги и планирование',
		},
		contact: {
			en: 'Contact Us',
			ru: 'Связаться с нами',
		},
	};

	const page = pageTitles[pageTitle];
	return page ? (isRussian ? page.ru : page.en) : pageTitle;
};

// Helper function to get SEO-friendly descriptions
export const getPageDescription = (pageKey: string, lang: string): string => {
	const isRussian = lang === 'ru';

	const descriptions: Record<string, { en: string; ru: string }> = {
		home: {
			en: 'Discover amazing travel destinations with Travello. Book your dream trip with best flights, hotels and local events. Travel, enjoy and live a new and full life.',
			ru: 'Откройте для себя удивительные туристические направления с Travello. Забронируйте поездку мечты с лучшими рейсами, отелями и местными событиями.',
		},
		destinations: {
			en: 'Explore our top travel destinations including Rome, London, and Full Europe packages. Find the perfect trip for your next adventure.',
			ru: 'Исследуйте наши лучшие туристические направления, включая Рим, Лондон и полные европейские пакеты. Найдите идеальную поездку для вашего следующего приключения.',
		},
		services: {
			en: 'Professional travel planning services including weather calculation, flight booking, local events, and customized travel packages.',
			ru: 'Профессиональные услуги планирования путешествий, включая расчет погоды, бронирование рейсов, местные события и индивидуальные туристические пакеты.',
		},
	};

	const desc = descriptions[pageKey];
	return desc ? (isRussian ? desc.ru : desc.en) : seoConfig.defaultDescription;
};
