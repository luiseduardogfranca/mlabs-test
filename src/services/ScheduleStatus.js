import { api } from "../api/api";

export const getAllScheduleStatus = (callback) => {
  api("/schedules-status").then((data) => callback(data));
};
