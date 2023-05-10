import React from "react";
import logo from "../../assets/images/logo.svg";
import Header from "./Header";
import Categories from "../category/Categories";
import HowItWorks from "../howItWorks/HowItWorks";
import Footer from "./Footer";
import Main from "./Main";
import Banner from "./Banner";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </>
  );
};

export default Dashboard;
