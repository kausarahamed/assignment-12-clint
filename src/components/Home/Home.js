import React from "react";
import Banner from "./Banner";
import Extra2 from "./Extra2";
import Inventory from "./Inventory";
import JoinUs from "./JoinUs";
import Stat from "./Stat";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <Stat></Stat>
      <Extra2></Extra2>
      <JoinUs></JoinUs>
    </div>
  );
};

export default Home;
