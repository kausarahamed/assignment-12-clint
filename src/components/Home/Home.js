import React from "react";
import Banner from "./Banner";
import Inventory from "./Inventory";
import JoinUs from "./JoinUs";
import Stat from "./Stat";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <Stat></Stat>
      <JoinUs></JoinUs>
    </div>
  );
};

export default Home;
