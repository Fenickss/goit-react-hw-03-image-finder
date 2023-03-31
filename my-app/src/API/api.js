import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

axios.defaults.params = {
  key: "32988638-7dc6cfa09a74c02ef2991cefc",
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,
  page: 1,
};
export const fetchImages = async (nextName) => {
  const response = await axios.get(`?q=${nextName}`);

  return response.data;
};
