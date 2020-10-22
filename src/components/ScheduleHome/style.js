import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 590px) {
    img {
      width: 100%;
    }
  }
`;
