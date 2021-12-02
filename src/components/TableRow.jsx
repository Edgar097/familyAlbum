import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-trafficlight";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import styles from "../styles/general";

const useStyles = makeStyles(styles);
const TableRow = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.tableRow}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <p className={classes.normalTitle}>{"Ticket Title"}</p>
          <p className={classes.normalL}>{props.title}</p>
        </Grid>
        <Grid item xs={6}>
          <p className={classes.normalTitle}>{"Ticket SLA"}</p>
          <p className={classes.normalL}>{props.SLA}</p>
        </Grid>
        <Grid item xs={6}>
          <p className={classes.normalTitle}>{"Ticket State"}</p>
          <p className={classes.normalL}>{props.TicketState}</p>
        </Grid>
        <Grid item xs={6}>
          <p
            className={classes.normalL}
          >{`Responsable: ${props.resName} ${props.resLastName}`}</p>
          <p className={classes.normalL}>{`Email: ${props.resEmail}`}</p>
        </Grid>
        <Grid item xs={6}>
          <p className={classes.normalTitle}>{"Ticket Queue"}</p>
          <p className={classes.normalL}>{props.Queue}</p>
        </Grid>
        <Grid item xs={6}>
          <p className={classes.normalTitle}>{"Ticket Service"}</p>
          <p className={classes.normalL}>{props.service}</p>
        </Grid>
      </Grid>
    </Box>
  );
};

TableRow.propTypes = {
  title: PropTypes.string,
  Queue: PropTypes.string,
  SLA: PropTypes.string,
  TicketState: PropTypes.string,
  resEmail: PropTypes.string,
  resLastName: PropTypes.string,
  resName: PropTypes.string,
  service: PropTypes.string,
  ticketId: PropTypes.string,
  ticketNumber: PropTypes.string,
};

export default TableRow;
