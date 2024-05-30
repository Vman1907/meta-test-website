import { CALENDAR, HOUSE, INTERIOR, INVESTMENT, LEGAL, LOCATION, PORTFOLIO, USERS } from '../../../assets/images';

const property = [
	{
		icon: (
			<svg
				version='1.1'
				id='_x32_'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				viewBox='0 0 512 512'
				xmlSpace='preserve'
				className='w-1/3'
			>
				<style type='text/css'></style>
				<g>
					<path
						className='st0 fill-current text-blue-950 group-hover:text-white transition-[0.3s]'
						d='M395.141,193.75V90.781h-47.703v55.266l-53.375-53.391L256,54.625l-38.063,38.031L0,310.609l38.063,38.063
		l41.813-41.828v150.531h352.25V306.844l41.813,41.828L512,310.609L395.141,193.75z M245.578,396.719h-54.484v-54.5h54.484V396.719z
		 M245.578,321.063h-54.484v-54.5h54.484V321.063z M320.906,396.719h-54.484v-54.5h54.484V396.719z M320.906,321.063h-54.484v-54.5
		h54.484V321.063z'
					/>
				</g>
			</svg>
		),
		title: 'Residential Apartment',
	},
	{
		icon: (
			<svg
				fill='#000000'
				version='1.1'
				id='Capa_1'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				viewBox='0 0 46.169 46.169'
				xmlSpace='preserve'
				className='w-1/3'
			>
				<g>
					<path
						d='M37.812,2.183c0-1.218-0.94-2.183-2.158-2.183H10.473C9.254,0,8.357,0.965,8.357,2.183v43.986h9.608v-7.267
		c0-0.715,0.517-1.299,1.229-1.299h7.771c0.713,0,1.238,0.584,1.238,1.299v7.267h9.607V2.183H37.812z M21.308,31.209
		c0,0.417-0.337,0.755-0.755,0.755h-4.549c-0.416,0-0.755-0.338-0.755-0.755V26.66c0-0.417,0.339-0.756,0.755-0.756h4.549
		c0.418,0,0.755,0.339,0.755,0.756V31.209z M21.308,21.18c0,0.417-0.337,0.755-0.755,0.755h-4.549c-0.416,0-0.755-0.338-0.755-0.755
		v-4.549c0-0.417,0.339-0.755,0.755-0.755h4.549c0.418,0,0.755,0.338,0.755,0.755V21.18z M21.308,10.944
		c0,0.417-0.337,0.755-0.755,0.755h-4.549c-0.416,0-0.755-0.338-0.755-0.755V6.395c0-0.417,0.339-0.755,0.755-0.755h4.549
		c0.418,0,0.755,0.338,0.755,0.755V10.944z M30.919,31.209c0,0.417-0.34,0.755-0.756,0.755h-4.549c-0.418,0-0.755-0.338-0.755-0.755
		V26.66c0-0.417,0.337-0.756,0.755-0.756h4.549c0.416,0,0.756,0.339,0.756,0.756V31.209z M30.919,21.18
		c0,0.417-0.34,0.755-0.756,0.755h-4.549c-0.418,0-0.755-0.338-0.755-0.755v-4.549c0-0.417,0.337-0.755,0.755-0.755h4.549
		c0.416,0,0.756,0.338,0.756,0.755V21.18z M30.919,10.944c0,0.417-0.34,0.755-0.756,0.755h-4.549c-0.418,0-0.755-0.338-0.755-0.755
		V6.395c0-0.417,0.337-0.755,0.755-0.755h4.549c0.416,0,0.756,0.338,0.756,0.755V10.944z'
						className='fill-current text-blue-950 group-hover:text-white transition-[0.3s]'
					/>
				</g>
			</svg>
		),
		title: 'Luxury Apartment',
	},
	{
		icon: (
			<svg
				version='1.1'
				id='Capa_1'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				viewBox='0 0 16.16 16.16'
				xmlSpace='preserve'
				className='w-1/3 fill-current text-blue-950 group-hover:text-white transition-[0.3s]'
			>
				<g>
					<g>
						<polygon
							points='7.95,2.625 14.359,6.292 15.774,6.298 12.656,1.237 11.233,1.239 11.233,0 9.584,0 
			9.584,1.242 8.035,1.253 3.503,1.261 0.386,6.416 2.041,6.407 		'
						/>
						<path
							d='M14.588,7.393l-6.58-3.656L1.73,7.447v6.968H0.756v1.745h14.73v-1.745h-0.898V7.393z M4.763,12.098
			H2.844V8.86h1.918L4.763,12.098L4.763,12.098z M9.353,14.511L9.353,14.511H6.7V8.986h2.653V14.511z M13.458,12.098H11.54V8.86
			h1.918V12.098z'
						/>
					</g>
				</g>
			</svg>
		),
		title: 'Premium Bungalow',
	},
	{
		icon: (
			<svg
				viewBox='0 0 1024 1024'
				className='w-1/3 fill-current text-blue-950 group-hover:text-white transition-[0.3s]'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M192 128v704h384V128H192zm-32-64h448a32 32 0 0132 32v768a32 32 0 01-32 32H160a32 32 0 01-32-32V96a32 32 0 0132-32z' />
				<path d='M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z' />
				<path d='M640 384v448h192V384H640zm-32-64h256a32 32 0 0132 32v512a32 32 0 01-32 32H608a32 32 0 01-32-32V352a32 32 0 0132-32z' />
			</svg>
		),
		title: 'Office',
	},
];

const ServiceStats = [
	{
		icon: USERS,
		text: 'Customers',
		number: 150,
	},
	{
		icon: HOUSE,
		text: 'Properties',
		number: 300,
	},
	{
		icon: LOCATION,
		text: 'Locations',
		number: 30,
	},
	{
		icon: CALENDAR,
		text: 'Years',
		number: 3,
	},
];

const services = [
	{
		image: PORTFOLIO,
		title: 'Portfolio Management',
		text: 'VK Realtors Promotes And Sells Real Estate Developments To Potential Buyers Or Investors. We Develop Marketing Strategies, Create Promotional Materials, And Provide Sales Support To Help Clients.',
	},
	{
		image: INTERIOR,
		title: 'Interior Consultancy',
		text: "VK Realtors Gives The Best Interior Consultancy Services By Assessing The Client's Needs, Preferences, And Budget To Create A Functional And Aesthetically Pleasing Environment.",
	},
	{
		image: INVESTMENT,
		title: 'Investment Sales',
		text: 'VK Realtors Helps You In Buying Ans Selling Investment Properties, Commercial Buildings, Apartment Complexes, And Lands. We Help You Making The Correct Decision, Based On Your Choices, To Yield The Maximum returns',
	},
	{
		image: LEGAL,
		title: 'Legal Support',
		text: "VK Realtors Helps It's Customers In Drafting And Reviewing Contracts, Handling Disputes, And Ensuring Compliance With Relevant Laws And Regulations. This Helps You Navigate Legal Complexities.",
	},
];

const Home = () => {
	return (
		<div>
			<section id='hero' className={`h-[93vh] hero-background`}>
				<div className={`text-[3rem] text-center pt-[20%] font-bold`}>
					{'{VK Realtors}'} Unveils Exclusive Properties For Every Lifestyle
				</div>
				<div className='text-md font-semibold text-center pt-[2rem]'>
					We are not just about properties; we believe in fulfilling your dreams.
				</div>
			</section>
			<section id='property' className='py-[2rem]'>
				<div className='text-center font-semibold text-[2rem] text-blue-900 py-4'>
					Choose Your Property
				</div>
				<div className='flex flex-wrap justify-center gap-4'>
					{property.map((item, index) => (
						<div
							key={index}
							className='group flex flex-col justify-center items-center gap-4 border-2 rounded-lg py-4 px-8 w-[250px] text-blue-900 hover:bg-blue-900 hover:text-white transition-[0.3s]'
						>
							{item.icon}
							<div className=' font-semibold'>{item.title}</div>
						</div>
					))}
				</div>
			</section>
			<section id='service-years'>
				<div className='service-background py-[3rem] px-4 flex flex-col justify-center items-center'>
					<div className='text-center text-[2.25rem] font-semibold py-4 max-w-[600px]'>
						Successfully Providing Our Service For 3 Years
					</div>
					<div className='text-center max-w-[600px] '>
						We saw the opportunity to transform the lengthy and difficult process to a time-saving
						and convenient way of buying, selling & renting a property.
					</div>
				</div>
				<div className='flex flex-wrap justify-center relative bottom-[30px] gap-4'>
					{ServiceStats.map((item, index) => (
						<div
							key={index}
							className='w-[250px] py-4 bg-white flex flex-col justify-center items-center rounded-lg shadow-lg'
						>
							<div className='bg-blue-200 p-[10px] rounded-s-full rounded-br-full'>
								<img src={item.icon} className='w-[30px]' />
							</div>
							<div className='text-3xl font-bold'>
								{item.number}
								<span className='text-yellow-400 font-extrabold text-4xl'>+</span>
							</div>
							<div className='text-xs'>{item.text}</div>
						</div>
					))}
				</div>
			</section>

			<section id='services' className='bg-[#f1f5f8] py-8'>
				<div className='text-center text-[2rem] font-semibold text-blue-900 py-4'>Our Services</div>
				<div className='flex flex-wrap justify-center gap-4'>
					{services.map((item, index) => (
						<div
							key={index}
							className='group flex flex-col justify-center items-center gap-4 border-2 py-4 px-2 w-[300px] bg-white shadow-lg rounded-md border-t-[#374899] border-s-[#374899] border-b-[#eeb65a] border-r-[#eeb65a]'
						>
							<img src={item.image} className='w-full aspect-video' />
							<div className='text-lg font-semibold'>{item.title}</div>
							<div className='text-sm text-center'>{item.text}</div>
						</div>
					))}
				</div>
			</section>
			<section id='service-years'>
				<div className='service-background py-[3rem] px-4 flex flex-col justify-center items-center'>
					<div className='text-center text-[2.25rem] font-semibold py-4 max-w-[600px]'>
						We Work Pan Bharat
					</div>
					<div className='text-center max-w-[600px] '>
						Looking to buy, sell, or rent property anywhere in India? VK Realtors is your trusted
						partner for all residential, commercial, and industrial real estate needs. Whether it's
						a home, bungalow, building, or land, Contact us today for all your real estate needs
						across Pan India!
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
