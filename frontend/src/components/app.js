import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import MainPage from "./main/main_page";
// import NavBarContainer from "./nav/navbar_container";
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";

const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={MainPage} />
  </Switch>
);

export default App;
