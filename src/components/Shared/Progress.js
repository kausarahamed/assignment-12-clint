import React from "react";

const Progress = () => {
  return (
    <div className="grid gap-5 ">
      complaint
      <progress
        class="progress progress-error  w-56"
        value="10"
        max="100"
      ></progress>
      Advisory
      <progress
        class="progress progress-error  w-56"
        value="40"
        max="100"
      ></progress>
      Managed Services
      <progress
        class="progress progress-error  w-56"
        value="70"
        max="100"
      ></progress>
      Customer Service
      <progress
        class="progress progress-error  w-56"
        value="100"
        max="100"
      ></progress>
    </div>
  );
};

export default Progress;
