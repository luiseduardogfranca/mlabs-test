import styled from "styled-components";

export const GridSchedule = styled.div`
  display: grid;
  height: 90%;
  grid-template-areas: "Menu Preview";
  grid-template-columns: 45% 45%;
  justify-content: space-around;

  @media (max-width: 590px) {
    display: -webkit-flex;
    flex-direction: column;
    min-height: 90%;
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
    display: -webkit-flex;
    flex-direction: column;
  }
`;

export const GridScheduleConfig = styled.div`
  grid-area: Config;
  display: grid;
  height: auto;
  grid-template-areas: "SocialMedia Date";
  grid-template-columns: 48% 48%;
  justify-content: space-between;

  @media (max-width: 590px) {
    display: -webkit-flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const ContainerScheduleMenu = styled.div`
  grid-area: Menu;
  height: 100%;
`;

export const ContainerSchedulePreview = styled.div`
  grid-area: Preview;

  @media (max-width: 590px) {
    display: none;
`;

export const ContainerScheduleSocialMedia = styled.div`
  grid-area: SocialMedia;

  @media (max-width: 590px) {
    min-height: 100px;
    margin-bottom: 10px;
  }
`;

export const ContainerScheduleDate = styled.div`
  grid-area: Date;

  @media (max-width: 590px) {
    min-height: 100px;
    margin-bottom: 10px;
  }
`;

export const ContainerScheduleInput = styled.div`
  grid-area: Input;

  @media (max-width: 590px) {
    min-height: 150px;
    margin-bottom: 10px;
    height: auto;
  }
`;

export const ContainerScheduleUpload = styled.div`
  grid-area: Upload;
  @media (max-width: 590px) {
    min-height: 150px;
    height: auto;
    margin-bottom: calc(var(--height-footbar) + 10px);
  }
`;

export const ContainerInput = styled.div`
  display: -webkit-flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;
