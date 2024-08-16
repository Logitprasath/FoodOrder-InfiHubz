import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";

const HeaderRoute = ({ element, showHeader, ...rest }) => {
  return (
    <>
      {showHeader && <Header />}
      <Route {...rest} element={element} />
    </>
  );
};

export default HeaderRoute;
