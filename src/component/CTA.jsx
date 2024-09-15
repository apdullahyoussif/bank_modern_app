/** @format */

import styles from '../style';
import Button from './Button';

function CTA() {
	return (
		<section className={styles.flexCenter}>
			<div
				className={`${styles.padding} ${styles.marginY} ${styles.flexCenter} flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow `}>
				<div className='flex-1 flex flex-col'>
					<h2 className={styles.heading2}>Let’s try our service now!</h2>
					<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
						{' '}
						Everything you need to accept card payments and grow your business
						anywhere on the planet.
					</p>
				</div>
				<div className='mt-10 sm:mt-0 ml-0 sm:ml-10'>
					<Button />
				</div>
			</div>
		</section>
	);
}

export default CTA;
