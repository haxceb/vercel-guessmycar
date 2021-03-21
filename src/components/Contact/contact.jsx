import React from 'react';
import './contact.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Contact = (props) => {
	return (
		<div className="m-4">
			<h5>CONTACT</h5>
			<div className="contactinfo mt-3">
				<ul className="m-0 p-0">
					<li>Schaliënhoevedreef 20T</li>
					<li>2800 Mechelen</li>
					<li>+32 (0) 14 395 242 </li>
					<li>info@desteigerhoutlounge.be</li>
				</ul>
			</div>
		</div>
	);
};

export default Contact;
