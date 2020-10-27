import styled from "styled-components";

export const ContainerButtonSocialNetwork = styled.button`
  background: ${(props) =>
    props.disabled
      ? "#DDDDDD"
      : props.checked
      ? "linear-gradient(135deg, #EF9F2E 25%, #E02B4B 105.56%)"
      : "transparent"};
  border: 1px solid;
  border-color: ${(props) =>
    props.disabled ? "#9E9E9E" : props.checked ? "#EF9F2E" : "#9E9E9E"};
  border-radius: 100%;
  font-size: 0.8em;
  font-family: Poppins-Medium;
  width: 33px;
  height: 33px;
  outline: none;
  cursor: pointer;
  transition: background 300ms;
  padding: 0;

  svg path {
    fill: ${(props) =>
      props.disabled ? "#989898" : props.checked ? "#FFFFFF" : "#333333"};
  }

  &:hover {
    background: ${(props) =>
      props.disabled
        ? "#DDDDDD"
        : props.checked
        ? "linear-gradient(135deg, #EF9F2E 25%, #E02B4B 105.56%)"
        : "#fff3e0"};
    border-color: ${(props) => (props.disabled ? "#9E9E9E" : "#ef9f2e")};

    svg,
    path {
      fill: ${(props) =>
        props.disabled ? "#9E9E9E" : props.checked ? "#FFFFFF" : "#ef9f2e"};
    }
  }
`;

export const IconSocialNetwork = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 33px;
  height: 33px;

  svg {
    height: 80%;
    width: 50%;
  }
`;
