import React, { useState, useEffect } from "react";
import {
  ContainerCard,
  ContainerCardEmpty,
  ContainerPreviewPost,
} from "./style";
import CardEmpty from "../../assets/image/post-preview.svg";
import { Button } from "../Button";
import { CardIntagram } from "./CardInstagram";
import { CardLinkedin } from "./CardLinkedin";

export const PreviewPost = (props) => {
  const { socialNetworks } = props;

  const socialNetworkOptins = [
    { key: "instagram", icon: <CardIntagram {...props} /> },
    { key: "linkedin-in", icon: <CardLinkedin {...props} /> },
  ];

  const getCard = (iconName, socialNetworkOptins) => {
    socialNetworkOptins = socialNetworkOptins.filter(
      (el) => el.key == iconName
    );

    if (socialNetworkOptins.length > 0) {
      let iconObj = socialNetworkOptins[0];
      return iconObj && iconObj.icon ? iconObj.icon : null;
    }

    return null;
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {socialNetworks && socialNetworks.length && socialNetworks.length > 0 ? (
        <ContainerPreviewPost>
          {socialNetworks.map((el, key) =>
            getCard(el.icon, socialNetworkOptins)
          )}
        </ContainerPreviewPost>
      ) : (
        <ContainerCardEmpty>
          <h1>
            Aguardando conteúdo. Informe os canais e as mídias desejadas para
            visualização.
          </h1>
          <img src={CardEmpty}></img>
        </ContainerCardEmpty>
      )}
    </div>
  );
};
