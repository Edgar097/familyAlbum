import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import styles from "../styles/general";
import { GoRadioTower } from "react-icons/go";

const useStyles = makeStyles(styles);

const MasterTable = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.TableCSS}>
        {props.queues.map((queue, key) => (
          <Fragment>
            <Dropdown
              key={key}
              show={true}
              tickets={props.tickets}
              queue={queue.Queue}
              services={props.services}
            />
          </Fragment>
        ))}
      </Box>
    </div>
  );
};

MasterTable.propTypes = {
  queues: PropTypes.array,
  tickets: PropTypes.array,
  services: PropTypes.array,
};

export default MasterTable;
