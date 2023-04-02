import axios from "axios";

const baseUrl = `https://pixabay.com/api/`;
const key = `32988638-7dc6cfa09a74c02ef2991cefc`;

export async function fetchImages(nextName, page) {
  return axios(
    `${baseUrl}?image_type=photo&orientation=horizontal&q=${nextName}&key=${key}&per_page=12&page=${page}`
  ).then(({ data }) => {
    return data.hits;
  });
}
