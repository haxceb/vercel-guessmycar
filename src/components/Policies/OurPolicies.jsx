import { Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import HorizontalLinearStepper from "./PoliciesStepper";

const OurPolicies = () => {
  return (
    <Grid container>
      <Grid xs={12}>
        <Grid className="mt-5 mb-3">
          <Typography gutterBottom variant="h4" component="h2">
            Our Policies
          </Typography>
          <hr/>
        </Grid>
      </Grid>
      <Grid item container xs={12}>
          <HorizontalLinearStepper/>
      </Grid>

    </Grid>
  );
};

export default OurPolicies;
