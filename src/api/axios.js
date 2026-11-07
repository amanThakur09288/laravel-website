// import axios from "axios";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
//   timeout: 10000,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// });

// api.interceptors.request.use(
//   (config) => {
//     console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
//     return config;
//   },
//   (error) => {
//     console.error("Request Error:", error);
//     return Promise.reject(error);
//   },
// );

// api.interceptors.response.use(
//   (response) => {
//     console.log(`API Response: ${response.status} ${response.config.url}`);
//     return response;
//   },
//   (error) => {
//     if (error.response) {
//       console.error("API Error:", {
//         status: error.response.status,
//         url: error.config?.url,
//         data: error.response.data,
//       });
//     } else if (error.request) {
//       console.error("Network Error: Server did not respond.");
//     } else {
//       console.error("Axios Error:", error.message);
//     }
//     return Promise.reject(error);
//   },
// );

// export default api;

import axios from "axios";

const apiBaseURL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: apiBaseURL,
  timeout: 15000,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

export const getCsrfCookie = async () => {
  const apiOrigin = new URL(apiBaseURL).origin;

  return axios.get(`${apiOrigin}/sanctum/csrf-cookie`, {
    withCredentials: true,
    withXSRFToken: true,
    headers: {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
  });
};

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("API Error:", {
        status: error.response.status,
        url: error.config?.url,
        data: error.response.data,
      });
    } else {
      console.error("Network/API Error:", error.message);
    }

    return Promise.reject(error);
  },
);

export default api;
