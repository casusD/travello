import BookAtrip from '@/components/BookAtrip';
import Contact from '@/components/Contact';
import Destinations from '@/components/Destinations';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import Services from '@/components/Services';
import StructuredData from '@/components/StructuredData';
import Testimonials from '@/components/Testimonials';
import { getDictionary } from '@/lib/getDictionary';
import { Metadata } from 'next';

interface PageProps {
	params: {
		lang: string;
	};
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { lang } = await params;

	const isRussian = lang === 'ru';
	const locale = isRussian ? 'ru_RU' : 'en_US';
	const baseUrl = 'https://travello.com';

	return {
		title: isRussian
			? 'Travello - Лучшие туристические направления по всему миру'
			: 'Travello - Best Travel Destinations Around the World',
		description: isRussian
			? 'Откройте для себя удивительные туристические направления с Travello. Забронируйте поездку мечты с лучшими рейсами, отелями и местными событиями.'
			: 'Discover amazing travel destinations with Travello. Book your dream trip with best flights, hotels and local events.',
		keywords: isRussian
			? [
					'туристическое агентство',
					'туристические направления',
					'бронирование рейсов',
					'бронирование отелей',
					'туристические пакеты',
					'путешествия',
					'туризм',
					'отдых',
			  ]
			: [
					'travel agency',
					'travel destinations',
					'book flights',
					'hotel booking',
					'vacation packages',
					'travel deals',
					'tourism',
					'holidays',
			  ],
		openGraph: {
			title: isRussian
				? 'Travello - Лучшие туристические направления по всему миру'
				: 'Travello - Best Travel Destinations Around the World',
			description: isRussian
				? 'Откройте для себя удивительные туристические направления с Travello. Забронируйте поездку мечты с лучшими рейсами, отелями и местными событиями.'
				: 'Discover amazing travel destinations with Travello. Book your dream trip with best flights, hotels and local events.',
			url: `${baseUrl}/${lang}`,
			locale: locale,
			alternateLocale: isRussian ? ['en_US'] : ['ru_RU'],
			images: [
				{
					url: '/og-image.jpg',
					width: 1200,
					height: 630,
					alt: isRussian
						? 'Travello - Туристическое агентство'
						: 'Travello - Travel Agency',
				},
			],
		},
		twitter: {
			title: isRussian
				? 'Travello - Лучшие туристические направления по всему миру'
				: 'Travello - Best Travel Destinations Around the World',
			description: isRussian
				? 'Откройте для себя удивительные туристические направления с Travello.'
				: 'Discover amazing travel destinations with Travello.',
		},
		alternates: {
			canonical: `${baseUrl}/${lang}`,
			languages: {
				en: `${baseUrl}/en`,
				ru: `${baseUrl}/ru`,
				'x-default': `${baseUrl}/en`,
			},
		},
	};
}

export default async function Home({ params }: PageProps) {
	const { lang } = await params;

	const t = await getDictionary(lang);

	return (
		<>
			<StructuredData lang={lang} />
			<Header params={params} />
			<main className='min-h-screen text-gray-900 dark:text-gray-100'>
				<Hero params={params} />
				<Services params={params} />
				<Destinations params={params} />
				<BookAtrip params={params} />
				<Testimonials t={t.testimonials} />
				<Logos />
				<Contact params={params} />
				<Footer params={params} />
			</main>
		</>
	);
}
