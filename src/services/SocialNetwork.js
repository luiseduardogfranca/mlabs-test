import { api } from "../api/api";

export const getAllSocialNetworks = (callback) => {
  api("/social-networks").then((data) => callback(data));
};
