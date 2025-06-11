import Image from 'next/image';

interface PageProps {
	t: {
		title: string;
		subtitle: string;
		category: {
			calculatedWeather: {
				title: string;
				description: string;
			};
			bestFlights: {
				title: string;
				description: string;
			};
			localEvents: {
				title: string;
				description: string;
			};
			customization: {
				title: string;
				description: string;
			};
		};
	};
}

const Services = async ({ t }: PageProps) => {
	return (
		<section id='services' className='relative container mx-auto px-40 py-10'>
			<h2 className='my-5 text-center text-[#5E6282] font-bold text-lg'>
				{t.title}
			</h2>
			<h3 className='text-center text-[#14183E] font-bold text-5xl'>
				{t.subtitle}
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
						{t.category.calculatedWeather.title}
					</h4>
					<p className='text-center w-[181px] text-[16px] text-[#5E6282]'>
						{t.category.calculatedWeather.description}
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
						{t.category.bestFlights.title}
					</h4>
					<p className='text-center w-[181px] text-[16px] text-[#5E6282]'>
						{t.category.bestFlights.description}
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
						{t.category.localEvents.title}
					</h4>
					<p className='text-center w-[181px] text-[16px] text-[#5E6282]'>
						{t.category.localEvents.description}
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
						{t.category.customization.title}
					</h4>
					<p className='text-center w-[181px] text-[16px] text-[#5E6282]'>
						{t.category.customization.description}
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
