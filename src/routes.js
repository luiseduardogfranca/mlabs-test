import React, { useState, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { AppWrapper } from "./AppWrapper";

const HomePageLazy = React.lazy(() => import("./pages/HomePage.js"));
const ScheduleLazy = React.lazy(() => import("./pages/Schedule.js"));
const ScheduleListLazy = React.lazy(() => import("./pages/ScheduleList.js"));

export const Routes = () => {
  return (
    <React.Suspense fallback={<div>Carregando...</div>}>
      <Switch>
        <Route exact path="/">
          <AppWrapper>
            <HomePageLazy />
          </AppWrapper>
        </Route>
        <Route path="/scheduling">
          <AppWrapper>
            <ScheduleLazy />
          </AppWrapper>
        </Route>
        <Route path="/schedule-list">
          <AppWrapper>
            <ScheduleListLazy />
          </AppWrapper>
        </Route>
      </Switch>
    </React.Suspense>
  );
};
