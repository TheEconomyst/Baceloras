import React, { useState, useEffect } from "react";
import {
  Grid,
  Select,
  MenuItem,
  Paper,
  TextField,
  TextareaAutosize,
  InputLabel,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DropdownItem from "./DropdownItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

function elementChoice(ElementState) {
  if (ElementState == 1) {
    return <TextField label="Atsakymas"></TextField>;
  } else if (ElementState == 2) {
    return (
      <TextField
        multiline
        rows={3}
        variant="outlined"
        style={{ width: "50%" }}
        label="Ilgas atsakymas"
      ></TextField>
    );
  } else if (ElementState == 3) {
    //dropdown
    return <DropdownItem />;
  } else if (ElementState == 4) {
    return <DropdownItem />;
  } else if (ElementState == 5) {
    return <DropdownItem />;
  }
  //add here choices if needed
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
}));

function FormItem(props) {
  console.log(props);
  const [ElementState, setElementState] = useState(1);

  const handleChange = (event) => {
    setElementState(event.target.value);
  };

  const classes = useStyles();
  return (
    <Paper
      elevation={2}
      style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
    >
      <Grid container style={{ marginBottom: "20px" }}>
        <Grid container item xs={9}>
          <Grid item xs={12} style={{ display: "flex" }}>
            <TextField
              label="Klausimo pavadinimas"
              style={{ marginBottom: "20px", width: "50%" }}
            />
          </Grid>
          <Grid item xs={12} style={{ display: "flex" }}>
            {elementChoice(ElementState)}
          </Grid>
        </Grid>
        <Grid item xs={3} display="flex" justify="flex-end">
          <FormControl className={classes.formControl}>
            <InputLabel id="Type">Pasirinkimas</InputLabel>
            <Select
              label="Type"
              variant="outlined"
              value={ElementState}
              onChange={handleChange}
            >
              <MenuItem value={1}>Atsakymas</MenuItem>
              <MenuItem value={2}>Ilgas atsakymas</MenuItem>
              <MenuItem value={3}>Išskleidžiamasis meniu</MenuItem>
              <MenuItem value={4}>Žymimieji laukeliai</MenuItem>
              <MenuItem value={5}>Keli variantai</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container display="flex" justify="flex-end">
        <Button
          onClick={() => props.onDelete(props.deleteWhich)}
          variant="contained"
          color="secondary"
        >
          <DeleteIcon /> Ištrinti
        </Button>
      </Grid>
    </Paper>
  );
}

export default FormItem;
