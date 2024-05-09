import React, { useContext } from "react";
import Context from "./context/Context";
import Header from "./context/Header";
import Footer from "./context/Footer";

const Page = ({ isDark, setIsDark }) => {
  return (
    <div className="page">
      <Header isDark={isDark} /> 
      <Context isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};
export default Page;
