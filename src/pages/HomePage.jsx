import React from "react";
import Banner from "../components/customs/Banner";
import Details from "../components/customs/Details";
import Counter from "../components/customs/CounterUp";
import UpperBanner from "../components/customs/UpperBanner";
import Content from "../components/customs/Content";
import Location from "../components/customs/Location";

function HomePage() {
  return (
    <div>
      <UpperBanner />
      {/* <MyLeaderBoardAd /> */}
      <Counter />
      <Banner />
      <Content />
      <Details />
      <Location />
      {/* <BugPage /> */}
    </div>
  );
}

export default HomePage;
