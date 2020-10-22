import React, { useState, useEffect } from "react";
import { ContainerHome } from "./style";
import PostImage from "../../assets/image/home-posts.svg";
import { Button } from "../Button";

export const ScheduleHome = () => {
  return (
    <ContainerHome>
      <img src={PostImage}></img>
      <Button label={"Agendar post"}></Button>
    </ContainerHome>
  );
};
