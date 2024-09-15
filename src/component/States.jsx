/** @format */

import styles from '../style';
import { stats } from '../constants';
const States = () => {

	return (
		<section
			className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}>
			{stats.map((state) => (
				<div
					key={state.id}
					className={`flex flex-1 flex-row justify-start items-center m-3`}>
					<h4 className='font-poppins font-semibold text-[30px] xs:text-[40px] leading-[32px] xs:leading-[43px] text-white'>
						{state.value}
					</h4>
					<p className='font-poppins font-normal text-[15px] xs:text-[20px] leading-[21px] xs:leading-[26px] text-gradient  uppercase ml-3'>
						{state.title}
					</p>
				</div>
			))}
		</section>
	);
};

export default States;
