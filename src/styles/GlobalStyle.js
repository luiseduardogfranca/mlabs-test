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
    padding: 5px 10px;
    font-family: Poppins-Regular;
    font-size: 0.8em;
    border-bottom: 1px solid #e0e0e0;
  }
`;
