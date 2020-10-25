import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const WrapperComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #e0e0e0;

  h1 {
    margin: 0;
    padding: 5px 10px;
    font-family: Poppins-Regular;
    font-size: 0.8em;
    border-bottom: 1px solid #e0e0e0;
    color: #333333;
  }

  .file-drop-target,
  .file-drop {
    height: 100%;
  }
`;

export const ContainerComponent = styled.div`
  height: 100%;
  padding: 10px;
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 95%;
  height: 90%;
  border: none;
  outline: none;
  font-family: Poppins-Regular;
  color: #4f4f4f;
`;

export const Input = styled.input`
  width: 95%;
  height: 90%;
  border: none;
  outline: none;
  font-family: Poppins-Regular;
  color: #4f4f4f;
  background: transparent;
`;
