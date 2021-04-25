import "../App.css";
import { Grid } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import InputLabel from "@material-ui/core/InputLabel";
import { TextField } from "@material-ui/core";
import FormItem from "../components/FormItem";
import SendIcon from "@material-ui/icons/Send";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import "fontsource-roboto";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import theme from "../theme";
import ErrorBox from "../components/ErrorBox";

const useStyles = makeStyles({
  toolbar: {
    toolbar: theme.mixins.toolbar,
  },
});

function NewFormPage() {
  const classes = useStyles();
  const [formElement, setformElement] = useState(1);
  const [latestIdUsed, setLatestIdUsed] = useState(0);
  const [inputList, setinputList] = useState([]);
  const onAddButtonClick = (event) => {
    setinputList([...inputList, { value: latestIdUsed }]);
    setLatestIdUsed(latestIdUsed + 1);
  };
  const handleChange = (event) => {
    setformElement(event.target.value);
  };
  const onRemoveButtonClick = (val) => {
    console.log(val);
    setinputList(inputList.filter((e) => e.value !== val));
  };
  return (
    <>
      <div className={classes.toolbar} />
      <div style={{ height: "100vh" }}>
        <ErrorBox errors={["Test nahui erroras", "Test nahui erroras 2"]} />
        <Container style={{ paddingLeft: "100px" }}>
          <Grid container>
            <Grid item xs={12} style={{ display: "flex" }}>
              <Typography variant="h4" align="left" gutterBottom>
                Sukurti naują formą
              </Typography>
            </Grid>
            <Paper
              elevation={2}
              style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
            >
              <Grid item xs={12} style={{ display: "flex" }}>
                <TextField
                  style={{ width: "30vw" }}
                  label="Formos pavadinimas"
                ></TextField>
              </Grid>
              <Grid item xs={12} style={{ display: "flex", marginTop: "20px" }}>
                <TextField
                  style={{ width: "100%" }}
                  variant="outlined"
                  label="Formos aprašymas"
                  multiline
                  rows={5}
                ></TextField>
              </Grid>
            </Paper>
          </Grid>
          <Grid
            container
            spacing={3}
            style={{ marginTop: "0px", marginBottom: "20px" }}
          >
            {inputList.map((value) => (
              <FormItem
                deleteWhich={value.value}
                onDelete={onRemoveButtonClick}
              />
            ))}
            {console.log(inputList)}
          </Grid>
          <Button
            variant="contained"
            color="secondary"
            onClick={onAddButtonClick}
          >
            <AddCircleOutlineIcon style={{ marginRight: "5px" }} /> Pridėti
            naują elementą
          </Button>
          <Grid
            container
            display="flex"
            justify="flex-end"
            style={{ marginTop: "20px" }}
          >
            <Button variant="contained" style={{ marginRight: "10px" }}>
              <SaveAltIcon /> Išsaugoti
            </Button>
            <Button variant="contained" color="primary">
              <SendIcon /> Siųsti
            </Button>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default NewFormPage;
