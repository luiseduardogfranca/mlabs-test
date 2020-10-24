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
  ContainerInput,
} from "./style";
import { Container, WrapperComponent } from "../../styles/GlobalStyle";
import { UploadImage } from "../UploadImage/";
import { InputDate, InputText } from "../Input";
import { MenuSocialMedia } from "../MenuSocialMedia/";

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
  const [date, setDate] = useState({ date: "", time: "" });

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
                  <MenuSocialMedia
                    socialMedias={setSocialMediaSelected}
                  ></MenuSocialMedia>
                </WrapperComponent>
              </ContainerScheduleSocialMedia>
              <ContainerScheduleDate>
                <WrapperComponent>
                  <h1>Data de publicação</h1>
                  <ContainerInput>
                    <InputDate
                      id={"input-date"}
                      value={date.date}
                      typeDate
                      placeholder={"DD/MM"}
                      setValue={(target) =>
                        setDate((el) => ({ ...el, date: target.value }))
                      }
                    ></InputDate>
                    <InputDate
                      id={"input-time"}
                      value={date.time}
                      typeTime
                      placeholder="HH:MM"
                      setValue={(target) =>
                        setDate((el) => ({ ...el, time: target.value }))
                      }
                    ></InputDate>
                  </ContainerInput>
                </WrapperComponent>
              </ContainerScheduleDate>
            </GridScheduleConfig>

            <ContainerScheduleInput>
              <WrapperComponent>
                <h1>Texto do post</h1>
                <InputText
                  placeholder={"Aqui vai o texto descritivo desse post"}
                  setText={setText}
                ></InputText>
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
            {text}
          </WrapperComponent>
        </ContainerSchedulePreview>
      </GridSchedule>
    </Container>
  );
};
