import React, { useState, useEffect } from "react";
import { Avatar } from "../Avatar/Avatar";
import { ContainerContent, ContainerFooter } from "./style";
import LogoMlabs from "../../assets/icons/logo.svg";
import MenuIcon from "../../assets/icons/bars.svg";
import { Button } from "../Button";
import { Link, useHistory } from "react-router-dom";
import { api } from "../../api/api";

export const Footer = () => {
  const history = useHistory();

  return (
    <ContainerFooter>
      <ContainerContent>
        <Button
          onClick={() => history.push("/")}
          color={"blue"}
          transparent
          label={"Cancelar"}
        ></Button>

        <Button color={"blue"} outline label={"Rascunho"}></Button>
        <Button color={"blue"} label={"Agendar"}></Button>
      </ContainerContent>
    </ContainerFooter>
  );
};
