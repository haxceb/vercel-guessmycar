import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
// import Brightness1TwoToneIcon from '@material-ui/icons/Brightness1TwoTone';
import CardHeader from '@material-ui/core/CardHeader';
import { IconButton } from '@material-ui/core';

// import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: "100%"
	},
	media: {
		height: 0,
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: red[500]
	},
	alignment: {
		'text-align': 'center',
	}
}));

function OnlineCard() {
	const classes = useStyles();
	const [ expanded, setExpanded ] = React.useState(false);
	const [ hover, sethover ] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>

			<CardContent>
				<List className={classes.root}>
					<ListItem
						className={hover ? 'active' : ''}
						style={{ border: '2px solid #f9f9f9', borderRadius: '5px' }}
					>
						<ListItemAvatar style={{ backgroundColor: 'white', color: 'white' }}>
							<Avatar>
								<TextsmsOutlinedIcon color="#f7f5f4" />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Live Chat" secondary={window.navigator.onLine ? 'Online' : 'Offline'} />
					</ListItem>
					<ListItem>
						{/*here the second Item started */}
						<ListItemAvatar>
							<Avatar>
								<WorkIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Work" secondary="Jan 7, 2014" />
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<BeachAccessIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Vacation" secondary="July 20, 2014" />
					</ListItem>
				</List>
			</CardContent>
		</Card>
	);
}

/*

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: '#aa12',
		'border-radius': '10px',
		margin: '100px'
		// theme.palette.background.paper
	}
}));

function OnlineCard(props) {
	const classes = useStyles();

	return (
		
		<List className={classes.root}>
			<ListItem>
				
				<ListItemAvatar>
					<Avatar>
						<ImageIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Photos" secondary="Jan 9, 2014" />
			</ListItem>
			<ListItem>
				<ListItemAvatar>
					<Avatar>
						<WorkIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Work" secondary="Jan 7, 2014" />
			</ListItem>
			<ListItem>
				<ListItemAvatar>
					<Avatar>
						<BeachAccessIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Vacation" secondary="July 20, 2014" />
			</ListItem>
		</List>
	);
}
*/
export default OnlineCard;
