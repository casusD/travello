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

interface PageProps {
	params: {
		lang: string;
	};
}

export default async function Home({ params }: PageProps) {
	const { lang } = await params;

	const t = await getDictionary(lang);

	return (
		<>
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
