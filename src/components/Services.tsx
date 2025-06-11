import { getDictionary } from '@/lib/getDictionary';
import Image from 'next/image';

interface PageProps {
	params: {
		lang: string;
	};
}

const Services = async ({ params }: PageProps) => {
	const { lang } = await params;

	const t = await getDictionary(lang);
	return (
		<section id='services' className='relative container mx-auto px-40 py-10'>
			<h2 className='my-5 text-center text-[#5E6282] font-bold text-lg'>
				{t.services.title}
			</h2>
			<h3 className='text-center text-[#14183E] font-bold text-5xl'>
				{t.services.subtitle}
			</h3>

			<div className='flex justify-between mt-20'>
				<div className='flex flex-col gap-5 w-[267px] h-[314px] justify-items-center items-center py-10 rounded-[36px]'>
					<Image
						src='/antenna.svg'
						alt='Calculated Weather'
						width={100}
						height={100}
						className='w-[100px] h-[84px]'
					/>
					<h4 className='text-[#1E1D4C] font-semibold text-xl mt-3'>
						{t.services.category.calculatedWeather.title}
					</h4>
					<p className='text-center w-[181px] text-[16px] text-[#5E6282]'>
						{t.services.category.calculatedWeather.description}
					</p>
				</div>

				<div className='flex flex-col gap-5 w-[267px] h-[314px] justify-items-center items-center py-10 rounded-[36px] shadow-lg shadow-black-300/30 z-10 bg-white'>
					<Image
						src='/plane.svg'
						alt='Calculated Weather'
						width={200}
						height={100}
						className='w-[100px] h-[84px]'
					/>
					<h4 className='text-[#1E1D4C] font-semibold text-xl mt-3'>
						{t.services.category.bestFlights.title}
					</h4>
					<p className='text-center w-[181px] text-[16px] text-[#5E6282]'>
						{t.services.category.bestFlights.description}
					</p>
				</div>

				<div className='flex flex-col gap-5 w-[267px] h-[314px] justify-items-center items-center py-10 rounded-[36px]'>
					<Image
						src='/micro.svg'
						alt='Calculated Weather'
						width={100}
						height={100}
						className='w-[100px] h-[84px]'
					/>
					<h4 className='text-[#1E1D4C] font-semibold text-xl mt-3'>
						{t.services.category.localEvents.title}
					</h4>
					<p className='text-center w-[181px] text-[16px] text-[#5E6282]'>
						{t.services.category.localEvents.description}
					</p>
				</div>

				<div className='flex flex-col gap-5 w-[267px] h-[314px] justify-items-center items-center py-10 rounded-[36px]'>
					<Image
						src='/bolt.svg'
						alt='Calculated Weather'
						width={100}
						height={100}
						className='w-[100px] h-[84px]'
					/>
					<h4 className='text-[#1E1D4C] font-semibold text-xl mt-3'>
						{t.services.category.customization.title}
					</h4>
					<p className='text-center w-[181px] text-[16px] text-[#5E6282]'>
						{t.services.category.customization.description}
					</p>
				</div>
			</div>

			<Image
				src='/RectangleBG.svg'
				alt='RectangleBG'
				width={100}
				height={100}
				className='absolute bottom-2 left-[28.5%] h-auto z-0'
			/>
			<Image
				src='/servicesBG.svg'
				alt='RectangleBG'
				width={130}
				height={100}
				className='absolute top-[65px] right-10 h-auto z-0'
			/>
		</section>
	);
};

export default Services;
