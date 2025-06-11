'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

type Language = {
	code: string;
	name: string;
	flag: string;
};

const languages: Language[] = [
	{ code: 'en', name: 'English', flag: '🇺🇸' },
	{ code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

interface LanguageSwitcherProps {
	currentLang: string;
	dictionary: {
		switch: string;
		english: string;
		russian: string;
	};
}

export default function LanguageSwitcher({
	currentLang,
	dictionary,
}: LanguageSwitcherProps) {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const currentLanguage =
		languages.find(lang => lang.code === currentLang) || languages[0];

	const handleLanguageChange = (langCode: string) => {
		const pathWithoutLang =
			pathname.replace(new RegExp(`^/${currentLang}`), '') || '/';
		const newPath = `/${langCode}${
			pathWithoutLang === '/' ? '' : pathWithoutLang
		}`;

		router.push(newPath);
		setIsOpen(false);
	};

	return (
		<div className='relative'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='flex items-center gap-2 p-2 px-3 rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200'
				aria-label={dictionary.switch}
			>
				<span className='font-medium'>
					{currentLanguage.code.toUpperCase()}
				</span>
				<svg
					className={`w-4 h-4 transition-transform duration-200 ${
						isOpen ? 'rotate-180' : ''
					}`}
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M19 9l-7 7-7-7'
					/>
				</svg>
			</button>

			{isOpen && (
				<div className='absolute top-full right-0 mt-1 w-38 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-1000'>
					{languages.map(language => (
						<button
							key={language.code}
							onClick={() => handleLanguageChange(language.code)}
							className={`z-1000 w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg ${
								currentLang === language.code
									? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
									: 'text-gray-700 dark:text-gray-300'
							}`}
						>
							<span className='font-medium'>{language.name}</span>
							{currentLang === language.code && (
								<svg
									className='w-4 h-4 ml-auto'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path
										fillRule='evenodd'
										d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							)}
						</button>
					))}
				</div>
			)}

			{/* Overlay для закрытия меню при клике вне */}
			{/* {isOpen && (
				<div className='fixed inset-0 z-10' onClick={() => setIsOpen(false)} />
			)} */}
		</div>
	);
}
