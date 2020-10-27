import React, { useState, useEffect } from "react";
import { ContainerFlexHome, ContainerHome } from "./style";
import PostImage from "../../assets/image/home-posts.svg";
import { Button } from "../Button";
import { Link, useHistory } from "react-router-dom";
import { getAllSchedules } from "../../services/Schedule";
import { saveSchedule } from "../../common/utils/handlerSchedule";

export const ScheduleHome = () => {
  const history = useHistory();

  const [resSchedules, setResSchedules] = useState([]);

  if (resSchedules && resSchedules.length == 0) {
    getAllSchedules((call) =>
      setResSchedules((el) => (call && call.data ? call.data : null))
    );
  }

  useEffect(() => {
    if (resSchedules && resSchedules.length > 0) {
      resSchedules.map((el) => saveSchedule(el));
    }
  }, [resSchedules]);

  return (
    <ContainerHome>
      <ContainerFlexHome>
        <img src={PostImage}></img>
        <Button
          onClick={() => history.push("/scheduling")}
          color={"orange"}
          label={"Agendar post"}
        ></Button>
      </ContainerFlexHome>
    </ContainerHome>
  );
};
