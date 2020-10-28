import styled from "styled-components";

export const ContainerPreviewPost = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-x: auto;
  overflow-y: hidden;

  @media (max-width: 590px) {
    flex-direction: row;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 360px;
  margin: 0 20px;
  align-items: center;
  justify-content: space-between;

  border: 1px solid #bdbdbd;
  border-radius: 4px;

  @media (max-width: 590px) {
    height: 535px;
    width: 90%;
    margin: 20px;
  }
`;

export const CardIntagramHeader = styled.div`
  display: flex;
  height: 15%;
  width: 90%;
`;

export const CardLinkedinHeader = styled.div`
  display: flex;
  height: 15%;
  width: 90%;
`;

export const CardIntagramBody = styled.div`
  width: 100%;
  height: 60%;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const CardLinkedinBody = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
    overflow: hidden;
    height: 5%;
    width: 90%;
    margin-bottom: 10px;
    font-family: Poppins-Regular;
    font-size: 0.8em;
    line-break: anywhere;
  }
`;

export const CardLinkedinFooter = styled.div`
  height: 15%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  hr {
    width: 100%;
    height: 1px;
    background: "#BDBDBD";
  }

  p {
    font-family: Poppins-Regular;
    color: #828282;
    font-size: 0.8em;
    margin: 0;
    width: 90%;
  }
`;

export const CardIntagramFooter = styled.div`
  height: 20%;
  width: 95%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  p {
    font-family: Poppins-Regular;
    font-size: 0.8em;
    line-break: anywhere;
  }
`;

export const CardImage = styled.div`
  background-image: ${(props) => `url("${props.image}")`};
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
`;

export const CardAvatar = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarName = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  h1 {
    font-size: 0.8em;
    border: none;
    padding: 0;
  }

  p {
    font-size: 0.7em;
    font-family: Poppins-Regular;
    color: #828282;
    margin: 0;
  }
`;

export const ImageAvatar = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  background: ${(props) =>
    props.instagram
      ? "linear-gradient(187.5deg, #ef2ea2 5.81%, #e0a22b 109.34%)"
      : "#2E92EF"};
  border: 1px solid #ef2ea2;
  border-color: ${(props) => (props.instagram ? "#ef2ea2" : "#2E92EF")};
  border-radius: 100%;
  align-items: center;
  justify-content: center;

  svg {
    width: 50%;
    height: 70%;
  }

  svg,
  path {
    fill: #ffffff;
  }
`;

export const ActionsCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  img {
    margin: 0 10px;
  }
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
    font-size: 1.2em;
    width: 60%;
    text-align: center;
    border: none;
    color: #828282;
  }

  img {
    height: 70%;
    width: 50%;
  }

  @media (max-width: 590px) {
    h1 {
      width: 90%;
    }

    img {
      height: 70%;
      width: 60%;
    }
  }
`;
