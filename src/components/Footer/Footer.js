import React, { useState, useEffect } from "react";
import { Avatar } from "../Avatar/Avatar";
import { ContainerContent, ContainerFooter } from "./style";
import LogoMlabs from "../../assets/icons/logo.svg";
import MenuIcon from "../../assets/icons/bars.svg";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <ContainerFooter>
      <ContainerContent>
        <Link to="/">
          <Button color={"blue"} transparent label={"Cancelar"}></Button>
        </Link>
        <Button color={"blue"} outline label={"Rascunho"}></Button>
        <Button color={"blue"} label={"Agendar"}></Button>
      </ContainerContent>
    </ContainerFooter>
  );
};
