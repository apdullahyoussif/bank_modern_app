/** @format */

import './index.css';
import {
	NavBar,
	Hero,
	Billing,
	Business,
	CardDeal,
	CTA,
	States,
	Testimonials,
	Clints,
	Footer
} from './component';


import style from './style.js';


function App() {
	return (
		<div className='bg-primary w-full overflow-hidden'>
			<div className={`${style.flexCenter} ${style.paddingX}`}>
				<div className={`${style.boxWidth} `}>
					<NavBar />
				</div>
			</div>
			<div className={`${style.flexStart} bg-primary`}>
				<div className={`${style.boxWidth} `}>
					<Hero />
				</div>
			</div>
			<div className={`${style.flexStart} ${style.paddingX} bg-primary`}>
				<div className={`${style.boxWidth} `}>
					<States />
					<Business />
					<Billing />
					<CardDeal />
					<Testimonials />
					<Clints/>
					<CTA />
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
