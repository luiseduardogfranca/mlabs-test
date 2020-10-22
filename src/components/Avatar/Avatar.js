import React from "react";
import AvatarIcon from "../../assets/image/avatar.svg";
import { ContainerAvatar } from "./style";

export const Avatar = () => {
  return (
    <ContainerAvatar>
      <img src={AvatarIcon} />
      <h1>Anselmo Carlos</h1>
    </ContainerAvatar>
  );
};
