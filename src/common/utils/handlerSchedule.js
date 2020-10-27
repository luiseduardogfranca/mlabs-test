import { ca } from "date-fns/locale";
import { SCHEDULE_NAME_TABLE } from "../../database";
import { converteDateTime } from "./convertDateTime";

export const createSchedule = (socialNetworks, date, time, text, imageObj) => {
  //generateID
  socialNetworks =
    socialNetworks && socialNetworks.length
      ? socialNetworks.map((el) => el.id)
      : [];

  let objDateTime = converteDateTime(date, time);

  if (objDateTime)
    date = new Date(
      objDateTime.year,
      objDateTime.month - 1,
      objDateTime.day,
      objDateTime.hour,
      objDateTime.minute
    );

  return {
    id: Math.floor(Math.random() * 1000) + 1,
    social_network_key: socialNetworks,
    media: imageObj && imageObj.src ? imageObj.src : null,
    text: text ? text.trim() : null,
    publication_date: date || null,
    status_key: 1,
  };
};

export const saveSchedule = (scheduleObj) => {
  let arrSchedules = JSON.parse(localStorage.getItem(SCHEDULE_NAME_TABLE));

  if (arrSchedules && scheduleObj) {
    let query = arrSchedules.filter((el) => el.id == scheduleObj.id);
    if (query && query.length == 0)
      try {
        localStorage.setItem(
          SCHEDULE_NAME_TABLE,
          JSON.stringify([...arrSchedules, scheduleObj])
        );
        return true;
      } catch (err) {
        console.log(err);
      }
  } else {
    if (scheduleObj) {
      try {
        localStorage.setItem(
          SCHEDULE_NAME_TABLE,
          JSON.stringify([scheduleObj])
        );
        return true;
      } catch (err) {
        console.log(err);
      }
    }
  }

  return false;
};

export const getSchedules = () => {
  let arrSchedules = JSON.parse(localStorage.getItem(SCHEDULE_NAME_TABLE));
  return arrSchedules;
};

export const clearDatabase = () => {
  localStorage.clear();
};
