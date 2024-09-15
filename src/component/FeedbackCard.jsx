/** @format */

import { quotes } from '../assets';
import styles from '../style';

const FeedbackCard = ({ content, name, title, img }) => (
	<div className='feedback-card mr-0 sm:mr-5 mb:mr-10 my-5  max-w-[370px] flex justify-between px-10 py-12 rounded-[20px] flex-col'>
		<img
			src={quotes}
			alt='QOUTES'
			className='w-[42px] h-[27px] '
		/>
        <p className='font-normal font-poppins text-[18px] text-white my-10 leading-[32px]'>{content}</p>
        <div className='flex flex-row '>
            <img src={img} alt='Avatar' className='w-[42px] h-[42px] rounded-full '/> 
            <div className='flex flex-col ml-5 '>
                <h2 className='font-semibold font-poppins text-[20px] text-white  leading-[32px]'>{name}</h2>
                <p className='font-normal font-poppins text-[16px] text-dimWhite leading-[24px]'>{title}</p>
            </div>
        </div>
	</div>
);

export default FeedbackCard;
