import React, { useState, useEffect } from "react";
import { ContainerInputFile } from "./style";

export const InputFile = (props) => {
  const { label } = props;

  return (
    <ContainerInputFile {...props}>
      <label htmlFor={"upload-file"}>{label}</label>
      <input
        onChange={props.handleUpload}
        id={"upload-file"}
        type={"file"}
      ></input>
    </ContainerInputFile>
  );
};
