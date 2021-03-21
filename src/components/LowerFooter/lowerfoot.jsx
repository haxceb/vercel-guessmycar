import React, { useState } from 'react';
import './lowerfoot.css';
import FbBlack from '../../images/facebook.png';
import FbColored from '../../images/facebook-colored.png';
import Pinterest from '../../images/pinterest-circular-logo-symbol.png';
import Pinterest_colored from '../../images/pinterest-circular-logo-symbol-colored.png';
import Insta from '../../images/instagram-symbol-black.png';
import Insta_colored from '../../images/instagram-symbol.png';

const LowerFooter = () => {
	const [ hover1, setHover1 ] = useState(false);
	const [ hover2, setHover2 ] = useState(false);
	const [ hover3, setHover3 ] = useState(false);
	/*For first Image*/
	const isHover1 = () => {
		setHover1(!hover1);
	};

	const notHover1 = () => {
		setHover1(!hover1);
	};
	/*For second Image*/
	const isHover2 = () => {
		setHover2(!hover2);
	};

	const notHover2 = () => {
		setHover2(!hover2);
	};
	/*For second Image*/
	const isHover3 = () => {
		setHover3(!hover3);
	};

	const notHover3 = () => {
		setHover3(!hover3);
	};

	return (
		<div className="container-fluid  mycontainer">
			<footer className="row p-3 pt-4">
				<div className="col-1" />
				<div className="col-6">
					<p>
						Alle bedragen zijn inclusief BTW <span> &copy; DÉ STEIGERHOUTLOUNGE 2020</span>
					</p>
				</div>
				<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
				{/*Here I am giving cols for spacing*/}
				<div className="col-lg-3 col-md-3 col-sm-3">
					<img
						className="fb"
						onMouseOver={isHover1}
						onMouseOut={notHover1}
						src={hover1 ? FbColored : FbBlack}
						width="20px"
					/>

					<img
						className="ml-3 pint "
						onMouseOver={isHover2}
						onMouseOut={notHover2}
						src={hover2 ? Pinterest_colored : Pinterest}
						width="20px"
					/>

					<img
						className="ml-3 insta"
						onMouseOver={isHover3}
						onMouseOut={notHover3}
						src={hover3 ? Insta_colored : Insta}
						width="20px"
					/>
				</div>
			</footer>
		</div>
	);
};

export default LowerFooter;
// onMouseOver={() => isHover()}
// 						onMouseOut={ notHover()}
// 						src={hover ? FbColored : FbBlack}
