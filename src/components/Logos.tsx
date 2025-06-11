import Image from 'next/image';

const Logos = () => {
	return (
		<section
			id='logos'
			className='container mx-auto px-40 py-10 mt-10 flex justify-between items-center'
		>
			<Image src='/axon.png' alt='Axon' width={100} height={100} />
			<Image src='/jetstar.png' alt='Jetstar' width={130} height={100} />
			<Image src='/expedia.png' alt='Expedia' width={100} height={100} />
			<Image
				src='/qantas.png'
				alt='Qantas'
				width={100}
				height={100}
				className='w-[100px] h-[30px]'
			/>
			<Image
				src='/alitalia.png'
				alt='Alitalia'
				width={100}
				height={100}
				className='w-[100px] h-[20px]'
			/>
		</section>
	);
};

export default Logos;
