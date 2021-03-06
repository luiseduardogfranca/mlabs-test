import styled from "styled-components";

export const ContainerText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #949494;
  border-radius: 4px;

  @media (max-width: 590px) {
    height: 90px;
    h1,
    img {
      display: none;
    }
    button {
      height: 50%;
    }
  }
`;
