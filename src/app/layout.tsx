import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const montserrat = Montserrat({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Travello',
	description:
		'Travello - travel agency, travel agency website, travel agency template',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning className='bg-white'>
			<body className={`${montserrat.className} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
