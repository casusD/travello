import BookAtrip from '@/components/BookAtrip';
import Contact from '@/components/Contact';
import Destinations from '@/components/Destinations';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import { getDictionary } from '@/lib/getDictionary';
import { Metadata } from 'next';

interface PageProps {
	params: Promise<{
		lang: string;
	}>;
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { lang } = await params;

	const isRussian = lang === 'ru';

	return {
		title: isRussian
			? 'Travello - Лучшее туристическое агентство | Забронируйте поездку мечты'
			: 'Travello - Best Travel Agency | Book Your Dream Trip',
		description: isRussian
			? 'Travello - Премиальное туристическое агентство, предлагающее лучшие направления по всему миру. Забронируйте поездку своей мечты с экспертными рекомендациями.'
			: 'Travello - Premium travel agency offering the best destinations worldwide. Book your dream trip with expert guidance, best flights, hotels, and customized travel experiences.',
		keywords: isRussian
			? [
					'туристическое агентство',
					'лучшие направления',
					'бронирование авиабилетов',
					'отели',
					'туристические пакеты',
					'планирование отпуска',
					'бронирование поездок',
			  ]
			: [
					'travel agency',
					'best destinations',
					'flights booking',
					'hotels',
					'travel packages',
					'vacation planning',
					'trip booking',
					'travel services',
			  ],
		openGraph: {
			title: isRussian
				? 'Travello - Лучшее туристическое агентство | Забронируйте поездку мечты'
				: 'Travello - Best Travel Agency | Book Your Dream Trip',
			description: isRussian
				? 'Премиальное туристическое агентство, предлагающее лучшие направления по всему миру. Забронируйте поездку своей мечты.'
				: 'Premium travel agency offering the best destinations worldwide. Book your dream trip with expert guidance.',
			url: `https://travello-seven.vercel.app/${lang}`,
			locale: isRussian ? 'ru_RU' : 'en_US',
		},
		twitter: {
			title: isRussian
				? 'Travello - Лучшее туристическое агентство'
				: 'Travello - Best Travel Agency',
			description: isRussian
				? 'Премиальное туристическое агентство, предлагающее лучшие направления по всему миру.'
				: 'Premium travel agency offering the best destinations worldwide.',
		},
		alternates: {
			canonical: `https://travello-seven.vercel.app/${lang}`,
			languages: {
				en: 'https://travello-seven.vercel.app/en',
				ru: 'https://travello-seven.vercel.app/ru',
			},
		},
	};
}

export default async function Home({ params }: PageProps) {
	const { lang } = await params;

	const t = await getDictionary(lang);

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'TravelAgency',
		name: 'Travello',
		description:
			lang === 'ru'
				? 'Премиальное туристическое агентство, предлагающее лучшие направления по всему миру'
				: 'Premium travel agency offering the best destinations worldwide',
		url: `https://travello-seven.vercel.app/${lang}`,
		logo: 'https://travello-seven.vercel.app/logo.svg',
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'customer service',
			availableLanguage: ['English', 'Russian'],
		},
		sameAs: [
			'https://facebook.com/travello',
			'https://instagram.com/travello',
			'https://twitter.com/travello',
		],
		service: [
			{
				'@type': 'Service',
				name: lang === 'ru' ? 'Бронирование перелетов' : 'Flight Booking',
				description:
					lang === 'ru'
						? 'Лучшие предложения на авиабилеты'
						: 'Best flight deals worldwide',
			},
			{
				'@type': 'Service',
				name: lang === 'ru' ? 'Бронирование отелей' : 'Hotel Booking',
				description:
					lang === 'ru'
						? 'Премиальные отели по всему миру'
						: 'Premium hotels worldwide',
			},
			{
				'@type': 'Service',
				name: lang === 'ru' ? 'Туристические пакеты' : 'Travel Packages',
				description:
					lang === 'ru'
						? 'Персонализированные туристические пакеты'
						: 'Customized travel packages',
			},
		],
		areaServed: {
			'@type': 'Place',
			name: 'Worldwide',
		},
	};

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Header params={params} />
			<main className='min-h-screen'>
				<Hero t={t.hero} />
				<Services t={t.services} />
				<Destinations t={t.destinations} />
				<BookAtrip t={t.bookAtrip} />
				<Testimonials t={t.testimonials} />
				<Logos />
				<Contact t={t.contact} />
				<Footer t={t.footer} />
			</main>
		</>
	);
}
