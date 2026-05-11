import axios from "axios";

const wpAPI = axios.create({
  baseURL: "https://ahaan-admin.ahaanmedia.com/wp-json/wp/v2",
  timeout: 30000,
  headers: {
    Accept: "application/json",
  },
});

const WordpressAPI = wpAPI;

export const getAllCareers = async () => {
  try {
    const response = await wpAPI.get("/career?_embed");

    return response.data || [];
  } catch (error) {
    console.error(
      "❌ Error fetching careers:",
      error.message
    );

    return [];
  }
};

export const getCareerBySlug = async (slug) => {
  try {
    const response = await wpAPI.get(
      `/career?slug=${slug}&_embed`
    );

    return response.data?.[0] || null;
  } catch (error) {
    console.error(
      "❌ Error fetching career details:",
      error.message
    );

    return null;
  }
};

export default WordpressAPI; 