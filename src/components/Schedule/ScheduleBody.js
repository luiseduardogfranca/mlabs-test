import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import {
  ContainerScheduleMenu,
  ContainerSchedulePreview,
  GridSchedule,
  GridScheduleMenu,
  GridScheduleConfig,
  ContainerScheduleSocialMedia,
  ContainerScheduleDate,
  ContainerScheduleInput,
  ContainerScheduleUpload,
} from "./style";
import { Container, WrapperComponent } from "../../styles/GlobalStyle";
import { UploadImage } from "../UploadImage/";

export const ScheduleBody = () => {
  const socialMedias = {
    INSTAGRAM: false,
    LINKEDIN: false,
    YOUTUBE: false,
    PINTEREST: false,
    TWITTER: false,
    FACEBOOK: false,
  };

  const [socialMediaSelected, setSocialMediaSelected] = useState(socialMedias);
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState({ file: "", src: "" });
  const [date, setDate] = useState("");

  // useEffect(() => {
  //   if (imageFile) console.log(imageFile);
  // }, [imageFile]);

  return (
    <Container>
      <GridSchedule>
        <ContainerScheduleMenu>
          <GridScheduleMenu>
            <GridScheduleConfig>
              <ContainerScheduleSocialMedia>
                <WrapperComponent>
                  <h1>Redes Sociais</h1>
                  <div></div>
                </WrapperComponent>
              </ContainerScheduleSocialMedia>
              <ContainerScheduleDate>
                <WrapperComponent>
                  <h1>Data de publicação</h1>
                  <div></div>
                </WrapperComponent>
              </ContainerScheduleDate>
            </GridScheduleConfig>

            <ContainerScheduleInput>
              <WrapperComponent>
                <h1>Texto do post</h1>
                <div></div>
              </WrapperComponent>
            </ContainerScheduleInput>
            <ContainerScheduleUpload>
              <WrapperComponent>
                <h1>Upload do post</h1>
                <UploadImage setImageFile={setImageFile}></UploadImage>
              </WrapperComponent>
            </ContainerScheduleUpload>
          </GridScheduleMenu>
        </ContainerScheduleMenu>

        <ContainerSchedulePreview>
          <WrapperComponent>
            <h1>Visualização do post</h1>
            <img src={imageFile.src}></img>
          </WrapperComponent>
        </ContainerSchedulePreview>
      </GridSchedule>
    </Container>
  );
};
