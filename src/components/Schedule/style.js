import styled from "styled-components";

export const GridSchedule = styled.div`
  display: grid;
  height: 90%;
  grid-template-areas: "Menu Preview";
  grid-template-columns: 45% 45%;
  justify-content: space-around;

  @media (max-width: 590px) {
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 90%;
    align-self: center;
  }
`;

export const GridScheduleMenu = styled.div`
  display: grid;
  height: 100%;
  grid-template-areas: "Config" "Input" "Upload";
  grid-template-columns: 100%;
  grid-template-rows: 20% 35% 35%;

  align-content: space-between;

  @media (max-width: 590px) {
    display: flex;
    flex-direction: column;
  }
`;

export const GridScheduleConfig = styled.div`
  grid-area: Config;
  display: grid;
  height: 100%;
  grid-template-areas: "SocialNetwork Date";
  grid-template-columns: 48% 48%;
  justify-content: space-around;

  @media (max-width: 590px) {
    display: flex;
    height: 210;
    flex-direction: column;
  }
`;

export const ContainerScheduleMenu = styled.div`
  grid-area: Menu;
  height: 100%;
  width: 100%;
`;

export const ContainerSchedulePreview = styled.div`
  grid-area: Preview;

  @media (max-width: 590px) {
    display: none;
`;

export const ContainerScheduleSocialNetwork = styled.div`
  grid-area: SocialNetwork;

  @media (max-width: 590px) {
    height: 110px;
    margin-bottom: 10px;
  }
`;

export const ContainerScheduleDate = styled.div`
  grid-area: Date;

  @media (max-width: 590px) {
    height: 100px;
    margin-bottom: 10px;
  }
`;

export const ContainerScheduleInput = styled.div`
  grid-area: Input;

  @media (max-width: 590px) {
    flex-grow: 10;
    margin-bottom: 10px;
  }
`;

export const ContainerScheduleUpload = styled.div`
  grid-area: Upload;
  @media (max-width: 590px) {
    flex-grow: 1;
  }
`;

export const ContainerPreviewButton = styled.div`
  display: none;

  @media (max-width: 590px) {
    margin-top: 10px;
    display: block;
    flex-grow: 1;
    margin-bottom: calc(var(--height-footbar) + 10px);

    button {
      width: 100%;
    }
  }
`;

export const ContainerInput = styled.div`
  display: -webkit-flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;
