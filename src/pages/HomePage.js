import React from "react";
import About from "../components/About/About";
import Cards from "../components/Cards/Cards";
import Home from "../components/Home/Home";
import Price from "../components/Price/Price";
import Contact from "../components/Contact/Contact";

const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Cards />
      <Price />
      <Contact />
    </>
  );
};

export default HomePage;
