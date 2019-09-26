import React from "react";
import ReactDOM from "react-dom";
import jwt_decode from "jwt-decode";
import Root from "./components/root";
import configureStore from "./store/store";
import { setAuthToken } from "./util/session_api_util";
import { logout } from "./actions/session_actions";
import { fetchRandomContent } from "./actions/random_content_actions";
import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  const currentDay = new Date().getDate();

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser },
      content: {
        randomContent: {
          content: {},
          expiresIn: new Date().getDate() + 1 // 24 hours in ms
        }
      }
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

  if (
    store.getState().content.randomContent.expiresIn >= currentDay ||
    store.getState().content.randomContent.content === {}
  ) {
    store.dispatch(fetchRandomContent());
  }

  window.store = store;
  window.axios = axios;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
