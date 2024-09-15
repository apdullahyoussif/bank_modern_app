/** @format */

import styles from '../style';
import { arrowUp } from '../assets';
const GetStarted = () => {
	return (
		<div className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient p-[2px] rounded-full cursor-pointer`}>
			<div
				className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
				<div
					className={`${styles.flexStart} flex-row `}>
					<p className='text-gradient text-[18px] font-semibold font-poppins mr-2'>
						Get
					</p>
					<img
						src={arrowUp}
						alt='areow'
					/>
				</div>
				<div
					className={`${styles.flexStart} flex-row `}>
					<p className='text-gradient text-[20px] font-semibold font-poppins '>
						Start
					</p>

				</div>
			</div>
		</div>
	);
};

export default GetStarted;
