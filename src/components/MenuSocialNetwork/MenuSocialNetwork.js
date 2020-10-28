import React, { useState, useEffect } from "react";
import { sortByStatusAsc } from "../../common/utils/sortBy";
import { getAllSocialNetworks } from "../../services/SocialNetwork";
import { ButtonSocialNetwork } from "../Button";
import { ContainerMenu } from "./style";

export const MenuSocialNetwork = (props) => {
  const { arrSocialNetorks, setSocialNetworks } = props;

  const [resSocialNetworks, setResSocialNetworks] = useState([]);

  const addSocialNetwork = (socialNetwork) => {
    if (setSocialNetworks) setSocialNetworks((el) => [...el, socialNetwork]);
  };

  const removeSocialNetwork = (id) => {
    if (arrSocialNetorks && setSocialNetworks && id) {
      let newArr = arrSocialNetorks.filter((el) => el.id != id);
      setSocialNetworks((el) => newArr);
    }
  };

  if (resSocialNetworks && resSocialNetworks.length == 0)
    getAllSocialNetworks((call) =>
      setResSocialNetworks((el) => (call && call.data ? call.data : null))
    );

  return (
    <ContainerMenu>
      {sortByStatusAsc(resSocialNetworks).map((el, key) => (
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
