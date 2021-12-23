import React from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styles from "../styles/general";
import { makeStyles } from "@mui/styles";
import ImageForm from "./ImageForm";

const FModal = ({ open, handleClose, id, accessToken }) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box className={classes.modalcss}>
          <h2 id="child-modal-title">Add a new Album</h2>
          <ImageForm albumId={id} accessToken={accessToken} />
        </Box>
      </Modal>
    </div>
  );
};

FModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  id: PropTypes.string,
  accessToken: PropTypes.string,
};

export default FModal;
