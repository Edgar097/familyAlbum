import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TableRow from "./TableRow";
import { makeStyles } from "@mui/styles";
import styles from "../styles/general";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChartRow from "./ChartRow";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const useStyles = makeStyles(styles);

const Dropdown = (props) => {
  const [view, setView] = useState(false);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const classes = useStyles();

  const handleClick = () => {
    setView(!view);
  };

  const handleChipClick = (elementId) => {
    navigator.clipboard.writeText(elementId).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  };

  useEffect(() => {
    const options = props.tickets.filter((ticket) =>
      ticket.Queue.includes(props.queue)
    );
    setData(options);
    setTotal(options.length);
  }, []);

  return (
    <Box>
      <Button
        className={classes.headerButton}
        onClick={handleClick}
        variant="text"
      >
        <h2>
          {props.queue.replace("Herramientas Aplicaciones::", "")}
          {!view && <KeyboardArrowDownIcon className={classes.iconCSS} />}
          {view && <KeyboardArrowUpIcon className={classes.iconCSS} />}
        </h2>
      </Button>
      {view && (
        <Box className={classes.flexBoxV3}>
          {props.show &&
            data.map((ticket, key) => (
              <React.Fragment>
                <TableRow
                  key={ticket.ticketId + "_" + key}
                  title={ticket.title}
                  Queue={ticket.Queue}
                  SLA={ticket.SLA}
                  TicketState={ticket.TicketState}
                  resEmail={ticket.resEmail}
                  resLastName={ticket.resLastName}
                  resName={ticket.resName}
                  service={ticket.service}
                >
                  {ticket.Queue}
                </TableRow>
                <Divider>
                  <Chip
                    onClick={() => handleChipClick(ticket.ticketNumber)}
                    label={`Ticket Number: ${ticket.ticketNumber}`}
                  />
                </Divider>
              </React.Fragment>
            ))}
        </Box>
      )}
      {!view && (
        <ChartRow
          queue={props.queue}
          services={props.services}
          total={total}
        ></ChartRow>
      )}
    </Box>
  );
};

Dropdown.propTypes = {
  show: PropTypes.bool,
  tickets: PropTypes.array,
  queue: PropTypes.string,
  services: PropTypes.array,
};

export default Dropdown;
