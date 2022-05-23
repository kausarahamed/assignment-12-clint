import React from "react";

const Stat = () => {
  return (
    <div>
      <p className="text-center font-bold text-4xl mt-10">Business Summary</p>
      <div class="stats stats-vertical lg:stats-horizontal shadow   justify-center lg:flex">
        <div class="stat hover:bg-orange-200 text-center">
          <div class="stat-title text-3xl text-secondary font-bold">
            Compleate Project
          </div>
          <div class="stat-value">1.5K</div>
          <div class="stat-desc text-2xl">Jan 1st - Jun 1st</div>
        </div>

        <div class="stat hover:bg-orange-200 text-center">
          <div class="stat-title text-3xl text-secondary font-bold">
            Customer
          </div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc text-2xl">↗︎ 400 (22%)</div>
        </div>

        <div class="stat hover:bg-orange-200  text-center">
          <div class="stat-title text-3xl text-secondary font-bold">
            Customer Reviwes
          </div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc text-2xl">↗︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
