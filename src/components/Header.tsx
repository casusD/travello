import { getDictionary } from '@/lib/getDictionary';
import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

interface PageProps {
	params: Promise<{
		lang: string;
	}>;
}

const Header = async ({ params }: PageProps) => {
	const { lang } = await params;
	const t = await getDictionary(lang);

	return (
		<header className='relative px-6 lg:px-40 container mx-auto flex justify-between items-center p-4 bg-white'>
			<Image
				src='/heroBG.svg'
				alt='hero-image'
				width={700}
				height={800}
				className='absolute top-0 right-0 z-0'
			/>
			<Link href={`/${lang}`}>
				<Image
					src='/logo.svg'
					alt='logo'
					width={180}
					height={100}
					className='cursor-pointer'
				/>
			</Link>

			<nav className='hidden lg:flex gap-8 xl:gap-14 text-lg items-center z-20'>
				<Link
					href={`/${lang}#destinations`}
					className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
				>
					{t.header.desitnations}
				</Link>
				<Link
					href={`/${lang}`}
					className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
				>
					{t.header.hotels}
				</Link>
				<Link
					href={`/${lang}`}
					className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
				>
					{t.header.flights}
				</Link>
				<Link
					href={`/${lang}#bookAtrip`}
					className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
				>
					{t.header.bookings}
				</Link>
				<Link
					href={`/${lang}`}
					className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
				>
					{t.header.login}
				</Link>
				<Link
					href={`/${lang}`}
					className='hover:text-white dark:hover:text-blue-400 transition-colors duration-20 text-black px-4 py-2 rounded-lg hover:bg-blue-700 border border-black hover:border-white'
				>
					{t.header.signup}
				</Link>
				<div className='hidden lg:flex items-center gap-4 z-20'>
					{/* <ThemeToggle dictionary={t.theme} /> */}
					<LanguageSwitcher currentLang={lang} dictionary={t.language} />
				</div>
			</nav>
		</header>
	);
};

export default Header;
