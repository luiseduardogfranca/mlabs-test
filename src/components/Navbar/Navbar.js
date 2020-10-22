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

export const Navbar = () => {
  return (
    <ContainerNavbar>
      <ContainerContent>
        <LogoNavbar src={LogoMlabs}></LogoNavbar>
        <MenuNavbar src={MenuIcon}></MenuNavbar>
        <Avatar />
      </ContainerContent>
    </ContainerNavbar>
  );
};
