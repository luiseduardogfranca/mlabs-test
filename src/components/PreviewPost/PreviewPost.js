import React, { useState, useEffect } from "react";
import {
  ContainerCard,
  ContainerCardEmpty,
  ContainerPreviewPost,
} from "./style";
import CardEmpty from "../../assets/image/post-preview.svg";
import { Button } from "../Button";

export const PreviewPost = (props) => {
  const { socialNetworks } = props;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {socialNetworks && socialNetworks.length && socialNetworks.length > 0 ? (
        <ContainerPreviewPost>
          {socialNetworks.map((el, key) => (
            <ContainerCard></ContainerCard>
          ))}
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
