const axios = require("axios");

export const fetchRandomContent = () => {
  return axios.get("/api/random/");
};
