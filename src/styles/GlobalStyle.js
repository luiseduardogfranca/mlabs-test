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
  overflow-y: ${(props) => (props.overflowY ? "auto" : "hidden")};

  .file-drop-target,
  .file-drop {
    height: 100%;
  }
`;

export const TitleComponent = styled.div`
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    font-family: Poppins-Regular;
    font-size: 0.8em;
    color: #333333;
    margin: 10px;
    margin-right: auto;
  }

  button {
    margin: 10px;
    margin-left: auto;
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

export const ContainerTable = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`;

export const Table = styled.table`
  font-family: Poppins-Regular;
  border-collapse: collapse;
  width: 100%;
  color: #4f4f4f;

  tbody {
    border: 1px solid #bdbdbd;
  }

  thead {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  th {
    border: 1px solid #bdbdbd;
    padding: 8px 15px;
    white-space: nowrap;
  }

  tr:nth-child(even) {
    background-color: #ffffff;
  }

  tr {
    background: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
`;

export const TableHeaderCell = styled.th`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
  background-color: #ffffff;
  font-size: 1em;
  text-align: ${(props) =>
    props.align == "center" || props.align == "left" || props.align == "right"
      ? props.align
      : "initial"};
  white-space: ${(props) => (props.nowrap ? "nowrap" : "initial")};
  @media (max-width: 590px) {
    font-size: 0.8em;
  }
`;

export const TableCell = styled.td`
  border-left: 1px solid #bdbdbd;
  padding: 8px 15px;
  font-size: 1em;
  text-align: ${(props) =>
    props.align == "center" || props.align == "left" || props.align == "right"
      ? props.align
      : "initial"};
  white-space: ${(props) => (props.nowrap ? "nowrap" : "initial")};

  p {
    max-height: ${(props) => (props.text ? "70px" : "initial")};
    overflow-y: ${(props) => (props.text ? "auto" : "initial")};
  }

  @media (max-width: 590px) {
    font-size: 0.8em;
    p {
      max-height: ${(props) => (props.text ? "70px" : "initial")};
      width: ${(props) => (props.text ? "600px" : "initial")};
      overflow-y: ${(props) => (props.text ? "auto" : "initial")};
    }
  }
`;
