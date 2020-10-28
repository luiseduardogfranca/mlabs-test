import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import { convertSPublicationDateToText } from "../../common/utils/convertDateTime";
import {
  sortSchedulesByDateAsc,
  sortSchedulesByDateDesc,
} from "../../common/utils/sortBy";
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
import { ActionSort, ContainerScheduleList } from "./style";
import { ReactComponent as ArrowUpIcon } from "../../assets/icons/arrow-up.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/icons/arrow-down.svg";

const getStatusById = (id, arrStatus) => {
  if (arrStatus && arrStatus.length > 0) {
    let query = arrStatus.filter((el) => el.id == id);
    return query.length > 0 ? query[0] : null;
  }
  return null;
};

export const ScheduleList = () => {
  const [schedules, setSchedules] = useState([]);
  const [status, setStatus] = useState([]);
  const [sortByAsc, setSortByAsc] = useState(false);

  if (status && status.length == 0) {
    getAllScheduleStatus((call) =>
      setStatus((el) => (call && call.data ? call.data : null))
    );
  }

  if (schedules && schedules.length == 0) {
    let schedulesData = getSchedules();
    if (schedulesData) {
      let scheduledOrders = sortSchedulesByDateAsc(
        schedulesData,
        "publication_date"
      );
      if (scheduledOrders) setSchedules((el) => [...scheduledOrders]);
    }
  }

  const handleSortByDate = () => {
    if (sortByAsc) {
      setSchedules((el) => {
        let scheduledOrders = sortSchedulesByDateAsc(el, "publication_date");
        return scheduledOrders
          ? JSON.parse(JSON.stringify(scheduledOrders))
          : el;
      });
      setSortByAsc((el) => false);
    } else if (sortByAsc == false) {
      setSchedules((el) => {
        let scheduledOrders = sortSchedulesByDateDesc(el, "publication_date");
        return scheduledOrders
          ? JSON.parse(JSON.stringify(scheduledOrders))
          : el;
      });
      setSortByAsc((el) => true);
    }
  };

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
                <TableHeaderCell>
                  Data
                  <ActionSort onClick={() => handleSortByDate()}>
                    {!sortByAsc ? <ArrowDownIcon /> : <ArrowUpIcon />}
                  </ActionSort>
                </TableHeaderCell>
                <TableHeaderCell align={"center"}>Ações</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </tr>
            </thead>
            <tbody>
              {schedules &&
                schedules.map((schedule, key) => (
                  <tr key={schedule.id}>
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
                    </TableCell>
                    <TableCell nowrap>
                      <p>
                        {schedule && schedule.publication_date
                          ? convertSPublicationDateToText(
                              schedule.publication_date
                            )
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
