import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '10px',
		marginBottom: '10px',
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		margin: 'auto',
		width: '70%'
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1
	},
	iconButton: {
		padding: 10
	},
	divider: {
		height: 28,
		margin: 4
	}
}));

export default function BasicTextFields() {
	const classes = useStyles();

	return (
		<Paper component="form" className={classes.root}>
			<InputBase
				className={classes.input}
				placeholder="Email"
				inputProps={{ 'aria-label': 'search google maps' }}
			/>
			<Divider className={classes.divider} orientation="vertical" />
			<IconButton type="submit" className={classes.iconButton} aria-label="search">
				<ArrowForwardIcon />
			</IconButton>
		</Paper>
	);
}
