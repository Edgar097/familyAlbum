import React, { useContext } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserContext } from "../utils/UserContext";

import { makeStyles } from "@mui/styles";
import styles from "../styles/general";
import { IconButton } from "@mui/material";
const useStyles = makeStyles(styles);

const TopBar = (props) => {
  const classes = useStyles();
  const user = useContext(UserContext);
  const handleClick = () => {
    user.setUser("LogOut");
    console.log(user);
  };
  return (
    <Box className={classes.appBar}>
      <div className={classes.borders}>
        <Toolbar>
          <Typography
            component="h1"
            variant="h6"
            noWrap
            className={classes.marginTitle}
          >
            Dashboard
          </Typography>
          <IconButton className={classes.iconButton} onClick={handleClick}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </div>
    </Box>
  );
};

TopBar.propTypes = {};

export default TopBar;
