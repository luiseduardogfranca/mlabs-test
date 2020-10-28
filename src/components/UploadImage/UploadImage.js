import React, { useState, useEffect, useRef } from "react";
import { ContainerUpload } from "./style";
import { Button } from "../Button";
import { ContainerComponent } from "../../styles/GlobalStyle";
import UploadIcon from "../../assets/icons/upload.svg";
import { InputFile } from "../Input/";
import { FileDrop } from "react-file-drop";
import { checkExtensionFile } from "../../common/utils/checkExtensionFile";

export const UploadImage = (props) => {
  const { setImageFile } = props;

  const handleUploadFile = (files) => {
    if (
      files !== undefined &&
      files[0] !== undefined &&
      setImageFile !== undefined
    ) {
      let file = files[0];
      if (checkExtensionFile(file.name)) {
        setImageFile((el) => ({ ...el, file: file }));

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>
          setImageFile((el) => ({ ...el, src: reader.result }));
      } else {
        alert(
          "Formato de arquivo inválido. Apenas os seguintes formatos são aceitos: .jpeg, .jpg e .png!"
        );
      }
    }
  };

  return (
    <ContainerComponent style={{ overflowY: "auto" }}>
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
