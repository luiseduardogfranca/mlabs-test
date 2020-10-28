import styled from "styled-components";

export const ContainerScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  align-self: center;
  margin-top: 10vh;

  h1 {
    font-size: 1em;
    font-family: Poppins-Regular;
    margin-bottom: 30px;
    color: #4f4f4f;
  }

  a {
    color: #1661f3;
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 590px) {
      margin-top: 5vh;

`;

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;

  span {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    margin-right: 10px;
  }
`;

export const SocialNetworkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialNetworkIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.color ? props.color : "pink")};
  margin: 0 5px;

  border-radius: 100%;
  width: 33px;
  height: 33px;

  svg {
    width: 50%;
    height: 70%;
  }

  svg,
  path {
    fill: #ffffff;
  }
`;

export const ActionSort = styled.span`
  margin: 0 10px;
  cursor: pointer;
`;
