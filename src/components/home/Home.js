import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HomeProduct from "../homeProduct/HomeProduct";
import Nav from "../nav/Nav";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <div className="homeContainer">
        <h2 className="homeTitle">Look before what you need ?</h2>
      </div>
      <HomeProduct />
      <Footer />
    </div>
  );
};

export default Home;
