import api from "./axios";

export const getBatches = async () => {
  // const response = await api.get("/batches");
  const response = await api.get("/public/batches");
  return response.data;
};

export const getBatch = async (slug) => {
  const response = await api.get(`/public/batches/${slug}`);
  return response.data;
};
