import React from "react";

const Blogs = () => {
  return (
    <div className="pt-10 grid md:grid-cols-3 gap-5 py10 ">
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              How will you improve the performance of a React Application?
            </h2>
            <p>Keeping component state nearby where vital</p>
            <p>
              Memoizing Respond components to anticipate superfluous re-renders
            </p>
            <p>Code-splitting in Respond utilizing energetic purport.</p>
            <p>Windowing or list virtualization in React</p>
            <p>Apathetic stacking pictures in Respond</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p>Local state is data we manage in one or another component.</p>
            <p>Global state is data we manage across multiple components.</p>
            <p>
              Server state - Data that comes from an external server that must
              be integrated with our UI state.
            </p>
            <p>
              URL state - Data that exists on our URLs, including the pathname
              and query parameters.
            </p>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
