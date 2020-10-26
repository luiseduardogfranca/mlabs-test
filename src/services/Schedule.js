import { api } from "../api/api";

export const getAllSchedules = (callback) => {
  api("/schedules").then((data) => callback(data));
};
