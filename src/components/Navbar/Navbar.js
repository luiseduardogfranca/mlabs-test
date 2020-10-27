import React, { useState, useEffect } from "react";
import { Avatar } from "../Avatar/Avatar";
import {
  ContainerContent,
  ContainerNavbar,
  LogoNavbar,
  MenuNavbar,
} from "./style";
import LogoMlabs from "../../assets/icons/logo.svg";
import MenuIcon from "../../assets/icons/bars.svg";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();

  return (
    <ContainerNavbar>
      <ContainerContent>
        <LogoNavbar
          onClick={() => history.push("/")}
          src={LogoMlabs}
        ></LogoNavbar>
        <MenuNavbar
          onClick={() => history.push("/")}
          src={MenuIcon}
        ></MenuNavbar>
        <Avatar />
      </ContainerContent>
    </ContainerNavbar>
  );
};
