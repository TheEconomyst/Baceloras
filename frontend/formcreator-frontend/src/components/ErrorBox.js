import "../App.css";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { TextField } from "@material-ui/core";
import "fontsource-roboto";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import theme from "../theme";

const useStyles = makeStyles({
  errorbg: {
    backgroundColor: "#f7a8a6",
    width: "85%",
    padding: "15px",
  },
});

function ErrorBox(props) {
  const classes = useStyles();
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    setErrors(props.errors);
  }, []);
  return (
    <Container
      style={{
        marginBottom: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper className={classes.errorbg} elevation={2}>
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", marginBottom: "10px" }}
        >
          Klaida!
        </Typography>
        {errors.length > 1 ? (
          <ul>
            {errors.map((error) => (
              <li>
                <Typography variant="body">{error}</Typography>
              </li>
            ))}
          </ul>
        ) : (
          <Typography variant="body">{errors}</Typography>
        )}
      </Paper>
    </Container>
  );
}

export default ErrorBox;
