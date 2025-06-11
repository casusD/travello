import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const montserrat = Montserrat({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		default: 'Travello - Best Travel Destinations Around the World',
		template: '%s | Travello',
	},
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 5,
	},
	description:
		'Discover amazing travel destinations with Travello. Book your dream trip with best flights, hotels and local events. Travel, enjoy and live a new and full life.',
	keywords: [
		'travel agency',
		'travel destinations',
		'book flights',
		'hotel booking',
		'vacation packages',
		'travel deals',
		'best destinations',
		'travel planning',
		'tourism',
		'holidays',
	],
	authors: [{ name: 'Travello Team' }],
	creator: 'Travello',
	publisher: 'Travello',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://travello.com'),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en',
			'ru-RU': '/ru',
		},
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://travello.com',
		title: 'Travello - Best Travel Destinations Around the World',
		description:
			'Discover amazing travel destinations with Travello. Book your dream trip with best flights, hotels and local events.',
		siteName: 'Travello',
		images: [
			{
				url: '/travelGirl.svg',
				width: 1000,
				height: 1000,
				alt: 'Travello - Travel Agency',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Travello - Best Travel Destinations Around the World',
		description:
			'Discover amazing travel destinations with Travello. Book your dream trip with best flights, hotels and local events.',
		images: ['/twitter-image.jpg'],
		creator: '@travello',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'your-google-verification-code',
		yandex: 'your-yandex-verification-code',
		yahoo: 'your-yahoo-verification-code',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
			className='bg-white dark:bg-gray-900'
		>
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
				<link rel='manifest' href='/manifest.json' />
				<meta
					name='theme-color'
					content='#ffffff'
					media='(prefers-color-scheme: light)'
				/>
				<meta
					name='theme-color'
					content='#111827'
					media='(prefers-color-scheme: dark)'
				/>
			</head>
			<body
				className={`${montserrat.className} antialiased text-gray-900 dark:text-gray-100`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
