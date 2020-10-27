import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import { getSchedules } from "../../common/utils/handlerSchedule";
import { getAllScheduleStatus } from "../../services/ScheduleStatus";
import {
  Container,
  ContainerTable,
  Table,
  TableCell,
  TableHeaderCell,
} from "../../styles/GlobalStyle";
import { SocialNetworkList } from "./SocialNetworkList";
import { StatusSchedule } from "./StatusSchedule";
import { ContainerScheduleList } from "./style";

const getStatusById = (id, arrStatus) => {
  if (arrStatus && arrStatus.length > 0) {
    let query = arrStatus.filter((el) => el.id == id);
    return query.length > 0 ? query[0] : null;
  }
  return null;
};

const convertPublicationDate = (dateTime) => {
  let newDate = format(new Date(dateTime), "dd/MM/yyyy");
  let newTime = format(new Date(dateTime), "HH:mm");

  return `${newDate} às ${newTime}h`;
};

export const ScheduleList = () => {
  const [schedules, setSchedules] = useState([]);
  const [status, setStatus] = useState([]);

  if (status && status.length == 0) {
    getAllScheduleStatus((call) =>
      setStatus((el) => (call && call.data ? call.data : null))
    );
  }

  if (schedules && schedules.length == 0) {
    let schedulesData = getSchedules();
    if (schedulesData) setSchedules((el) => [...schedulesData]);
  }

  return (
    <Container>
      <ContainerScheduleList>
        <h1>Listagem de agendamento</h1>
        <ContainerTable>
          <Table id="customers">
            <thead>
              <tr>
                <TableHeaderCell nowrap align={"center"}>
                  Redes sociais
                </TableHeaderCell>
                <TableHeaderCell align={"center"}>Mídia</TableHeaderCell>
                <TableHeaderCell>Texto</TableHeaderCell>
                <TableHeaderCell>Data</TableHeaderCell>
                <TableHeaderCell align={"center"}>Ações</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule, key) => (
                <tr>
                  <TableCell>
                    <SocialNetworkList
                      socialNetworks={schedule.social_network_key}
                    />
                  </TableCell>
                  <TableCell align={"center"}>
                    <img width={50} height={50} src={schedule.media}></img>
                  </TableCell>
                  <TableCell text>
                    <p>{schedule.text}</p>
                    {/* <p>
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Vestibulum tortor quam,
                      feugiat vitae, ultricies eget, tempor sit amet, ante.
                      Donec eu libero sit amet quam egestas semper. Aenean
                      ultricies mi vitae est. Mauris placerat eleifend leo.
                      Quisque sit amet est et sapien ullamcorper pharetra.
                      Vestibulum erat wisi, condimentum sed, commodo vitae,
                      ornare sit amet, wisi. Aenean fermentum, elit eget
                      tincidunt condimentum, eros ipsum rutrum orci, sagittis
                      tempus lacus enim ac dui. Donec non enim in turpis
                      pulvinar facilisis. Ut felis. Praesent dapibus, neque id
                      cursus faucibus, tortor neque egestas augue, eu vulputate
                      magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
                      tincidunt quis, accumsan porttitor, facilisis luctus,
                      metus
                    </p> */}
                  </TableCell>
                  <TableCell nowrap>
                    <p>
                      {schedule && schedule.publication_date
                        ? convertPublicationDate(schedule.publication_date)
                        : null}
                    </p>
                  </TableCell>
                  <TableCell align={"center"}>
                    <a>Preview</a>
                  </TableCell>
                  <TableCell>
                    <StatusSchedule
                      status={getStatusById(schedule.status_key, status)}
                    />
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </Table>
        </ContainerTable>
      </ContainerScheduleList>
    </Container>
  );
};
