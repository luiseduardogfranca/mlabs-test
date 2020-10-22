import React, { useState, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { AppWrapper } from "./AppWrapper";

const HomePageLazy = React.lazy(() => import("./pages/HomePage.js"));
export const Routes = () => {
  return (
    <React.Suspense fallback={<div>Carregando...</div>}>
      <Switch>
        <Route exact path="/">
          <AppWrapper>
            <HomePageLazy />
          </AppWrapper>
        </Route>
      </Switch>
    </React.Suspense>
  );
};
