import { format, getMonth } from "date-fns";

const months = [
  { month: 0, name: "Janeiro" },
  { month: 1, name: "Fevereiro" },
  { month: 2, name: "Março" },
  { month: 3, name: "Abril" },
  { month: 4, name: "Maio" },
  { month: 5, name: "Junho" },
  { month: 6, name: "Julho" },
  { month: 7, name: "Agosto" },
  { month: 8, name: "Setembro" },
  { month: 9, name: "Outubro" },
  { month: 10, name: "Novembro" },
  { month: 11, name: "Dezembro" },
];

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
  } else if (date && !time) {
    let newDate = date.split("/").map((el) => parseInt(el));
    if (newDate.length == 3) {
      return {
        year: newDate[2],
        month: newDate[1],
        day: newDate[0],
      };
    }
  }

  return null;
};

export const getTextOfDate = (date) => {
  let dateObj = converteDateTime(date);

  if (dateObj) {
    let month = getMonth(
      new Date(dateObj.year, dateObj.month - 1, dateObj.day)
    );
    let monthName = months.filter((el) => el.month == month);

    if (monthName && monthName.length > 0)
      return `${dateObj.day} de ${monthName[0].name}`;
  }
  return null;
};

export const convertSPublicationDateToText = (dateTime) => {
  let newDate = format(new Date(dateTime), "dd/MM/yyyy");
  let newTime = format(new Date(dateTime), "HH:mm");

  return `${newDate} às ${newTime}h`;
};
