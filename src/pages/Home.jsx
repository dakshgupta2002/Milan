import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DonateBanner from "../components/DonateBanner";
import HomeCardsContainer from "../components/HomeCardsContainer";
import EventsBanner from "../components/Events";

const Home = (props) => {
  return (
    <>
      <Navbar />
      <Banner />
      <HomeCardsContainer />
      <DonateBanner />
      <EventsBanner />
      <Footer isLoggedIn={props.isLoggedIn}/>
    </>
  );
};

export default Home;
