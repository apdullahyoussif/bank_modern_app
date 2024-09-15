/** @format */

import { clients } from '../constants';
import styles from '../style';

const Clints = () => {
	return (
		<section className={`${styles.flexCenter} my-4`}>
			<div className={`${styles.flexCenter} w-full flex-wrap`}>
				{clients.map((clint) => {
					return (
						<div
							key={clint.id}
							className={`${styles.flexCenter}flex-1 min-w-[120px] sm:min-w-[192px] m-5`}>
							<img
								src={clint.logo}
								alt='logo'
                className="sm:w-[192px] w-[100px] object-contain" />
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Clints;
