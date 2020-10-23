import React, { useState, useEffect } from "react";
import { ContainerHome } from "./style";
import PostImage from "../../assets/image/home-posts.svg";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export const ScheduleHome = () => {
  return (
    <ContainerHome>
      <img src={PostImage}></img>
      <Link to={"/scheduling"}>
        <Button label={"Agendar post"}></Button>
      </Link>
    </ContainerHome>
  );
};
