import React, { useState, useEffect } from "react";
import { ContainerUpload } from "./style";
import { Button } from "../Button";
import { ContainerComponent } from "../../styles/GlobalStyle";
import UploadIcon from "../../assets/icons/upload.svg";
import { InputFile } from "../Input/";
export const UploadImage = () => {
  return (
    <ContainerComponent>
      <ContainerUpload>
        <img src={UploadIcon}></img>
        <h1>Arraste e solte uma imagem aqui ou clique no botão abaixo</h1>
        <InputFile
          color={"blue"}
          outline
          label={"Pesquisar imagem"}
        ></InputFile>
      </ContainerUpload>
    </ContainerComponent>
  );
};
