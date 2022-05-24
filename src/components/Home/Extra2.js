import React from "react";
import img from "../../img/acParts.webp";
import Button from "../Shared/Button";
import Progress from "../Shared/Progress";
const Extra2 = () => {
  return (
    // <div class="hero min-h-screen bg-base-200">
    //   <div class="hero-content flex-col lg:flex-row">
    //     <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
    //     <div>
    //       <h1 class="text-5xl font-bold">OUR EXPERIENCE</h1>
    //       <p class="py-6">We are Working world With 20+ Years experience</p>
    //       <div className="flex gap-2">
    //         <Button>Our mission</Button>
    //         <Button>Our Vision</Button>
    //       </div>
    //       {/* <button class="btn btn-primary">Get Started</button> */}
    //     </div>
    //   </div>
    // </div>
    <div class="hero min-h-screen bg-gray-200 mt-10">
      <div class="hero-content flex-col lg:flex-row">
        <img className="h-[500px]" src={img} />
        <div className="justify-center">
          <h1 class="text-5xl font-bold">OUR EXPERIENCE</h1>
          <p class="py-6">We are Working world With 20+ Years experience</p>
          <div className="flex gap-2">
            <Button>Our mission</Button>
            <Button>Our Vision</Button>
          </div>
          <p className="mt-5 mb-5">
            The best things about my team is the openness of the group to hear
            other people out and help others.
          </p>
          <div>
            <Progress></Progress>
          </div>
          <progress class="progress w-76"></progress>
        </div>
      </div>
    </div>
  );
};

export default Extra2;
