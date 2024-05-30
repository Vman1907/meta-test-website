import { Link } from 'react-router-dom';
import { EMAIL, PHONE } from '../../../assets/images';

const Footer = () => {
	return (
		<footer className=' bg-[#172832] pt-[2rem] text-white'>
			<div className='flex flex-wrap  justify-around '>
				<div>
					<div>Company</div>
				</div>
				<div className='text-sm'>
					<div className='text-lg pb-4'>Contact Us</div>
					<div>Stellar Coaching & Consulting</div>
					<div>B-502, Sahara Apartment, Plot No. 11, Sector 6 Dwarka,</div>
					<div>Dwarka, New Delhi, Delhi 110075, India</div>
					<a
						href='tel:+919999987820'
						className='flex flex-row items-center text-[#b5c9dd] bg-blue-800 w-fit py-2 px-4 rounded-full mt-4'
					>
						<img src={PHONE} className='w-[15px] mr-2 mt-[2px]' /> +919999987820
					</a>
					<a
						href='mailto:prashant@prashantvarma.com'
						className='flex flex-row items-center text-[#b5c9dd] bg-blue-800 w-fit py-2 px-4 rounded-full mt-4'
					>
						<img src={EMAIL} className='w-[15px] mr-2 mt-[2px]' /> prashant@prashantvarma.com
					</a>
				</div>
			</div>
			<div className='flex items-center justify-center pt-8'>
				<Link to='/privacy' className='border-r px-1'>
					Privacy Policy
				</Link>
				<Link to='/terms' className='border-r px-1'>
					Terms & Conditions
				</Link>
				<Link to='/disclaimer' className=' px-1'>
					Disclaimer
				</Link>
			</div>
			<div className='bg-[#15232b] text-center mt-8'>©2024. All Rights Reserved.</div>
		</footer>
	);
};

export default Footer;
