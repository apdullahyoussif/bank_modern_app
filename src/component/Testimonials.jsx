/** @format */

import styles from '../style';
import { feedback } from '../constants';
import FeedbackCard from './FeedbackCard';



const Testimonials = () => (
	<section
		id='clients'
		className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
		<div className='' />
		<div className='w-full flex flex-col justify-between items-center sm:flex-row relative z-[1] mb-6 sm:mb-16'>
			<h2 className={styles.heading2}>
				What People are <br className='sm:block hidden' /> saying about us
			</h2>
			<div className='w-full md:mt-0 mt-6'>
				<p className={`${styles.paragraph} text-left max-w-[450px]`}>
					Everything you need to accept card payments and grow your business
					anywhere on the planet.
				</p>
			</div>
		</div>
		<div className='flex sm:justify-start items-center feedback-container flex-wrap relative z-[1]'>
			{feedback.map((feed) => {
       return (<FeedbackCard key={feed.id} {...feed} />)
      })}
		</div>
	</section>
);

export default Testimonials;
