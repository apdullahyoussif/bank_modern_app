/** @format */

import { useState } from 'react';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants/index';
const NavBar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<nav className='w-full flex justify-between items-center py-6 navbar'>
			<img
				src={logo}
				alt='logo'
				className='w-[124px] h-[32px]'
			/>
			<ul className='sm:flex hidden flex-1 justify-end items-center'>
				{navLinks.map((link, index) => {
					return (
						<li
							key={link.id}
							className={`font-poppins text-white hover:text-secondary transition font-normal cursor-pointer ${
								index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
							} `}>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					);
				})}
			</ul>

			<div className=' flex sm:hidden flex-1 justify-end items-center '>
				<img
					src={openMenu ? close : menu}
					alt='menu'
					onClick={() => setOpenMenu(!openMenu)}
					className='cursor-pointer w-[28px] h-[28px] object-contain'
				/>
      {
        openMenu && (
          <div
					className={`p-6 bg-black-gradient absolute top-[70px] right-0 mx-4 my-2 min-w-[180px] rounded-xl sidebar`}>
					<ul className='flex flex-1 justify-end flex-col'>
						{navLinks.map((link, index) => {
							return ( 
								<li
									key={link.id}
									className={`font-poppins text-white hover:text-secondary transition font-normal cursor-pointer ${
										index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
									} `}>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							);
						})}
					</ul>
				</div>
        )
      }
			</div>
		</nav>
	);
};

export default NavBar;
