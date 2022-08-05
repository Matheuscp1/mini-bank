import axios from "axios";

const HOST = process.env.REACT_APP_SERVER_HOST ?? "";
const PORT = process.env.REACT_APP_SERVER_PORT ?? 5000;
const api = axios.create({
  baseURL: `http://${HOST}:${PORT}/api/account`,
  timeout: 1000,
});

export default api;
