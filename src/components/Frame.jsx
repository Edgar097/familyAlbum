import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "mui-image";

import Family from "../images/family.jpg";

import { makeStyles } from "@mui/styles";
import styles from "../styles/general";

const useStyles = makeStyles(styles);

const Frame = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.flexBox}>
      <Grid container width="100%" height="100%">
        <Grid className={classes.topAndBotFrame} item xs={12}>
          <Box className={classes.topAndBotPicture} />
        </Grid>
        <Grid className={classes.sidesFrame} item xs={1}>
          <Box className={classes.sidePicture} />
        </Grid>
        <Grid className={classes.pictureFrame} item xs={10}>
          <Box className={classes.pictureBox} />
        </Grid>
        <Grid className={classes.sidesFrame} item xs={1}>
          <Box className={classes.sidePicture} />
        </Grid>
        <Grid className={classes.topAndBotFrame} item xs={12}>
          <Box className={classes.topAndBotPicture} />
        </Grid>
      </Grid>
    </Box>
  );
};

Frame.propTypes = {
  dimensions: PropTypes.array,
};

export default Frame;
