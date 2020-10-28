import React, { useState, useEffect } from "react";
import DialogImage from "../../assets/image/img-modal.png";
import { TitleComponent, WrapperComponent } from "../../styles/GlobalStyle";
import { Button, ButtonClose } from "../Button";
import { ContainerModalPreview, ContainerModalPreviewCard } from "./style";

export const ModalPreview = (props) => {
  return (
    <ContainerModalPreview>
      <WrapperComponent overflowY>
        <TitleComponent>
          <h1>Vizualização de post</h1>
          <ButtonClose onClick={props.onClose}>fechar</ButtonClose>
        </TitleComponent>
        <ContainerModalPreviewCard>{props.children}</ContainerModalPreviewCard>
      </WrapperComponent>
    </ContainerModalPreview>
  );
};
