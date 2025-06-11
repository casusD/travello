import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function RootPage() {
	// Get the accept-language header to determine user's preferred language
	const headersList = await headers();
	const acceptLanguage = headersList.get('accept-language') || '';

	// Determine language based on user preference or default to English
	const isRussianPreferred = acceptLanguage.includes('ru');
	const defaultLanguage = isRussianPreferred ? 'ru' : 'en';

	// Redirect to the appropriate language page
	redirect(`/${defaultLanguage}`);
}
