import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { converteDateTime } from "./common/utils/convertDateTime";

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
