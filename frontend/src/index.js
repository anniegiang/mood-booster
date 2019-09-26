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

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser },
      content: {
        randomContent: {
          videos: {},
          photos: {},
          quote: {},
          expiresIn: Date.now() + 8.64e7 // 24 hours in ms
        }
      }
    };
    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;
    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/login";
    }

    if (store.content.randomState.expiresIn >= currentTime) {
      store.dispatch(fetchRandomContent());
    }
  } else {
    store = configureStore({});
  }

  window.store = store;
  window.axios = axios;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
