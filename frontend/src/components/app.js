import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import "./app.css";
import MainPageContainer from "./main/main_page_container";
import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import QuoteContainer from "./quotes/quote_container";
import PhotoContainer from "./photos/photo_container";
import VideoContainer from "./video/video_container";
import FormContainer from "./form/form_container";
import SearchContainer from "./search/search_container";
import AboutPage from "./main/about_page";
import FavoritesContainer from './favorites/favorites_container'

const App = () => (
  <div className="app">
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={AboutPage} />
      <Route exact path="/home" component={MainPageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/favorites" component={FavoritesContainer} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/quotes/:quote_id" component={QuoteContainer} />
      <Route exact path="/photos/:photo_id" component={PhotoContainer} />
      <Route exact path="/form" component={FormContainer} />
      <Route exact path="/search" component={SearchContainer} />
      <Route exact path="/videos/:video_id" component={VideoContainer} />
    </Switch>
  </div>
);

export default App;
