import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import CategoryCard from "./categoryCard";
import HoekbankenImage from "../../../images/sofa3.jpg";
import LoungesetsImage from "../../../images/sofa2.webp";
import TuinsetsImage from "../../../images/sofa.jpg";
import LoungeBankenImage from "../../../images/sofa2.webp";

const SingleCategory = () => {
  return (
    <div className="">
      <Grid className="mt-5 mb-3">
        <Typography gutterBottom align="center" variant="h4" component="h2">
          Our Categories
        </Typography>
        <hr/>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          sm={6}
          style={{ maxHeight: "60vh", minHeight: "60vh" }}
        >
          <CategoryCard title="HOEKBANKEN" bgImage={HoekbankenImage} />
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={6}
          style={{ maxHeight: "60vh", minHeight: "50vh" }}
        >
          <Grid item xs={12}>
            <CategoryCard title="TUINSETS" bgImage={LoungeBankenImage} />
          </Grid>
          <Grid item xs={6}>
            <CategoryCard title="LOUNGEBANKEN" bgImage={TuinsetsImage} />
          </Grid>
          <Grid item xs={6}>
            <CategoryCard title="LOUNGESETS" bgImage={LoungesetsImage} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SingleCategory;
