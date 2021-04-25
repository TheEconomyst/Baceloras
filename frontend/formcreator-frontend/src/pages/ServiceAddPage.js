import "../App.css";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "fontsource-roboto";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import theme from "../theme";
import { Select } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteModal from "../components/DeleteModal";

const data = [
  { id: 1, name: "Valyti", provider: "UAB LEMAO" },
  { id: 2, name: "Pomidoru valdymas", provider: "UAB LEMAO" },
  { id: 3, name: "Ramunas", provider: "UAB LEMAO" },
  { id: 4, name: "Deividas", provider: "UAB LEMAO" },
  { id: 5, name: "Lemao", provider: "UAB LEMAO" },
];

const useStyles = makeStyles({
  paper: {
    margin: "20px",
    padding: "20px",
    backgroundColor: theme.palette.secondary.light,
  },
  form: {
    margin: "20px",
    padding: "20px",
    width: "50%",
    height: "50%",
  },
  cont: {
    marginBottom: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

function ServiceAddPage() {
  const classes = useStyles();
  return (
    <Container>
      <Paper elevation={2} className={classes.paper}>
        <Typography variant="h5">Paslaugų pridėjimas</Typography>
        <Grid container style={{ display: "flex" }}>
          <Button
            href="/services"
            variant="contained"
            color="primary"
            style={{ marginRight: "15px" }}
          >
            ATGAL
          </Button>
        </Grid>
      </Paper>
      <div className={classes.cont}>
        <Paper className={classes.form}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4">Informacija apie paslaugą</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                marginTop: "20px",
                marginBottom: "30px",
              }}
            >
              <Typography style={{ marginTop: "auto", marginRight: "20px" }}>
                Paslaugos tipo pasirinkimas:
              </Typography>
              <Select>
                <MenuItem value={1}>Valymas</MenuItem>
                <MenuItem value={2}>Sveitimas</MenuItem>
              </Select>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button variant="contained" color="secondary">
                PRIDĖTI PASLAUGĄ
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
  );
}

export default ServiceAddPage;
