import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const montserrat = Montserrat({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		default: 'Travello - Best Travel Agency | Book Your Dream Trip',
		template: '%s | Travello - Best Travel Agency',
	},
	description:
		'Travello - Premium travel agency offering the best destinations worldwide. Book your dream trip with expert guidance, best flights, hotels, and customized travel experiences.',
	keywords: [
		'travel agency',
		'best destinations',
		'flights booking',
		'hotels',
		'travel packages',
		'vacation planning',
		'trip booking',
		'travel services',
	],
	authors: [{ name: 'Travello Team' }],
	creator: 'Travello',
	publisher: 'Travello',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://travello-seven.vercel.app'),
	alternates: {
		canonical: 'https://travello-seven.vercel.app',
		languages: {
			en: 'https://travello-seven.vercel.app/en',
			ru: 'https://travello-seven.vercel.app/ru',
		},
	},
	openGraph: {
		title: 'Travello - Best Travel Agency | Book Your Dream Trip',
		description:
			'Premium travel agency offering the best destinations worldwide. Book your dream trip with expert guidance and customized travel experiences.',
		url: 'https://travello-seven.vercel.app',
		siteName: 'Travello',
		images: [
			{
				url: 'https://travello-seven.vercel.app/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Travello - Best Travel Destinations Around The World',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Travello - Best Travel Agency | Book Your Dream Trip',
		description:
			'Premium travel agency offering the best destinations worldwide. Book your dream trip with expert guidance.',
		images: ['https://travello-seven.vercel.app/og-image.jpg'],
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
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning className='bg-white'>
			<head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
			</head>
			<body className={`${montserrat.className} antialiased text-gray-900`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
