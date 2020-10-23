import React, { useState, useEffect } from "react";
import { ContainerComponent, TextArea } from "../../../styles/GlobalStyle";
import { ContainerText } from "./style";

export const InputText = (props) => {
  const { setText } = props;

  const handleTextOnChange = (value) => {
    console.log(value);
    setText((el) => value);
  };

  return (
    <ContainerComponent>
      <ContainerText>
        <TextArea
          {...props}
          onChange={(ev) =>
            ev.target && ev.target.value
              ? handleTextOnChange(ev.target.value)
              : handleTextOnChange("")
          }
        ></TextArea>
      </ContainerText>
    </ContainerComponent>
  );
};
