import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("API Error:", {
        status: error.response.status,
        url: error.config?.url,
        data: error.response.data,
      });
    } else if (error.request) {
      console.error("Network Error: Server did not respond.");
    } else {
      console.error("Axios Error:", error.message);
    }
    return Promise.reject(error);
  },
);

export default api;
