import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8680/api/account",
});

export default api;
