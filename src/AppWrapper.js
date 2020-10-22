import React from "react";
import { Navbar } from "./components/Navbar/Navbar";

export const AppWrapper = (props) => {
  return (
    <>
      <div style={{ height: "100%" }}>
        <Navbar />
        <div className="container-app">{props.children}</div>
      </div>
    </>
  );
};
