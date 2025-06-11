'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type Props = {
	dictionary: {
		light: string;
		dark: string;
	};
};

export default function ThemeToggle({ dictionary }: Props) {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return (
			<div className='p-3 rounded-lg bg-gray-200 animate-pulse'>
				<div className='w-24 h-6 bg-gray-300 rounded'></div>
			</div>
		);
	}

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<button
			onClick={toggleTheme}
			className='flex items-center gap-2 p-3 px-5 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg border border-gray-300 dark:border-gray-600'
			aria-label={theme === 'dark' ? dictionary.light : dictionary.dark}
		>
			<span className='text-lg'>{theme === 'dark' ? '☀️' : '🌙'}</span>
			<span>{theme === 'dark' ? dictionary.light : dictionary.dark}</span>
		</button>
	);
}
