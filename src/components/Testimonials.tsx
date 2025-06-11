'use client';

import { Testimonial } from '@/types/testimonial';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: 'Mike Taylor',
		position: '',
		location: 'Lahore, Pakistan',
		message:
			'“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
		avatar: '/face.png',
	},
	{
		id: 2,
		name: 'Chris Thomas',
		position: 'CEO of Red Button',
		location: '',
		message:
			'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien id libero viverra tincidunt.”',
		avatar: '/face.png',
	},
	{
		id: 3,
		name: 'Sarah Williams',
		position: 'Product Manager',
		location: 'New York, USA',
		message:
			'“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.”',
		avatar: '/face.png',
	},
];

interface PageProps {
	t: {
		title: string;
		subtitle: string;
	};
}

export default function Testimonials({ t }: PageProps) {
	const [current, setCurrent] = useState(0);

	const next = () => setCurrent(prev => (prev + 1) % testimonials.length);
	const prev = () =>
		setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);

	return (
		<section
			id='testimonials'
			className='container py-16 px-6 md:px-16 flex items-start mt-20 mx-auto gap-20'
		>
			<div className='flex flex-col items-start w-1/2 ml-20'>
				<p className='text-lg text-[#5E6282] uppercase font-semibold mb-2'>
					{t.title}
				</p>
				<h2 className='text-[50px] w-[80%] font-bold text-gray-900 mb-8'>
					{t.subtitle}
				</h2>

				{/* Pagination dots */}
				<div className='flex gap-3 mt-4 justify-center pt-4'>
					{testimonials.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrent(index)}
							className={`w-3 h-3 rounded-full transition ${
								current === index ? 'bg-gray-900' : 'bg-gray-300'
							}`}
						/>
					))}
				</div>
			</div>

			<div className='flex items-start gap-8 w-1/2 mt-10'>
				{/* Testimonial card */}
				<div className='relative w-[500px] min-h-[260px]'>
					<AnimatePresence mode='wait'>
						<motion.div
							key={testimonials[current].id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.4 }}
							className='relative bg-white p-8 rounded-2xl shadow-lg'
						>
							<div className='absolute -top-[23%] -left-8'>
								<Image
									src={testimonials[current].avatar}
									alt={testimonials[current].name}
									width={64}
									height={64}
									className='rounded-full'
								/>
							</div>
							<p className='text-gray-700 text-lg leading-relaxed mb-6'>
								{testimonials[current].message}
							</p>
							<p className='font-bold text-gray-900'>
								{testimonials[current].name}
							</p>
							<p className='text-sm text-gray-500'>
								{testimonials[current].position &&
									`${testimonials[current].position}, `}
								{testimonials[current].location}
							</p>
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Arrow buttons */}
				<div className='flex flex-col gap-4 pt-20'>
					<button
						onClick={prev}
						className='p-2 rounded-full hover:bg-gray-200 transition'
					>
						<ChevronUp className='w-5 h-5 text-gray-600' />
					</button>
					<button
						onClick={next}
						className='p-2 rounded-full hover:bg-gray-200 transition'
					>
						<ChevronDown className='w-5 h-5 text-gray-600' />
					</button>
				</div>
			</div>
		</section>
	);
}
