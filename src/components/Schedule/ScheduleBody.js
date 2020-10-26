import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import {
  ContainerScheduleMenu,
  ContainerSchedulePreview,
  GridSchedule,
  GridScheduleMenu,
  GridScheduleConfig,
  ContainerScheduleSocialNetwork,
  ContainerScheduleDate,
  ContainerScheduleInput,
  ContainerScheduleUpload,
  ContainerInput,
} from "./style";
import { Container, WrapperComponent } from "../../styles/GlobalStyle";
import { UploadImage } from "../UploadImage/";
import { InputDate, InputText } from "../Input";
import { MenuSocialNetwork } from "../MenuSocialNetwork/";

export const ScheduleBody = () => {
  const [socialNetworks, setSocialNetworks] = useState([]);
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState({ file: "", src: "" });
  const [date, setDate] = useState({ date: "", time: "" });

  useEffect(() => {
    if (socialNetworks) console.log(socialNetworks);
  }, [socialNetworks]);
  return (
    <Container>
      <GridSchedule>
        <ContainerScheduleMenu>
          <div style={{ width: "100%", height: "100%" }}>
            <GridScheduleMenu>
              <div>
                <GridScheduleConfig>
                  <ContainerScheduleSocialNetwork>
                    <WrapperComponent>
                      <h1>Redes Sociais</h1>
                      <MenuSocialNetwork
                        arrSocialNetorks={socialNetworks}
                        setSocialNetworks={setSocialNetworks}
                      ></MenuSocialNetwork>
                    </WrapperComponent>
                  </ContainerScheduleSocialNetwork>
                  <ContainerScheduleDate>
                    <WrapperComponent>
                      <h1>Data de publicação</h1>
                      <ContainerInput>
                        <InputDate
                          id={"input-date"}
                          value={date.date}
                          typeDate
                          placeholder={"DD/MM/AAAA"}
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
              </div>
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
          </div>
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
