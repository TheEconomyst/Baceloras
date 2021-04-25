import {
  Button,
  Container,
  Grid,
  TextField,
  makeStyles,
  Paper,
  Typography,
  FormControl,
} from "@material-ui/core";
import React, { useState } from "react";
import theme from "../theme";

const useStyles = makeStyles({
  paper: {
    width: "75%",
    margin: "20px",
    padding: "20px",
  },
  input: {
    alignSelf: "center",
    width: "50%",
  },
  form: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  loginBtn: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  registerBtn: {
    backgroundColor: theme.palette.primary.contrastText,
    marginLeft: "10px",
  },
  loginField: {
    flexGrow: 1,
  },
  text: {
    marginBottom: "20px",
  },
});

function LoginPage() {
  const classes = useStyles();
  const [userName, setuserName] = useState("");
  const [Pwd, setPwd] = useState("");
  return (
    <>
      <Container className={classes.form}>
        <Paper elevation={2} className={classes.paper}>
          <Typography variant={"h4"} className={classes.text}>
            Prisijungti
          </Typography>

          <div>
            <Grid container>
              <Grid item xs={12} className={classes.form}>
                <TextField
                  className={classes.input}
                  label="El. paštas"
                  value={userName}
                  type="email"
                  variant="outlined"
                  required
                  onChange={(e) => {
                    setuserName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} className={classes.form}>
                <TextField
                  className={classes.input}
                  label="Slaptažodis"
                  value={Pwd}
                  type="password"
                  variant="outlined"
                  required
                  onChange={(e) => {
                    setPwd(e.target.value);
                  }}
                />
              </Grid>
              <Grid container display="flex" justify="flex-end" item xs={12}>
                <div className={classes.loginField}>
                  <Button className={classes.loginBtn}>PRISIJUNGTI</Button>
                </div>
                <Typography variant="body1" style={{ margin: "auto" }}>
                  Dar neturi paskyros?
                </Typography>
                <Button href="/register" className={classes.registerBtn}>
                  REGISTRUOTIS
                </Button>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Container>
    </>
  );
}

export default LoginPage;
