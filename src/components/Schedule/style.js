import styled from "styled-components";

export const GridSchedule = styled.div`
  display: grid;
  height: 90%;
  grid-template-areas: "Menu Preview";
  grid-template-columns: 45% 45%;
  justify-content: space-around;

  @media (max-width: 590px) {
    grid-template-areas: "Menu" "Preview";
    grid-template-columns: 90%;
    grid-template-rows: 90% 0;
  }
`;

export const GridScheduleMenu = styled.div`
  display: grid;
  height: 100%;
  grid-template-areas: "Config" "Input" "Upload";
  grid-template-columns: 100%;
  grid-template-rows: 20% 35% 35%;

  align-content: space-around;

  @media (max-width: 590px) {
    grid-template-areas: "Config" "Input" "Upload";
    grid-template-columns: 100%;
    grid-template-rows: 35% 30% 30%;
  }
`;

export const GridScheduleConfig = styled.div`
  grid-area: Config;
  display: grid;
  height: 100%;
  grid-template-areas: "SocialMedia Date";
  grid-template-columns: 45% 45%;
  background: blue;

  justify-content: space-around;

  @media (max-width: 590px) {
    grid-template-areas: "SocialMedia" "Date";
    grid-template-columns: 100%;
    grid-template-rows: 45% 45%;
    align-content: space-around;
  }
`;

export const ContainerScheduleMenu = styled.div`
  grid-area: Menu;
  background: green;
`;

export const ContainerSchedulePreview = styled.div`
  grid-area: Preview;
  background: red;

  @media (max-width: 590px) {
    display: none;
`;

export const ContainerScheduleSocialMedia = styled.div`
  grid-area: SocialMedia;
  background: white;
`;

export const ContainerScheduleDate = styled.div`
  grid-area: Date;
  background: white;
`;

export const ContainerScheduleInput = styled.div`
  grid-area: Input;
  background: red;
`;

export const ContainerScheduleUpload = styled.div`
  grid-area: Upload;
  background: red;
`;
