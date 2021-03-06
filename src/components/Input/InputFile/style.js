import styled from "styled-components";

export const ContainerInputFile = styled.button`
  background: ${(props) =>
    props.transparent
      ? "transparent"
      : props.color == "orange" && !props.outline
      ? "#f2994a"
      : props.color == "blue" && !props.outline
      ? "#2F80ED"
      : "inherit"};
  color: ${(props) =>
    (props.color == "orange" || props.color == "blue") &&
    !props.outline &&
    !props.transparent
      ? "white"
      : (props.outline || props.transparent) && props.color == "blue"
      ? "#2F80ED"
      : (props.outline || props.transparent) && props.color == "orange"
      ? "#f2994a"
      : "inherit"};
  border: 1px solid;
  border-color: ${(props) =>
    props.transparent
      ? "transparent"
      : props.color == "orange"
      ? "#e0812c"
      : props.color == "blue"
      ? "#2F80ED"
      : "inherit"};
  border-radius: 4px;
  font-size: 0.8em;
  font-family: Poppins-Medium;
  width: 184px;
  height: 36px;
  outline: none;
  transition: opacity 100ms;

  &:active {
    opacity: 0.7;
  }

  label {
    cursor: pointer;
  }

  input[type="file"] {
    display: none;
  }
`;
