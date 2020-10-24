import React, { useState, useEffect } from "react";
import { ButtonSocialMedia } from "../Button";
import { ContainerMenu } from "./style";

let socialNetworks = [
  {
    id: 1,
    name: "Facebook",
    icon: "facebook-f",
    status: "disabled",
  },
  {
    id: 2,
    name: "Linkedin",
    icon: "linkedin-in",
    status: "enabled",
  },
  {
    id: 3,
    name: "Instagram",
    icon: "instagram",
    status: "enabled",
  },
  {
    id: 4,
    name: "Youtube",
    icon: "youtube",
    status: "disabled",
  },
  {
    id: 5,
    name: "Pinterest",
    icon: "pinterest-p",
    status: "disabled",
  },
  {
    id: 6,
    name: "Twitter",
    icon: "twitter",
    status: "disabled",
  },
];

export const MenuSocialMedia = (props) => {
  const {} = props;

  /* 
  TODO 
    - get all social medias from API
  */

  return (
    <ContainerMenu>
      <ButtonSocialMedia checked></ButtonSocialMedia>
      <ButtonSocialMedia disabled></ButtonSocialMedia>
      <ButtonSocialMedia></ButtonSocialMedia>
      <ButtonSocialMedia></ButtonSocialMedia>
      <ButtonSocialMedia></ButtonSocialMedia>
      <ButtonSocialMedia></ButtonSocialMedia>
    </ContainerMenu>
  );
};
