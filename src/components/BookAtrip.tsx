import Image from 'next/image';

interface PageProps {
	t: {
		title: string;
		subtitle: string;
		list: {
			chooseDestination: {
				title: string;
				description: string;
			};
			makePayment: {
				title: string;
				description: string;
			};
			reachAirport: {
				title: string;
				description: string;
			};
		};
	};
}

const BookAtrip = async ({ t }: PageProps) => {
	return (
		<section
			id='bookAtrip'
			className='container mx-auto px-40 py-10 flex justify-between mt-20'
		>
			<div className='w-[45%]'>
				<h2 className='my-5 text-[#5E6282] font-bold text-lg'>{t.title}</h2>
				<h3 className='text-[#14183E] font-bold text-5xl'>{t.subtitle}</h3>

				<div className='flex flex-col gap-[2.5rem] mt-10'>
					<div className='flex items-center gap-5'>
						<Image
							src='/chooseDestination.svg'
							alt='chooseDestination'
							width={50}
							height={50}
						/>
						<div>
							<h4 className='text-[16px] font-bold text-[#5E6282]'>
								{t.list.chooseDestination.title}
							</h4>
							<p className='text-[#5E6282] text-[16px] font-regular'>
								{t.list.chooseDestination.description}
							</p>
						</div>
					</div>

					<div className='flex items-center gap-5'>
						<Image
							src='/makePayment.svg'
							alt='makePayment'
							width={50}
							height={50}
						/>
						<div>
							<h4 className='text-[16px] font-bold text-[#5E6282]'>
								{t.list.makePayment.title}
							</h4>
							<p className='text-[#5E6282] text-[16px] font-regular'>
								{t.list.makePayment.description}
							</p>
						</div>
					</div>

					<div className='flex items-center gap-5'>
						<Image
							src='/reachAirport.svg'
							alt='reachAirport'
							width={50}
							height={50}
						/>
						<div>
							<h4 className='text-[16px] font-bold text-[#5E6282]'>
								{t.list.reachAirport.title}
							</h4>
							<p className='text-[#5E6282] text-[16px] font-regular'>
								{t.list.reachAirport.description}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='relative w-[50%]'>
				<Image
					src='/TripCard.png'
					alt='Trip Card'
					width={700}
					height={400}
					className='absolute -top-20 -right-20'
				/>
			</div>
		</section>
	);
};

export default BookAtrip;
