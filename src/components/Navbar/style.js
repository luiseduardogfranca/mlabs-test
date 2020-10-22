import styled from "styled-components";

export const ContainerNavbar = styled.div`
  background: #ffffff;
  padding: 0 40px;

  @media (max-width: 590px) {
    padding: 0 24px;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
`;

export const LogoNavbar = styled.img`
  width: 110px;
  @media (max-width: 590px) {
    display: none;
  }
`;

export const MenuNavbar = styled.img`
  width: 22px;

  @media (min-width: 590px) {
    display: none;
  }
`;
