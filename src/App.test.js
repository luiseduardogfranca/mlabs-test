import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import {
  converteDateTime,
  convertSPublicationDateToText,
  getTextOfDate,
} from "./common/utils/convertDateTime";

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("convertDateTime method when right date and time shouldn't return a error", () => {
  let date = "20/10/2020";
  let time = "12:20";

  let dateTime = converteDateTime(date, time);

  expect(dateTime).toEqual({
    year: 2020,
    month: 10,
    day: 20,
    hour: 12,
    minute: 20,
  });
});

test("convertDateTime method when wrong date and time shouldn't return a error", () => {
  let date = "12/2020";
  let time = "12";

  let dateTime = converteDateTime(date, time);

  expect(dateTime).toEqual(null);
});

test("getTextOfDate method when right date shouldn't return a error", () => {
  let date = "23/12/2020";

  let dateText = getTextOfDate(date);

  expect(dateText).toEqual("23 de Dezembro");
});

test("getTextOfDate method when wrong date shouldn't return a error", () => {
  let date = "23/12";

  let dateText = getTextOfDate(date);

  expect(dateText).toBeNull();
});

test("convertSPublicationDateToText method when right date shouldn't return a error", () => {
  let dateTime = new Date(2020, 11, 20, 12, 50);

  let dateTimeText = convertSPublicationDateToText(dateTime);

  expect(dateTimeText).toEqual("20/12/2020 às 12:50h");
});

test("convertSPublicationDateToText method when right date shouldn't return a error", () => {
  let dateTimeText = convertSPublicationDateToText(null);

  expect(dateTimeText).toBeNull();
});
