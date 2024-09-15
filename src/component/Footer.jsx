/** @format */

import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import styles from '../style';
const Footer = () => {
	return (
		<section
			className={`${styles.flexCenter} ${styles.paddingY} flex-wrap flex-col`}>
			<div className='w-full flex md:flex-row flex-col mb-8'>
				<div className='flex flex-1 flex-col mr-10 justify-start'>
					<img
						src={logo}
						alt='logo'
						className='w-[266px] h-[72px] object-contain'
					/>
					<p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
						A new way to make the payments easy, reliable and secure.
					</p>
				</div>
				<div className='flex flex-wrap flex-[1.5] mt-5 md:mt-0 w-full justify-between '>
					{footerLinks.map((foot) => {
						return (
							<div
								key={foot.links}
								className='flex min-w-[150px] my-5 ss:my-0 '>
								<h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
									{foot.title}
									<ul className='mt-8'>
										{foot.links.map((li, index) => {
											return (
												<li
													className={`font-poppins font-normal text-[16px] leading-[24px] hover:text-secondary text-dimWhite cursor-pointer 
                        ${index !== foot.links.length - 1 ? 'mb-4' : 'mb-0'}`}
													key={li.name}>
													{' '}
													{li.name}
												</li>
											);
										})}
									</ul>
								</h4>
							</div>
						);
					})}
				</div>
			</div>
			<div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
				<p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
					Copyright Ⓒ 2022 HooBank. All Rights Reserved.
				</p>

				<div className='flex flex-row md:mt-0 mt-6'>
					{socialMedia.map((social, index) => (
						<img
							key={social.id}
							src={social.icon}
							alt={social.id}
							className={` hover:text-secondary w-[21px] h-[21px] object-contain cursor-pointer ${
								index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
							}`}
							onClick={() => window.open(social.link)}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Footer;
