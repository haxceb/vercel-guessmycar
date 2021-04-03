import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SofaImage from "../../images/sofa3.jpg";
import { IconButton } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 300,
  },
});

export default function MediaCard({ title, img }) {
  const classes = useStyles();

  return (
    <Card className={`m-2 ${classes.root}`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent style={{ display: "flex" }}>
          <Typography variant="p" component="h6">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        disableSpacing
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="p" component="p">
          <s style={{ color: "blue" }}>$70.00</s> $45.00
        </Typography>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      <CardActions>
        <Button color="primary">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
