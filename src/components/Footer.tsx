import Image from 'next/image';

interface PageProps {
	t: {
		description: string;
		company: {
			title: string;
			about: string;
			careers: string;
			mobile: string;
		};
		contact: {
			title: string;
			help: string;
			press: string;
			affilates: string;
		};
		more: {
			title: string;
			airlinefees: string;
			airline: string;
			lowfaretips: string;
		};
		discover: string;
	};
}

const Footer = async ({ t }: PageProps) => {
	return (
		<footer className='container mx-auto mt-[7%] mb-10 px-20'>
			<div className='flex justify-around'>
				<div className='flex flex-col gap-5 w-[230px]'>
					<Image src='/logo.svg' alt='logo' width={200} height={100} />
					<p className='text-[13px] text-[#5E6282] mt-5'>{t.description}</p>
				</div>

				<div className='flex flex-col gap-1 mt-3'>
					<h2 className='mb-5 text-[21px] font-bold'>{t.company.title}</h2>
					<p className='text-[18px] text-[#5E6282]'>{t.company.about}</p>
					<p className='text-[18px] text-[#5E6282]'>{t.company.careers}</p>
					<p className='text-[18px] text-[#5E6282]'>{t.company.mobile}</p>
				</div>

				<div className='flex flex-col gap-1 mt-3'>
					<h2 className='mb-5 text-[21px] font-bold'>{t.contact.title}</h2>
					<p className='text-[18px] text-[#5E6282]'>{t.contact.help}</p>
					<p className='text-[18px] text-[#5E6282]'>{t.contact.press}</p>
					<p className='text-[18px] text-[#5E6282]'>{t.contact.affilates}</p>
				</div>

				<div className='flex flex-col gap-1 mt-3'>
					<h2 className='mb-5 text-[21px] font-bold'>{t.more.title}</h2>
					<p className='text-[18px] text-[#5E6282]'>{t.more.airlinefees}</p>
					<p className='text-[18px] text-[#5E6282]'>{t.more.airline}</p>
					<p className='text-[18px] text-[#5E6282]'>{t.more.lowfaretips}</p>
				</div>

				<div>
					<div className='flex gap-0'>
						<Image
							src='/facebook.svg'
							alt='facebook'
							width={70}
							height={70}
							className='cursor-pointer'
						/>
						<Image
							src='/instagram.svg'
							alt='instagram'
							width={70}
							height={70}
							className='cursor-pointer'
						/>
						<Image
							src='/twitter.svg'
							alt='twitter'
							width={70}
							height={70}
							className='cursor-pointer'
						/>
					</div>
					<p className='text-[20px] text-[#5E6282] mt-3 ml-5'>{t.discover}</p>
					<div className='flex gap-2 mt-4 ml-3'>
						<Image
							src='/Google Play.svg'
							alt='googleplay'
							width={100}
							height={100}
							className='cursor-pointer'
						/>
						<Image
							src='/Play Store.svg'
							alt='appstore'
							width={100}
							height={100}
							className='cursor-pointer'
						/>
					</div>
				</div>
			</div>

			<p className='text-center text-sm text-[#5E6282] mt-[4rem]'>
				All rights reserved@jadoo.co
			</p>
		</footer>
	);
};

export default Footer;
