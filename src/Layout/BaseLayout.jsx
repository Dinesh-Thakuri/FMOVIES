import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const BaseLayout = ({ children }) => {
  return (
    <div className="bg-bg text-[white] font-sans">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
