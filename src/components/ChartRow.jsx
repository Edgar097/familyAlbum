import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import styles from "../styles/general";
import {
  Chart,
  PieSeries,
  Title,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const useStyles = makeStyles(styles);

const ChartRow = (props) => {
  const classes = useStyles();
  const [services, setServices] = useState([]);
  useEffect(() => {
    if (props.services) {
      setServices(
        props.services.filter((service) =>
          service.Service.includes(props.queue)
        )
      );
    }
  }, [props]);
  return (
    <Box className={classes.flexBox}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <p>Total of tickets: {props.total}</p>
        </Grid>
        <Grid item xs={9}>
          <Chart data={services || []}>
            <PieSeries
              valueField="Total"
              argumentField="Service"
              innerRadius={0.6}
            />
            <Title text="Tickets by Service" />
            <Legend />
            <Animation />
          </Chart>
        </Grid>
      </Grid>
    </Box>
  );
};

ChartRow.propTypes = {
  total: PropTypes.number,
  services: PropTypes.array,
  queue: PropTypes.string,
};

export default ChartRow;
