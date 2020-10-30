import React from 'react';
import './Intro.scss';
import CanIaffordlogo from './CanIaffordlogo.png';

const Intro = () => {
	return (
		<div className='full-page'>
			<img className='intro-logo' src={CanIaffordlogo} alt='' />
		</div>
	);
};

export default Intro;
