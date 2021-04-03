import React from 'react';
import Image from '../../images/simple.png';

function FooterLast() {
	return (
		<div className="d-flex justify-content-between container-fluid ">
			<div>
				<p>Copyright © 2018 by Prestashop Themes Template.</p>
			</div>
			<div>
				<img src={Image} alt="no image" />
			</div>
		</div>
	);
}

export default FooterLast;
