import React from 'react';

function PolicyCard(props) {
	return (
		<div
			className="m-3 p-2 text-center"
			style={{ border: '2px solid lightgrey', borderRadius: '5px', width: '250px' }}
		>
			<div className="icon mb-2 ml-4 mr-4">
				<p>{props.icon}</p>
			</div>
			<div className="text">
				<p className="text-muted">{props.text}</p>
			</div>
		</div>
	);
}

export default PolicyCard;
