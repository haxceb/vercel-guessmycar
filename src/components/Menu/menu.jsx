import React from 'react';
import './menu.css';

const Menu = (props) => {
	return (
		<div className="heading m-4">
			<h5 className="">MENU</h5>
			<ul className="m-0 p-0">
				<li>
					<a href="#">HOME</a>
				</li>
				<li>
					<a href="#">OVER ONS</a>
				</li>
				<li>
					<a href="#">ZAKELIJK</a>
				</li>
				<li>
					<a href="#">INFORMATIE</a>
				</li>
				<li>
					<a href="#">LEVERTIJD</a>
				</li>
				<li>
					<a href="#">KLANTENSERVICE</a>
				</li>
				<li>
					<a href="#">CONTACT</a>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
