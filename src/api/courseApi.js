import api from "./axios";

export const getCourses = async () => {
  const response = await api.get("/public/courses");
  return response.data;
};

export const getCourse = async (slug) => {
  const response = await api.get(`/public/courses/${slug}`);
  return response.data;
};
