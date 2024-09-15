/** @format */

import styles, { layout } from '../style';
import { google, bill, apple } from '../assets';
const Billing = () => {
	return (
		<section
			id='product'
			className={layout.sectionReverse}>
			<div className={layout.sectionImgReverse}>
				<img
					src={bill}
					alt='bill'
					className=' relative w-full h-full z-[5]'
				/>
				<div className='absolute top-0 left-1/2 w-1/2 h-1/2 rounded-full white__gradient z-[3]' />
				<div className='absolute bottom-0 left-1/2 w-1/2 h-1/2 rounded-full pink__gradient z-[0]' />
			</div>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Easily control your<br className='sm:block hidden' /> billing &
					invoicing
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
					aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
					placerat.
				</p>
        <div className={`${styles.flexStart} mt-5`}>
          <img src={apple} alt='apple'  className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt='google'  className='w-[128px] h-[42px] object-contain  cursor-pointer'/>
        </div>
			</div>
		</section>
	);
};

export default Billing;
