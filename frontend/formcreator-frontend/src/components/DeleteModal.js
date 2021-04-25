import "../App.css";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "fontsource-roboto";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import { DialogContentText } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";
import { Button } from "@material-ui/core";
const useStyles = makeStyles({
  modal: {
    left: "50%",
    top: "50%",
  },
});

function DeleteModal(props) {
  const classes = useStyles();
  const onConfirmation = () => {
    props.onModalClose();
  };
  return (
    <div>
      <Dialog open={props.ModalOpen} onClose={() => props.onModalClose}>
        <DialogTitle>Trynimo patvirtinimas</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ar tikrai norite ištrinti šią paslaugą?
          </DialogContentText>
          <DialogContentText>{props.body}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={props.onModalClose}
            color="primary"
            variant="outlined"
          >
            Atšaukti trynimą
          </Button>
          <Button color="primary" variant="contained" onClick={onConfirmation}>
            Patvirtinti trynimą
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteModal;
