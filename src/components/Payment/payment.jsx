import React from 'react';
import Img from '../../images/index.png';
const Payment = () => {
	return (
		<div className="m-4">
			<h5>BETALMOGELIJKHEDEN</h5>
			<div className="img1">
				<img src={Img} className="img-fluid" style={{ width: '180px' }} />
			</div>
		</div>
	);
};
// style={{ 'max-width': 250, height: 236 }}
export default Payment;
