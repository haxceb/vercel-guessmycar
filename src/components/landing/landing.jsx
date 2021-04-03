import React, { Component } from "react";
import img from "../../media/mainImg.jpeg";
import Sofa from "../../images/sofa3.jpg";
import "./landing.css";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Landing = (props) => {
  return (
    <Grid
      container
      spacing={2}
      xs={12}
      alignItems="center"
      alignContent="center"
    >
      <Grid item xs={12} sm={6} md={6} className="pt-4">
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="p" component="p">
          BIJ ALLE LOUNGE SETS
        </Typography>
        <Button color="primary" variant="contained">
          Get Started
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={6} className="p-5">
        <img
          className="img-fluid shadow-lg rounded"
          src={Sofa}
          style={{ maxHeight: "70vh" }}
        ></img>
      </Grid>
    </Grid>
  );
};

export default Landing;
