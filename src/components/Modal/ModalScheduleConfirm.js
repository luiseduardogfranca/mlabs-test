import React, { useState, useEffect } from "react";
import { ContainerModalSchedule } from "./style";
import DialogImage from "../../assets/image/img-modal.png";
import { Button } from "../Button";

export const ModalScheduleConfirm = (props) => {
  return (
    <ContainerModalSchedule>
      <img src={DialogImage}></img>
      <h1>Agendado com sucesso!</h1>
      <Button onClick={props.onClose} color={"blue"} label="OK"></Button>
    </ContainerModalSchedule>
  );
};
