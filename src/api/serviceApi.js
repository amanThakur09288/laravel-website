import api from "./axios";

export const getServices = async () => {
    const response = await api.get("/public/services");

    return response.data;
};

export const getService = async (slug) => {
    const response = await api.get(
        `/public/services/${slug}`
    );

    return response.data;
};