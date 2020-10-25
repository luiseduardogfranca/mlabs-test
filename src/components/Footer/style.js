import styled from "styled-components";

export const ContainerFooter = styled.div`
  background: #ffffff;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: var(--height-footbar);
  width: calc(100% - 20px);
  button {
    margin-left: 10px;
  }

  @media (max-width: 590px) {
    justify-content: space-evenly;
    button {
      margin-left: 0;
      width: 30%;
      height: 30px;
    }
  }
`;
