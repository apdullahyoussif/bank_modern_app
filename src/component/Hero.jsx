/** @format */
import '../index.css';

import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';
function Hero() {
	return (
		<section
			id='Home'
			className={`flex md:flex-row flex-col ${styles.paddingY}`}>
			<div
				className={`flex flex-col flex-1 px-6 sm:px-16 xl:px-0 ${styles.flexStart}`}>
				<div
					className={`flex flex-row bg-discount-gradient py-[6px] px-4 mb-2 rounded-[10px]`}>
					<img
						src={discount}
						alt='Discount'
						className='w-[32px] h-[32px] '
					/>
					<p className={`${styles.paragraph} ml-2`}>
						<span className='text-white'>20%</span> Discount For
						<span className='text-white'> 1 Month </span> Accunt
					</p>
				</div>
				<div className='flex flex-row justify-between items-center w-full '>
					<h1 className='flex-1 text-white  font-poppins font-semibold text-[52px] ss:text-[72px] leading-[75px] ss:leading-[100px] '>
						The Next <br className='ss:hidden' />
						<span className='text-gradient'>Generation</span>
					</h1>
					<div className='ss:flex hidden mr-0 md:mr-4'>
						<GetStarted />
					</div>
				</div>
				<h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full'>
					Payment Method.
				</h1>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Our team of experts uses a methodology to identify the credit cards
					most likely to fit your needs. We examine annual percentage rates,
					annual fees.
				</p>
			</div>
			<div className={`relative ${styles.flexCenter} md:my-0 my-6`}>
				<img
					src={robot}
					alt='robot'
					className='w-full h-full relative z-[5]'
				/>
				<div className='absolute top-0 z-[0] w-[40%] h-[35%] pink__gradient  '/>
				<div className='absolute bottom-[40%] z-[1] w-[80%] h-[80%] rounded white__gradient  '/>
				<div className='absolute bottom-[20%] z-[0] w-[50%] h-[50%] blue__gradient  '/>
				<div className={`${styles.flexCenter} ss:hidden `}><GetStarted/></div>
			</div>
		</section>
	);
}

export default Hero;
