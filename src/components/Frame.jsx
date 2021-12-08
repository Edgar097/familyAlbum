import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import { makeStyles } from "@mui/styles";
import styles from "../styles/general";

const useStyles = makeStyles(styles);

const Frame = ({ image, ...rest }) => {
  const classes = useStyles();

  return (
    <Box className={classes.pictureBox} {...rest}>
      <img src={image} {...rest} alt="" />
    </Box>
  );
};

Frame.propTypes = {
  image: PropTypes.string,
  height: PropTypes.any,
  width: PropTypes.any,
};

export default Frame;
