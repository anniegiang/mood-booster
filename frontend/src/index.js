import React from "react";
import ReactDOM from "react-dom";
import jwt_decode from "jwt-decode";
import Root from "./components/root";
import configureStore from "./store/store";
import { setAuthToken } from "./util/session_api_util";
import { fetchUser, saveContent } from "./util/user_api_util";
import { updateComment } from "./util/comments.util";
import { logout } from "./actions/session_actions";
import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser }
    };
    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;
    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else {
    store = configureStore({});
  }

  window.store = store;
  window.axios = axios;
  window.fetchUser = fetchUser;
  window.saveContent = saveContent;
  window.updateComment = updateComment;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
