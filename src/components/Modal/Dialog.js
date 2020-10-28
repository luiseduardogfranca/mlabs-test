import React, { useState, useEffect } from "react";
import { ContainerDialog, DialogContent, WrapperDialogContent } from "./style";
import DialogImage from "../../assets/image/img-modal.png";
import { Button } from "../Button";

export const Dialog = (props) => {
  return (
    <ContainerDialog transparent={props.transparent} open={props.open}>
      {props.onClose && (
        <Button label={"fechar"} onClick={props.onClose}></Button>
      )}
      <WrapperDialogContent>{props.children}</WrapperDialogContent>
    </ContainerDialog>
  );
};
