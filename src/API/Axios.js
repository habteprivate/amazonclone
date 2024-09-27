import axios from "axios";

const axiosInstance = axios.create({
  // local host
  // baseURL: "http://127.0.0.1:5001/clone-8b30b/us-central1/app",
  // firebase
  // baseURL: "http://localhost:8061",
  // render
  baseURL: "https://amazon-api-wnwu.onrender.com",
});

export { axiosInstance };

// // "http://127.0.0.1:5001/clone-8b30b/us-central1/app";
