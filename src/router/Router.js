import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "../Layout/BaseLayout";
import { allRoutes } from "./AllRoutes";
import PrivateWrapper from "./privateRoutes/PrivateWrapper";

const RouteWrapper = ({ route, children }) => {
  const AppLayoutwrapper = route.hasLayout ? BaseLayout : Fragment;
  const PrivateRouteWrapper = route.isPrivate ? PrivateWrapper : Fragment;

  return (
    <PrivateRouteWrapper>
      <AppLayoutwrapper>{children}</AppLayoutwrapper>
    </PrivateRouteWrapper>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {allRoutes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              element={
                <RouteWrapper route={route}>
                  <route.element />
                </RouteWrapper>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
