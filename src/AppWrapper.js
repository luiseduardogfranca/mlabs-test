import React from "react";

export const AppWrapper = (props) => {
  return (
    <>
      <div id="App">
        <div className="content">
          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
};
