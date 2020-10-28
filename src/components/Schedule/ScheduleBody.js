import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import { Link, useHistory } from "react-router-dom";
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
  ContainerPreviewButton,
} from "./style";
import {
  Container,
  TitleComponent,
  WrapperComponent,
} from "../../styles/GlobalStyle";
import { UploadImage } from "../UploadImage/";
import { InputDate, InputText } from "../Input";
import { MenuSocialNetwork } from "../MenuSocialNetwork/";
import { Footer } from "../Footer";
import {
  createSchedule,
  saveSchedule,
  clearDatabase,
} from "../../common/utils/handlerSchedule";
import { Dialog, ModalPreview, ModalScheduleConfirm } from "../Modal/";
import { PreviewPost } from "../PreviewPost/PreviewPost";

export const ScheduleBody = () => {
  const [socialNetworks, setSocialNetworks] = useState([]);
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState({ file: "", src: "" });
  const [date, setDate] = useState({ date: "", time: "" });
  const [openModal, setOpenModal] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);

  const history = useHistory();

  const handleSchedule = () => {
    let schedule = createSchedule(
      socialNetworks,
      date.date,
      date.time,
      text,
      imageFile
    );
    if (schedule) {
      if (saveSchedule(schedule)) {
        setOpenModal((el) => true);
      } else {
        let res = window.confirm(
          "Opss, você chegou ao seu limites de agendamento, você deseja limpar o banco?"
        );
        if (res) clearDatabase();
      }
    }
  };

  const checkForm = (socialNetworks, date, time, text, imageObj) => {
    if (
      socialNetworks &&
      socialNetworks.length > 0 &&
      date &&
      time &&
      text &&
      imageObj &&
      imageObj.src
    )
      return true;
    return false;
  };
  return (
    <Container>
      <Dialog open={openModal}>
        <ModalScheduleConfirm
          onClose={() => {
            setOpenModal((el) => false);
            history.push("/schedule-list");
          }}
        />
      </Dialog>
      <Dialog transparent open={openPreview}>
        <ModalPreview
          class={"bounceInUp"}
          onClose={() => {
            setOpenPreview((el) => false);
          }}
        >
          <PreviewPost
            image={imageFile.src}
            text={text}
            date={date}
            socialNetworks={socialNetworks}
          ></PreviewPost>
        </ModalPreview>
      </Dialog>
      <GridSchedule>
        <ContainerScheduleMenu>
          <div style={{ width: "100%", height: "100%" }}>
            <GridScheduleMenu>
              <div>
                <GridScheduleConfig>
                  <ContainerScheduleSocialNetwork>
                    <WrapperComponent>
                      <TitleComponent>
                        <h1>Redes Sociais</h1>
                      </TitleComponent>
                      <MenuSocialNetwork
                        arrSocialNetorks={socialNetworks}
                        setSocialNetworks={setSocialNetworks}
                      ></MenuSocialNetwork>
                    </WrapperComponent>
                  </ContainerScheduleSocialNetwork>
                  <ContainerScheduleDate>
                    <WrapperComponent>
                      <TitleComponent>
                        <h1>Data de publicação</h1>
                      </TitleComponent>
                      <ContainerInput>
                        <InputDate
                          id={"input-date"}
                          value={date.date}
                          typeDate
                          placeholder={"DD/MM/AAAA"}
                          setValue={(value) =>
                            setDate((el) => ({ ...el, date: value }))
                          }
                        ></InputDate>
                        <InputDate
                          id={"input-time"}
                          value={date.time}
                          typeTime
                          placeholder="HH:MM"
                          setValue={(value) =>
                            setDate((el) => ({ ...el, time: value }))
                          }
                        ></InputDate>
                      </ContainerInput>
                    </WrapperComponent>
                  </ContainerScheduleDate>
                </GridScheduleConfig>
              </div>
              <ContainerScheduleInput>
                <WrapperComponent>
                  <TitleComponent>
                    <h1>Texto do post</h1>
                  </TitleComponent>
                  <InputText
                    placeholder={"Aqui vai o texto descritivo desse post"}
                    setText={setText}
                  ></InputText>
                </WrapperComponent>
              </ContainerScheduleInput>

              <ContainerScheduleUpload>
                <WrapperComponent>
                  <TitleComponent>
                    <h1>Upload do post</h1>
                  </TitleComponent>
                  <UploadImage setImageFile={setImageFile}></UploadImage>
                </WrapperComponent>
              </ContainerScheduleUpload>
              <ContainerPreviewButton>
                <Button
                  onClick={() => setOpenPreview((el) => true)}
                  color={"orange"}
                  label={"Visualizar post"}
                ></Button>
              </ContainerPreviewButton>
            </GridScheduleMenu>
          </div>
        </ContainerScheduleMenu>

        <ContainerSchedulePreview>
          <WrapperComponent>
            <TitleComponent>
              <h1>Visualização do post</h1>
            </TitleComponent>
            <PreviewPost
              image={imageFile.src}
              text={text}
              date={date}
              socialNetworks={socialNetworks}
            ></PreviewPost>
          </WrapperComponent>
        </ContainerSchedulePreview>
      </GridSchedule>
      <Footer
        handleSchedule={() => handleSchedule()}
        scheduleDisabled={
          !checkForm(socialNetworks, date.date, date.time, text, imageFile)
        }
      />
    </Container>
  );
};
