import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8061",
});

export { axiosInstance };

// // "http://127.0.0.1:5001/clone-8b30b/us-central1/app";
