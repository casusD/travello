import { getDictionary } from '@/lib/getDictionary';
import Image from 'next/image';

interface PageProps {
	params: {
		lang: string;
	};
}

const Destinations = async ({ params }: PageProps) => {
	const { lang } = await params;

	const t = await getDictionary(lang);

	return (
		<section
			id='destinations'
			className='relative container mx-auto px-40 py-10 mt-20'
		>
			<Image
				src={'/destinationsBG.svg'}
				alt={'background'}
				className='absolute right-[12%] top-[51%]'
				width={100}
				height={100}
			/>
			<h2 className='my-5 text-center text-[#5E6282] font-bold text-lg'>
				{t.destinations.title}
			</h2>
			<h3 className='text-center text-[#14183E] font-bold text-5xl'>
				{t.destinations.subtitle}
			</h3>

			<div className='flex justify-center gap-10 mt-[4rem]'>
				<div className='w-[315px] h-[457px] rounded-[24px] bg-[url(/rome.png)] bg-[size:150%_73%] bg-no-repeat bg-[position:center_top] relative shadow-lg shadow-black-300/30 bg-white'>
					<div className='absolute bottom-[16%] left-3 flex justify-between w-[290px]'>
						<p className='text-lg text-[#5E6282] font-medium'>
							{t.destinations.list.rome.title}
						</p>
						<p className='text-lg text-[#5E6282] font-medium'>
							{t.destinations.list.rome.price}
						</p>
					</div>
					<p className='absolute bottom-[7%] left-3 flex items-center gap-2 mt-3 text-[#5E6282] text-[16px]'>
						<Image src='/geolocation.svg' alt='star' width={20} height={20} />
						{t.destinations.list.rome.description}
					</p>
				</div>

				<div className='w-[315px] h-[457px] rounded-[24px] bg-[url(/london.png)] bg-[size:150%_73%] bg-no-repeat bg-[position:center_top] relative shadow-lg shadow-black-300/30 bg-white'>
					<div className='absolute bottom-[16%] left-3 flex justify-between w-[290px]'>
						<p className='text-lg text-[#5E6282] font-medium'>
							{t.destinations.list.london.title}
						</p>
						<p className='text-lg text-[#5E6282] font-medium'>
							{t.destinations.list.london.price}
						</p>
					</div>
					<p className='absolute bottom-[7%] left-3 flex items-center gap-2 mt-3 text-[#5E6282] text-[16px]'>
						<Image src='/geolocation.svg' alt='star' width={20} height={20} />
						{t.destinations.list.london.description}
					</p>
				</div>

				<div className='w-[315px] h-[457px] rounded-[24px] bg-[url(/europe.png)] bg-[size:150%_73%] bg-no-repeat bg-[position:center_top] relative shadow-lg shadow-black-300/30 bg-white'>
					<div className='absolute bottom-[16%] left-3 flex justify-between w-[290px]'>
						<p className='text-lg text-[#5E6282] font-medium'>
							{t.destinations.list.europe.title}
						</p>
						<p className='text-lg text-[#5E6282] font-medium'>
							{t.destinations.list.europe.price}
						</p>
					</div>
					<p className='absolute bottom-[7%] left-3 flex items-center gap-2 mt-3 text-[#5E6282] text-[16px]'>
						<Image src='/geolocation.svg' alt='star' width={20} height={20} />
						{t.destinations.list.europe.description}
					</p>
				</div>
			</div>
		</section>
	);
};

export default Destinations;
