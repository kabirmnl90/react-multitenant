import axios from "axios";

const instance = axios.create({
  baseURL: `https://react-multitenant-server.onrender.com:4000`,
});

export default instance;
