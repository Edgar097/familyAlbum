import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import { makeStyles } from "@mui/styles";
import styles from "../styles/general";

const useStyles = makeStyles(styles);

const Frame = ({ image, border, ...rest }) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.pictureBox}
      style={{
        borderImage: `url(${border}) 30 stretch`,
      }}
      {...rest}
    >
      <img src={image} {...rest} alt="" />
    </Box>
  );
};

Frame.propTypes = {
  image: PropTypes.string,
  border: PropTypes.string,
  height: PropTypes.any,
  width: PropTypes.any,
};

export default Frame;
