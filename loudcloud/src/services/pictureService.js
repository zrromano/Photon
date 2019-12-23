import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/pictures";

export function getPictures() {
  return http.get(apiEndpoint);
}

export function getPictureByTitle(title) {
  return http.get(`${apiEndpoint}/${title}`);
}

export function addPictures(pictures) {
  fetch(apiEndpoint, { method: "POST", body: pictures })
    .then(res => res.json())
    .then(images => {
      return images;
    });
}

export function updatePicture(picture) {
  return null;
}
