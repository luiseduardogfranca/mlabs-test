import styled from "styled-components";

export const ContainerAvatar = styled.div`
  display: flex;

  h1 {
    font-size: 1em;
  }

  img {
    margin-right: 2em;
    border-radius: 100%;
  }

  @media (max-width: 590px) {
    h1 {
      display: none;
    }

    img {
      margin-right: 0em;
    }
  }
`;
