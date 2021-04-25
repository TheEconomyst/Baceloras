import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import CameraIcon from "@material-ui/icons/Camera";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import HomeIcon from "@material-ui/icons/Home";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles({
  title: {
    "font-size": "1.2rem",
    paddingLeft: "4px",
    paddingRight: "24px",
    fontSize: "20px",
    color: "#EDE7E3",
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
  },
  icons: {
    color: "#EDE7E3",
    fontSize: "45px",
  },
  toolbar: {
    backgroundColor: "#2978A0",
  },
  btn: {
    backgroundColor: "inherit",
    color: "white",
    fontSize: "18px",
  },
});

function NavBar() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <CameraIcon className={classes.icons} />
            <h1 className={classes.title}>Form Creator </h1>
            <Button href="/login" className={classes.btn}>
              <LockOpenIcon /> PRISIJUNGTI
            </Button>
            <Button href="/newform" className={classes.btn}>
              <CreateIcon /> SUKURTI NAUJĄ FORMĄ
            </Button>
            <Button href="/" className={classes.btn}>
              <HomeIcon /> NAMAI
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </div>
    </>
  );
}

export default NavBar;
