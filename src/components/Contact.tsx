import Image from 'next/image';

interface PageProps {
	t: {
		title: string;
		email: string;
		button: string;
	};
}

const Contact = async ({ t }: PageProps) => {
	return (
		<section
			id='contact'
			className='relative container mx-auto mt-5 py-20 bg-[url("/contactDecore.svg")] bg-[size:30%_35%] bg-no-repeat bg-[position:106.5%_100%]'
		>
			<div className='w-[1170px] h-[407px] bg-[#dfd7f95f] mx-auto rounded-tl-[129px] rounded-[20px] py-20 bg-[url("/contactBG.svg")] bg-cover bg-center'>
				<h2 className='text-[33px] w-[1000px] mx-auto text-[#5e6282] font-semibold text-center'>
					{t.title}
				</h2>
				<form className='relative flex justify-center items-center gap-7 mt-20'>
					<input
						type='email'
						placeholder={t.email}
						className='w-[421px] h-[68px] pl-[4rem] rounded-[10px] border-none outline-none placeholder:text-[#39425D] text-lg bg-white'
					/>
					<button
						type='submit'
						className='w-[180px] h-[68px] rounded-[10px] bg-gradient-to-b from-[#FF946D] to-[#FF7D68] text-white text-lg'
					>
						{t.button}
					</button>

					<Image
						src='/email.svg'
						alt='telegramma'
						width={30}
						height={100}
						className='absolute bottom-[32%] left-[25.3%]'
					/>
				</form>
			</div>

			<Image
				src='/telegramma.svg'
				alt='telegramma'
				width={70}
				height={100}
				className='absolute top-[12%] right-[11%]'
			/>
		</section>
	);
};

export default Contact;
