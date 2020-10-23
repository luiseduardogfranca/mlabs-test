import React, { useState, useEffect, useRef } from "react";
import { ContainerUpload } from "./style";
import { Button } from "../Button";
import { ContainerComponent } from "../../styles/GlobalStyle";
import UploadIcon from "../../assets/icons/upload.svg";
import { InputFile } from "../Input/";
import { FileDrop } from "react-file-drop";

export const UploadImage = (props) => {
  const { setImageFile } = props;

  const handleUploadFile = (files) => {
    if (
      files !== undefined &&
      files[0] !== undefined &&
      setImageFile !== undefined
    ) {
      let file = files[0];
      setImageFile((el) => ({ ...el, file: file }));

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () =>
        setImageFile((el) => ({ ...el, src: reader.result }));
    }
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
            handleUpload={(event) =>
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
