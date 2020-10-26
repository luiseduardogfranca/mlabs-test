import styled from "styled-components";

export const ContainerPreviewPost = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-x: scroll;
`;

export const ContainerCard = styled.div`
  height: 80%;
  width: 360px;
  margin: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: grey;
`;

export const ContainerCardEmpty = styled.div`
  height: 90%;
  width: 90%;
  margin: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  h1 {
    width: 60%;
    text-align: center;
    border: none;
    color: #828282;
  }

  img {
    height: 70%;
  }
`;
