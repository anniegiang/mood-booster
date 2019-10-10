import axios from "axios";

// send our authorization token with every request by setting the request header

// set or delete the common header dependent on whether the token is passed into our method
export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const signup = userData => {
  return axios.post("/api/users/register", userData);
};

export const login = userData => {
  return axios.post("/api/users/login", userData);
};
