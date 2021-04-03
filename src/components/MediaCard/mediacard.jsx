import React, { useState } from 'react';
import './mediacard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Sofa from '../../images/sofa.jpg'

const useStyles = makeStyles({
	root: {
		maxWidth: 245
	},
	media: {
		height: 200
	}
});

const MediaCard = ({title}) => {
	const classes = useStyles();
	const [ hover, setHover ] = useState(false);

	const onHoverHandler = () => {
		setHover(!hover);
	};

	return (
		// <div className="mt-3 mb-3">
		// 	<div
		// 		className={hover ? 'animate__animated animate__bounce' : ''}
		// 		onMouseOver={onHoverHandler}
		// 		onMouseOut={onHoverHandler}
		// 	>
				<Card className="m" style={{maxWidth: '100%'}}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image={Sofa}
						/>
						<CardContent className={classes.media}>
							<div className="heading mt-5" style={{ maxWidth: '100%', textAlign: 'center' }}>
								<h5>{title}</h5>
							</div>
							<div className="CardContent small text-center ">
								<a href="#" className="mr-1" style={{ textDecoration: 'none', color: '#15dbcb' }}>
									BEKIJK PRODUCTEN
								</a>
								<ArrowForwardIosIcon
									className="mb-1"
									style={{ color: '#15dbcb', fontSize: '10px', 'font-family': 'san-sarif' }}
								/>
							</div>
						</CardContent>
					</CardActionArea>
				</Card>
		// 	</div>
		// </div>
	);
};
export default MediaCard;
