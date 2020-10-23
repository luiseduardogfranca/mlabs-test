import styled from "styled-components";

export const ContainerFooter = styled.div`
  background: #ffffff;
  padding: 0 40px;

  @media (max-width: 590px) {
    padding: 0 24px;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: var(--height-footbar);
  width: 100%;

  button {
    margin-left: 10px;
  }

  @media (max-width: 590px) {
    justify-content: space-around;
    button {
      margin-left: 0;
      width: 30%;
      height: 30px;
    }
  }
`;
