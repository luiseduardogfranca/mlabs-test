import React from "react";
import { Navbar } from "./components/Navbar/Navbar";

export const AppWrapper = (props) => {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
};
