import React, { useState, useEffect } from "react";
import { ContainerInputFile } from "./style";

export const InputFile = (props) => {
  const { label } = props;

  return (
    <ContainerInputFile {...props}>
      <label for={"upload-file"}>{label}</label>
      <input id={"upload-file"} type={"file"}></input>
    </ContainerInputFile>
  );
};
