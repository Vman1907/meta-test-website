import { Link } from 'react-router-dom';
import { PHONE } from '../../../assets/images';

const Footer = () => {
	return (
		<footer className=' bg-[#172832] pt-[2rem] text-white'>
			<div className='flex flex-wrap justify-center items-center md:items-start text-center md:text-left'>
				<div className='w-full md:w-1/3 text-center'>
					<div className='font-medium text-[2rem]'>Propmatch</div>
				</div>
				<div className='text-sm w-full md:w-1/3'>
					<div className='text-lg pb-4'>Contact Us</div>
					<div>Stellar Coaching & Consulting</div>
					<div>Plot No. 11, Sector 6 Dwarka,</div>
					<div>Dwarka, New Delhi, Delhi 110075, India</div>
					<div className='flex flex-row items-center text-[#b5c9dd] bg-blue-800 w-fit py-2 px-4 rounded-full mt-4 mx-auto md:mx-0'>
						<img src={PHONE} className='w-[15px] mr-2 mt-[2px]' /> +919654308000
					</div>
				</div>
				<div className='text-sm flex flex-col gap-2 w-full md:w-1/3'>
					<div className='text-lg pb-4'>Pages</div>
					<Link className='hover:text-slate-500 transition-[0.3s]' to='/'>
						Home
					</Link>
					<Link className='hover:text-slate-500 transition-[0.3s]' to='/terms'>
						Terms & Conditions
					</Link>
					<Link className='hover:text-slate-500 transition-[0.3s]' to='/privacy'>
						{' '}
						Privacy Policy
					</Link>
					<Link className='hover:text-slate-500 transition-[0.3s]' to='/disclaimer'>
						Disclaimer
					</Link>
				</div>
			</div>
			<div className='bg-[#15232b] text-center mt-8'>©2024 Propmatch. All Rights Reserved.</div>
		</footer>
	);
};

export default Footer;
