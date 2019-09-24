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
import VideoContainer from './video/video_container';

const App = () => (
  <div>
    
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <Route exact path="/videos/:video_id" component={VideoContainer} />
      
    </Switch>
  </div>
);

export default App;
