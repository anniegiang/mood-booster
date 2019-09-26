import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import "./app.css";
import MainPageContainer from "./main/main_page_container";
import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import TweetsContainer from "./tweets/tweets_container";
import TweetComposeContainer from "./tweets/tweet_compose_container";
import ProfileContainer from "./profile/profile_container";
import QuoteContainer from "./quotes/quote_container";
import PhotoContainer from "./photos/photo_container";
import VideoContainer from "./video/video_container";

const App = () => (
  <div className="app">
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={MainPageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      {/* <ProtectedRoute exact path="/tweets" component={TweetsContainer} /> */}
      <Route exact path="/quotes/:quote_id" component={QuoteContainer} />
      <Route exact path="/photos/:photo_id" component={PhotoContainer} />
      <Route exact path="/videos/:video_id" component={VideoContainer} />
      <ProtectedRoute
        exact
        path="/new_tweet"
        component={TweetComposeContainer}
      />
    </Switch>
  </div>
);

export default App;
