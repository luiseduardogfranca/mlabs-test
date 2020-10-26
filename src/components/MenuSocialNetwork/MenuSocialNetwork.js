import React, { useState, useEffect } from "react";
import { sortByStatusAsc } from "../../common/utils/sortByStatus";
import { ButtonSocialNetwork } from "../Button";
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

export const MenuSocialNetwork = (props) => {
  const { arrSocialNetorks, setSocialNetworks } = props;

  const addSocialNetwork = (socialNetwork) => {
    if (setSocialNetworks) setSocialNetworks((el) => [...el, socialNetwork]);
  };

  const removeSocialNetwork = (id) => {
    if (arrSocialNetorks && setSocialNetworks && id) {
      let newArr = arrSocialNetorks.filter((el) => el.id != id);
      setSocialNetworks((el) => newArr);
    }
  };

  /* 
  TODO 
    - get all social medias from API
  */

  return (
    <ContainerMenu>
      {sortByStatusAsc(socialNetworks).map((el, key) => (
        <ButtonSocialNetwork
          addSocialNetwork={addSocialNetwork}
          removeSocialNetwork={removeSocialNetwork}
          socialNetwork={el}
          key={el.id}
        ></ButtonSocialNetwork>
      ))}
    </ContainerMenu>
  );
};
