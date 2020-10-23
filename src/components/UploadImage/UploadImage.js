import React, { useState, useEffect, useRef } from "react";
import { ContainerUpload } from "./style";
import { Button } from "../Button";
import { ContainerComponent } from "../../styles/GlobalStyle";
import UploadIcon from "../../assets/icons/upload.svg";
import { InputFile } from "../Input/";
import { FileDrop } from "react-file-drop";
export const UploadImage = () => {
  const handleUploadFile = (files) => {
    console.log(files);
  };

  return (
    <ContainerComponent>
      <FileDrop
        onDrop={(files, event) => {
          handleUploadFile(files);
        }}
      >
        <ContainerUpload>
          <img src={UploadIcon}></img>
          <h1>Arraste e solte uma imagem aqui ou clique no botão abaixo</h1>
          <InputFile
            onChange={(event) =>
              event.target && event.target.files
                ? handleUploadFile(event.target.files)
                : null
            }
            color={"blue"}
            outline
            label={"Pesquisar imagem"}
          ></InputFile>
        </ContainerUpload>
      </FileDrop>
    </ContainerComponent>
  );
};
