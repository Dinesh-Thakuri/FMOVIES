import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateWrapper = ({ children }) => {
  const isLoginStaus = useSelector((state) => state.user.loginStatus);

  // if (!isLoginStaus) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div>
      {/* PrivateWrapper */}
      {children}
    </div>
  );
};

export default PrivateWrapper;
