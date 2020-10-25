import styled from "styled-components";

export const ContainerUpload = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px dashed #e0e0e0;
  border-radius: 4px;

  h1 {
    color: #828282;
    font-family: Poppins-Regular;
    font-size: 0.7em;
    border: none;
    text-align: center;
  }

  img {
    height: 30%;
  }

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
