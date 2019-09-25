import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";

import MainPage from "./main/main_page";
import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import TweetsContainer from "./tweets/tweets_container";
import TweetComposeContainer from "./tweets/tweet_compose_container";
import ProfileContainer from "./profile/profile_container";
import QuoteContainer from "./quotes/quote_container";
import PhotoContainer from "./photos/photo_container";

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
      <Route exact path="/quotes/:quote_id" component={QuoteContainer} />
      <Route exact path="/photos/:photo_id" component={PhotoContainer} />
      <ProtectedRoute
        exact
        path="/new_tweet"
        component={TweetComposeContainer}
      />
    </Switch>
  </div>
);

export default App;
