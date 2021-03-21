import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 245
	},
	media: {
		height: 180
	}
});

const MediaCard = (props) => {
	const classes = useStyles();
	return (
		<div className="col-lg-3 col-md-3 col-sm-3 mt-3 mx-2 mb-2">
			<div className="cards hoverable">
				<Card className="justify-content-center " style={{ maxWidth: 245 }}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
						/>
						<CardContent className={classes.media}>
							<div className="heading mt-5" style={{ maxWidth: '100%', textAlign: 'center' }}>
								<h5>TUNISETS</h5>
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
			</div>
		</div>
	);
};
export default MediaCard;
