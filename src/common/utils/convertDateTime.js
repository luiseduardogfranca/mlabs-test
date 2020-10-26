export const converteDateTime = (date, time) => {
  if (date && time) {
    let newDate = date.split("/").map((el) => parseInt(el));
    let newTime = time.split(":").map((el) => parseInt(el));
    if (newDate.length == 3 && newTime.length == 2) {
      return {
        year: newDate[2],
        month: newDate[1],
        day: newDate[0],
        hour: newTime[0],
        minute: newTime[1],
      };
    }
  }

  return null;
};
