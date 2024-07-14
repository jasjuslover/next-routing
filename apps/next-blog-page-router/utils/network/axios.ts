import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const authApi = axios.create({
  baseURL: "http://localhost:3000",
});

export { api, authApi };
