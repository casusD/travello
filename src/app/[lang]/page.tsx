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
	params: Promise<{
		lang: string;
	}>;
}

export default async function Home({ params }: PageProps) {
	const { lang } = await params;

	const t = await getDictionary(lang);

	return (
		<>
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
