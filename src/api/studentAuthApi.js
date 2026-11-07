// import api, { getCsrfCookie } from "./axios";

// export const getCurrentStudent = async () => {
//   const response = await api.get("/student/user");
//   return response.data?.data?.user ?? null;
// };

// export const registerStudent = async (data) => {
//   await getCsrfCookie();

//   const response = await api.post("/student/register", data);

//   return response.data?.data?.user ?? null;
// };

// export const loginStudent = async (data) => {
//   await getCsrfCookie();

//   const response = await api.post("/student/login", data);

//   return response.data?.data?.user ?? null;
// };

// export const logoutStudent = async () => {
//   const response = await api.post("/student/logout");
//   return response.data;
// };

import api, { getCsrfCookie } from "./axios";

export const registerStudent = async (data) => {
  await getCsrfCookie();

  const response = await api.post("/student/register", data);

  return response.data?.data?.user;
};

export const loginStudent = async (data) => {
  await getCsrfCookie();

  const response = await api.post("/student/login", data);

  return response.data?.data?.user;
};

export const getCurrentStudent = async () => {
  const response = await api.get("/student/user");

  return response.data?.data?.user ?? null;
};

export const logoutStudent = async () => {
  const response = await api.post("/student/logout");

  return response.data;
};
