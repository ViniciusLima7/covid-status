import axios from "axios";

const apiGets = axios.create({
  baseURL: "https://api.covid19api.com/",
});

export default apiGets;
