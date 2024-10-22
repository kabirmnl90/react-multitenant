import axios from "axios";

const instance = axios.create({
  baseURL: `https://react-multitenant-server.onrender.com`,
});

export default instance;
