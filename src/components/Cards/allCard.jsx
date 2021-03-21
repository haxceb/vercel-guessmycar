import { useState } from 'react';
import MediaCard from '../MediaCard/mediacard';
const AllCards = (props) => {
	const [ count, setCount ] = useState([ 1, 2, 3, 4 ]);
	// const [ img1 ] = useState('');
	return (
		<div className="container-fluid">
			<div className="row mx-5 mt-5 justify-content-center">
				{count.map((count, index) => {
					return <MediaCard key={count} />;
				})}
			</div>
		</div>
	);
};

export default AllCards;
