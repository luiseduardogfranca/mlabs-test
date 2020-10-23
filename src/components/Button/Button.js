import React, { useState, useEffect } from "react";
import { Avatar } from "../Avatar/Avatar";
import { ContainerButton } from "./style";

export const Button = (props) => {
  const { label } = props;

  return <ContainerButton {...props}>{label}</ContainerButton>;
};
