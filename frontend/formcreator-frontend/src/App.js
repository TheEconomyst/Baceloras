import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "fontsource-roboto";
import NewFormPage from "./pages/NewFormPage";
import { ThemeProvider } from "@material-ui/core/styles";
import { HelmetProvider } from "react-helmet-async";
import theme from "./theme";
import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RemindPwdPage from "./pages/RemindPwdPage";
import ServiceView from "./pages/ServiceView";
import ServiceAddPage from "./pages/ServiceAddPage";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={MainPage} />
            <Route exact path={"/login"} component={LoginPage} />
            <Route exact path={"/register"} component={RegisterPage} />
            <Route exact path={"/newform"} component={NewFormPage} />
            <Route exact path={"/remindpassword"} component={RemindPwdPage} />
            <Route exact path={"/services"} component={ServiceView} />
            <Route exact path={"/services/add"} component={ServiceAddPage} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
