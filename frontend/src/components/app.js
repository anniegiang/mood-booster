import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import "./app.css";

import MainPage from "./main/main_page";
import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import TweetsContainer from "./tweets/tweets_container";
import TweetComposeContainer from "./tweets/tweet_compose_container";
import ProfileContainer from "./profile/profile_container";

const App = () => (
  <div className="app">
    <div className="app-container">
      <NavBarContainer />
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
        <ProtectedRoute
          exact
          path="/new_tweet"
          component={TweetComposeContainer}
        />
      </Switch>
    </div>
  </div>
);

export default App;
