import React, { useState, useEffect } from "react";
import { ContainerButtonClose } from "./style";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";

export const ButtonClose = (props) => {
  return (
    <ContainerButtonClose {...props}>
      <CloseIcon></CloseIcon>
    </ContainerButtonClose>
  );
};
