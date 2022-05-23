import React from "react";
import img2 from "../../img/logo.png";

const JoinUs = () => {
  return (
    <div className="my-16 bg-slate-200 py-10">
      <img className="h-[100px] mx-auto" src={img2} alt="" />
      <h1 className="font-bold text-3xl text-center">
        Where All Customers Belong
      </h1>
      <p className="text-center">
        Things are better as a member. Get first and exclusive access to the
        newest styles and innovations, yearly rewards, points for purchases and
        more.
      </p>
      <div className="text-center mb-10">
        <button className="border-2 p-2 bg-yellow-500 px-6">Join Us</button>
        <button className="border-2 p-2 bg-yellow-500 px-6">
          Take the quiz
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
