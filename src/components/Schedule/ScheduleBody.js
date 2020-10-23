import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import {
  ContainerScheduleMenu,
  ContainerSchedulePreview,
  GridSchedule,
  GridScheduleMenu,
  GridScheduleConfig,
  ContainerScheduleSocialMedia,
  ContainerScheduleDate,
  ContainerScheduleInput,
  ContainerScheduleUpload,
} from "./style";
import { Container } from "../../styles/GlobalStyle";

export const ScheduleBody = () => {
  return (
    <Container>
      <GridSchedule>
        <ContainerScheduleMenu>
          <GridScheduleMenu>
            <GridScheduleConfig>
              <ContainerScheduleSocialMedia></ContainerScheduleSocialMedia>
              <ContainerScheduleDate></ContainerScheduleDate>
            </GridScheduleConfig>

            <ContainerScheduleInput></ContainerScheduleInput>
            <ContainerScheduleUpload></ContainerScheduleUpload>
          </GridScheduleMenu>
        </ContainerScheduleMenu>

        <ContainerSchedulePreview></ContainerSchedulePreview>
      </GridSchedule>
    </Container>
  );
};
