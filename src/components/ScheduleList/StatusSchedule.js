import React, { useState, useEffect } from "react";
import { ContainerFlexHome, ContainerHome, ContainerStatus } from "./style";
import PostImage from "../../assets/image/home-posts.svg";
import { Button } from "../Button";
import { Link, useHistory } from "react-router-dom";
import { getAllSchedules } from "../../services/Schedule";
import { saveSchedule } from "../../common/utils/handlerSchedule";

export const StatusSchedule = (props) => {
  const { status } = props;
  return (
    <ContainerStatus>
      <span
        style={{
          backgroundColor:
            status && status.color ? status.color : "transparent",
        }}
      />
      <p>{status && status.name ? status.name : null}</p>
    </ContainerStatus>
  );
};
