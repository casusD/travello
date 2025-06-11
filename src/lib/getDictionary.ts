import en from '@/locales/en.json';
import ru from '@/locales/ru.json';

export const getDictionary = async (lang: string) => {
	switch (lang) {
		case 'en':
			return en;
		case 'ru':
			return ru;
		default:
			return en;
	}
};
