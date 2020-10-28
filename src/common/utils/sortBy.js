export const sortByStatusAsc = (arrObjects) => {
  if (arrObjects && arrObjects.length > 0) {
    let arrDisable = arrObjects.filter((el) => el.status == "disabled");
    let arrEnable = arrObjects.filter((el) => el.status == "enabled");
    return [...arrEnable, ...arrDisable];
  }
  return arrObjects;
};

export const sortSchedulesByDateAsc = (arrShedules, key) => {
  if (!arrShedules || !key) return null;

  arrShedules.sort((scheduleA, scheduleB) => {
    let dateA = new Date(scheduleA[key]);
    let dateB = new Date(scheduleB[key]);

    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;
    return 0;
  });

  return arrShedules;
};

export const sortSchedulesByDateDesc = (arrShedules, key) => {
  if (!arrShedules || !key) return null;

  arrShedules.sort((scheduleA, scheduleB) => {
    let dateA = new Date(scheduleA[key]);
    let dateB = new Date(scheduleB[key]);

    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    return 0;
  });

  return arrShedules;
};
