import React, { useState, useEffect } from "react";
import { ContainerFlexHome, ContainerHome } from "./style";
import PostImage from "../../assets/image/home-posts.svg";
import { Button } from "../Button";
import { Link, useHistory } from "react-router-dom";

export const ScheduleHome = () => {
  const history = useHistory();

  return (
    <ontainerHome>
      <ContainerFlexHome>
        <img src={PostImage}></img>
        <Button
          onClick={() => history.push("/scheduling")}
          color={"orange"}
          label={"Agendar post"}
        ></Button>
      </ContainerFlexHome>
    </ontainerHome>
  );
};
