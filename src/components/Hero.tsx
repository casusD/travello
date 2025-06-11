import Image from 'next/image';

interface PageProps {
	t: {
		subtitle: string;
		title: string;
		description: string;
		button: string;
		demo: string;
	};
}

const Hero = async ({ t }: PageProps) => {
	return (
		<section
			id='hero'
			className='container mx-auto flex justify-between items-center px-40 py-10'
		>
			<div className='w-1/2 flex flex-col gap-5'>
				<h1 className='text-[#DF6951] font-bold text-xl'>{t.subtitle}</h1>
				<h2 className='relative w-[700px] text-[#181E4B] text-[84px] leading-[89px] font-bold z-20'>
					<span className='relative z-10'>{t.title}</span>
					<Image
						src='/heroUnderline.svg'
						alt='hero-image'
						width={370}
						height={100}
						className='absolute top-20 right-12 z-0'
					/>
				</h2>
				<p className='text-md text-[#5E6282] w-[470px] my-5'>{t.description}</p>
				<div className='flex items-center gap-8'>
					<button className='bg-[#F2994A] text-white px-4 py-4 rounded-lg shadow-lg shadow-[#F2994A]/50'>
						{t.button}
					</button>
					<div className='flex items-center gap-2'>
						<div className='cursor-pointer w-[50px] h-[50px] bg-[#DF6951] rounded-full flex items-center justify-center shadow-lg shadow-[#DF6951]/50'>
							<svg width='30' height='30' viewBox='0 0 100 100'>
								<polygon points='30,20 80,50 30,80' fill='white' />
							</svg>
						</div>
						<span className='cursor-pointer text-[#686D77]'>{t.demo}</span>
					</div>
				</div>
			</div>
			<Image
				src='/travelGirl.svg'
				alt='hero-image'
				width={750}
				height={800}
				className='relative -ml-12 z-10'
			/>
		</section>
	);
};

export default Hero;
