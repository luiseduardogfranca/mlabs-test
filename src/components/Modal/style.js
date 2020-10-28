import styled from "styled-components";

export const ContainerDialog = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.3);
`;

export const WrapperDialogContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerModalSchedule = styled.div`
  height: 50vh;
  width: 50vw;
  background: #fafafa;
  border: 1px #bdbdbd solid;
  border-radius: 4px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;

  img {
    height: 50%;
  }

  h1 {
    font-family: Poppins-Regular;
    font-size: 1.5em;
  }

  @media (max-width: 590px) {
    height: 70vh;
    width: 90vw;

    h1 {
      font-size: 1.2em;
    }
  }
`;

export const ContainerModalPreview = styled.div`
  display: none;

  @media (max-width: 590px) {
    height: calc(100vh - var(--height-navbar));
    width: 100vw;
    background: #fafafa;
    border: 1px #bdbdbd solid;
    border-radius: 4px;

    display: flex;
    align-self: flex-end;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 1.2em;
    }
  }
`;

export const ContainerModalPreviewCard = styled.div`
  display: none;

  @media (max-width: 590px) {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
