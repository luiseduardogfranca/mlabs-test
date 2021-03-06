import React, { useState, useEffect } from "react";
import {
  ContainerComponent,
  Input,
  TextArea,
} from "../../../styles/GlobalStyle";
import { AdormentLeft, ContainerInputDate, InputRight } from "./style";
import InputMask from "react-input-mask";
import CalendarIcon from "../../../assets/icons/calendar.svg";
import ClockIcon from "../../../assets/icons/clock.svg";

export const InputDate = (props) => {
  const { value, setValue, typeDate, typeTime } = props;

  const handleUpdateValue = (value) => {
    if (setValue) setValue(value);
  };

  return (
    <ContainerInputDate>
      <AdormentLeft>
        <img src={typeDate ? CalendarIcon : typeTime ? ClockIcon : null}></img>
      </AdormentLeft>
      <InputRight>
        <InputMask
          mask={typeDate ? "99/99/9999" : typeTime ? "99:99" : null}
          value={value}
          onChange={({ target }) =>
            target && target.value
              ? handleUpdateValue(target.value)
              : handleUpdateValue("")
          }
        >
          {() => <Input {...props}></Input>}
        </InputMask>
      </InputRight>
    </ContainerInputDate>
  );
};
